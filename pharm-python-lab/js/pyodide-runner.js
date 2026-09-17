/**
 * PharmPy Lab - Python Execution Engine
 * Powered by Pyodide (WebAssembly Python) with Virtual FS for Healthcare CSV Datasets
 */

class PythonRunner {
    constructor() {
        this.pyodide = null;
        this.isLoading = false;
        this.isReady = false;
        this.initPromise = null;
        this.useBackendFallback = false;
    }

    async init(onStatusUpdate = () => {}) {
        if (this.isReady) return this.pyodide;
        if (this.initPromise) return this.initPromise;

        this.initPromise = (async () => {
            try {
                onStatusUpdate("Loading Python WebAssembly engine...");
                if (typeof loadPyodide === "undefined") {
                    throw new Error("Pyodide script not loaded in page.");
                }

                this.pyodide = await loadPyodide({
                    indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
                });

                onStatusUpdate("Loading scientific packages (NumPy, Pandas, Matplotlib)...");
                try {
                    await this.pyodide.loadPackage(["numpy", "pandas", "matplotlib"]);
                } catch (pkgErr) {
                    console.warn("Scientific packages preload warning:", pkgErr);
                }

                // Write synthetic datasets into Pyodide Virtual Filesystem
                if (typeof EMBEDDED_DATASETS !== "undefined") {
                    onStatusUpdate("Mounting pharmaceutical datasets into virtual filesystem...");
                    for (const [filename, content] of Object.entries(EMBEDDED_DATASETS)) {
                        try {
                            this.pyodide.FS.writeFile(filename, content);
                            this.pyodide.FS.writeFile("/" + filename, content);
                        } catch (fsErr) {
                            console.warn("Could not write file to virtual FS:", filename, fsErr);
                        }
                    }
                }

                // Standard Output / Error capture harness
                await this.pyodide.runPythonAsync(`
import sys
import io
import json
import math

class OutputCatcher:
    def __init__(self):
        self.stdout = io.StringIO()
        self.stderr = io.StringIO()

    def __enter__(self):
        sys.stdout = self.stdout
        sys.stderr = self.stderr
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        sys.stdout = sys.__stdout__
        sys.stderr = sys.__stderr__

    def get_stdout(self):
        return self.stdout.getvalue()

    def get_stderr(self):
        return self.stderr.getvalue()
`);

                this.isReady = true;
                onStatusUpdate("Python 3.12 (WebAssembly) Ready");
                return this.pyodide;
            } catch (err) {
                console.warn("Pyodide CDN initialization failed. Using Local Python Server Mode:", err);
                this.useBackendFallback = true;
                onStatusUpdate("Local Python Server Mode (Offline Ready)");
                return null;
            }
        })();

        return this.initPromise;
    }

    async executeCode(code) {
        const startTime = performance.now();

        if (this.useBackendFallback || !this.pyodide) {
            return this.executeViaLocalBackend(code);
        }

        try {
            this.pyodide.globals.set("__user_code__", code);
            const pyScript = `
catcher = OutputCatcher()
__exec_error__ = None

with catcher:
    try:
        namespace = {}
        exec(__user_code__, namespace)
    except Exception as e:
        import traceback
        __exec_error__ = traceback.format_exc()

{
    "stdout": catcher.get_stdout(),
    "stderr": catcher.get_stderr(),
    "error": __exec_error__
}
`;
            const resultProxy = await this.pyodide.runPythonAsync(pyScript);
            const result = resultProxy.toJs({ dict_converter: Object.fromEntries });
            resultProxy.destroy();

            const executionTime = Math.round(performance.now() - startTime);
            return {
                stdout: result.stdout || "",
                stderr: result.stderr || "",
                error: result.error || null,
                executionTime
            };
        } catch (err) {
            return {
                stdout: "",
                stderr: "",
                error: err.message || String(err),
                executionTime: Math.round(performance.now() - startTime)
            };
        }
    }

    async runTests(studentCode, testCases) {
        const startTime = performance.now();

        if (this.useBackendFallback || !this.pyodide) {
            return this.runTestsViaLocalBackend(studentCode, testCases);
        }

        try {
            this.pyodide.globals.set("__student_code__", studentCode);
            this.pyodide.globals.set("__test_cases_json__", JSON.stringify(testCases));

            const testRunnerPython = `
import json
import math
import traceback

def is_close(val1, val2, tol=0.05):
    if isinstance(val1, (int, float)) and isinstance(val2, (int, float)):
        return math.isclose(float(val1), float(val2), rel_tol=0.01, abs_tol=tol)
    if isinstance(val1, (list, tuple)) and isinstance(val2, (list, tuple)):
        if len(val1) != len(val2):
            return False
        return all(is_close(v1, v2, tol) for v1, v2 in zip(val1, val2))
    if isinstance(val1, dict) and isinstance(val2, dict):
        if set(val1.keys()) != set(val2.keys()):
            return False
        return all(is_close(val1[k], val2[k], tol) for k in val1)
    return str(val1).strip().lower() == str(val2).strip().lower()

test_cases = json.loads(__test_cases_json__)
results = []
ns = {}
catcher = OutputCatcher()

compile_error = None
captured_stdout = ""
with catcher:
    try:
        exec(__student_code__, ns)
    except Exception:
        compile_error = traceback.format_exc()
captured_stdout = catcher.get_stdout()

if compile_error:
    for tc in test_cases:
        results.append({
            "name": tc.get("name", "Test"),
            "call": tc.get("call", ""),
            "expected": tc.get("expected") or tc.get("expectedValue") or tc.get("expectedOutput"),
            "actual": None,
            "passed": False,
            "error": "Syntax/Runtime Error during execution:\\n" + compile_error,
            "description": tc.get("description", "")
        })
else:
    for tc in test_cases:
        t_type = tc.get("type", "call")
        name = tc.get("name", "Test")
        desc = tc.get("description", "")
        
        try:
            if t_type == "stdout":
                expected = tc.get("expectedOutput", "")
                passed = expected.lower() in captured_stdout.lower()
                results.append({
                    "name": name,
                    "call": "print output check",
                    "expected": expected,
                    "actual": captured_stdout.strip(),
                    "passed": bool(passed),
                    "error": None if passed else f"Expected output to contain: '{expected}'",
                    "description": desc
                })
            elif t_type == "variable":
                var_name = tc.get("varName", "")
                expected = tc.get("expectedValue")
                if var_name not in ns:
                    results.append({
                        "name": name,
                        "call": f"Check variable: {var_name}",
                        "expected": expected,
                        "actual": None,
                        "passed": False,
                        "error": f"Variable '{var_name}' was not created in your code!",
                        "description": desc
                    })
                else:
                    actual = ns[var_name]
                    passed = is_close(actual, expected)
                    results.append({
                        "name": name,
                        "call": f"Variable {var_name}",
                        "expected": expected,
                        "actual": str(actual),
                        "passed": bool(passed),
                        "error": None if passed else f"Expected {var_name} = {expected}, but received: {actual}",
                        "description": desc
                    })
            elif t_type == "custom":
                check_code = tc.get("code", "True")
                passed = bool(eval(check_code, ns))
                results.append({
                    "name": name,
                    "call": check_code,
                    "expected": "Condition True",
                    "actual": "True" if passed else "False",
                    "passed": passed,
                    "error": None if passed else "Condition not met",
                    "description": desc
                })
            elif t_type == "stdout_check":
                results.append({
                    "name": name,
                    "call": "Script Execution",
                    "expected": "Execution Complete",
                    "actual": "Success",
                    "passed": True,
                    "error": None,
                    "description": desc
                })
            else:
                # Default function call check
                call_code = tc.get("call", "")
                expected = tc.get("expected") if "expected" in tc else tc.get("expectedValue")
                actual = eval(call_code, ns)
                passed = is_close(actual, expected)
                results.append({
                    "name": name,
                    "call": call_code,
                    "expected": expected,
                    "actual": actual,
                    "passed": bool(passed),
                    "error": None if passed else f"Expected: {expected}, but received: {actual}",
                    "description": desc
                })
        except Exception:
            results.append({
                "name": name,
                "call": tc.get("call", ""),
                "expected": tc.get("expected"),
                "actual": None,
                "passed": False,
                "error": traceback.format_exc(),
                "description": desc
            })

json.dumps(results)
`;

            const resultsJson = await this.pyodide.runPythonAsync(testRunnerPython);
            const results = JSON.parse(resultsJson);
            const passedCount = results.filter(r => r.passed).length;
            const executionTime = Math.round(performance.now() - startTime);

            return {
                passedCount,
                totalCount: results.length,
                allPassed: passedCount === results.length,
                results,
                executionTime
            };
        } catch (err) {
            console.error("Test runner error:", err);
            return {
                passedCount: 0,
                totalCount: testCases.length,
                allPassed: false,
                results: testCases.map(tc => ({
                    name: tc.name,
                    call: tc.call || "Test",
                    expected: tc.expected || tc.expectedValue || tc.expectedOutput,
                    actual: null,
                    passed: false,
                    error: err.message,
                    description: tc.description || ""
                })),
                executionTime: Math.round(performance.now() - startTime)
            };
        }
    }

    async renderPlot(plotCode) {
        if (this.useBackendFallback || !this.pyodide) {
            return this.renderPlotViaBackend(plotCode);
        }

        try {
            this.pyodide.globals.set("__plot_code__", plotCode);
            const runnerPython = `
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import io
import base64

plt.clf()
plt.close('all')

ns = {"plt": plt}
try:
    import numpy as np
    ns["np"] = np
    import pandas as pd
    ns["pd"] = pd
except Exception:
    pass

exec(__plot_code__, ns)

buf = io.BytesIO()
plt.savefig(buf, format='png', dpi=120, bbox_inches='tight')
buf.seek(0)
img_b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
plt.close('all')
f"data:image/png;base64,{img_b64}"
`;
            const dataUrl = await this.pyodide.runPythonAsync(runnerPython);
            return { success: true, dataUrl };
        } catch (err) {
            console.error("Plot render error:", err);
            return { success: false, error: err.message || String(err) };
        }
    }

    async explainCode(code) {
        // Line-by-line pedagogical breakdown in friendly language
        const lines = code.split('\n');
        const explanations = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line || line.startsWith('#')) continue;

            let explanation = "Executes this instruction.";

            if (line.startsWith('print(')) {
                explanation = "Calls print() to display information on the screen or terminal.";
            } else if (line.startsWith('import ')) {
                const mod = line.replace('import ', '').trim();
                explanation = `Loads the external library '${mod}' into Python memory so you can use its specialized tools.`;
            } else if (line.includes(' = pd.read_csv(')) {
                explanation = "Uses Pandas to read an external healthcare CSV dataset into an organized DataFrame table.";
            } else if (line.startsWith('def ')) {
                const funcName = line.replace('def ', '').split('(')[0];
                explanation = `Defines a new modular function named '${funcName}' that can be reused anywhere in your program.`;
            } else if (line.startsWith('if ')) {
                explanation = "Evaluates this condition: if it is True, Python runs the indented lines below it.";
            } else if (line.startsWith('elif ')) {
                explanation = "Checks an alternative condition if the previous if/elif conditions were False.";
            } else if (line.startsWith('else:')) {
                explanation = "Runs automatically if none of the above conditions were True.";
            } else if (line.startsWith('for ')) {
                explanation = "Repeats the indented code block for each item in the specified sequence or range.";
            } else if (line.startsWith('while ')) {
                explanation = "Continuously repeats the indented lines as long as the specified condition remains True.";
            } else if (line.startsWith('return ')) {
                explanation = "Sends the calculated pharmaceutical result back to whoever called the function.";
            } else if (line.startsWith('plt.plot(')) {
                explanation = "Plots a continuous scientific line graph connecting X and Y coordinate points.";
            } else if (line.startsWith('plt.scatter(')) {
                explanation = "Draws discrete scatter points to assess correlation between two parameters.";
            } else if (line.startsWith('plt.hist(')) {
                explanation = "Groups continuous measurements into frequency bins to display the distribution curve.";
            } else if (line.startsWith('plt.show()')) {
                explanation = "Renders and displays the complete Matplotlib figure on the screen.";
            } else if (line.includes(' = ') && !line.includes('==')) {
                const parts = line.split(' = ');
                const varName = parts[0].trim();
                const value = parts[1].trim();
                explanation = `Creates a variable container labeled '${varName}' and stores the value: ${value}`;
            }

            explanations.push({
                lineNum: i + 1,
                code: line,
                explanation: explanation
            });
        }

        return explanations;
    }

    // Backend Fallback Endpoints
    async executeViaLocalBackend(code) {
        const startTime = performance.now();
        try {
            const resp = await fetch("/api/run", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code })
            });
            const data = await resp.json();
            return {
                stdout: data.stdout || "",
                stderr: data.stderr || "",
                error: data.error || null,
                executionTime: Math.round(performance.now() - startTime)
            };
        } catch (err) {
            return {
                stdout: "",
                stderr: "",
                error: "Local server communication error: " + err.message,
                executionTime: Math.round(performance.now() - startTime)
            };
        }
    }

    async runTestsViaLocalBackend(studentCode, testCases) {
        const startTime = performance.now();
        try {
            const resp = await fetch("/api/test", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: studentCode, testCases })
            });
            const data = await resp.json();
            return {
                ...data,
                executionTime: Math.round(performance.now() - startTime)
            };
        } catch (err) {
            return {
                passedCount: 0,
                totalCount: testCases.length,
                allPassed: false,
                results: testCases.map(tc => ({
                    ...tc,
                    actual: null,
                    passed: false,
                    error: "Backend communication error: " + err.message
                })),
                executionTime: Math.round(performance.now() - startTime)
            };
        }
    }

    async renderPlotViaBackend(plotCode) {
        try {
            const resp = await fetch("/api/plot", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: plotCode })
            });
            const data = await resp.json();
            return data;
        } catch (err) {
            return { success: false, error: err.message };
        }
    }
}

window.pythonRunner = new PythonRunner();
