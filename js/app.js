/**
 * PHARMPY LAB — B.PHARM SEMESTER I EDITION
 * Application Controller & Pedagogical UI Engine
 */

class PharmPyLabApp {
    constructor() {
        this.activeUnitId = "unit-1";
        this.currentLesson = null;
        this.editor = null;
        this.sandboxEditor = null;
        this.viewMode = "curriculum"; // "curriculum", "home", "sandbox"
        this.activeTab = "terminal";  // "terminal", "tests", "graph"
        this.hintTier = 0;           // 0: none, 1: concept, 2: structure, 3: near-complete, 4: full solution
        
        // Persistent State
        this.facultyMode = JSON.parse(localStorage.getItem("pharmpy_faculty_mode") || "false");
        this.solvedLessons = new Set(JSON.parse(localStorage.getItem("pharmpy_solved_lessons") || "[]"));
        this.codeCache = JSON.parse(localStorage.getItem("pharmpy_code_cache") || "{}");
        this.quizScores = JSON.parse(localStorage.getItem("pharmpy_quiz_scores") || "{}");
        this.theme = localStorage.getItem("pharmpy_theme") || "light";

        this.init();
    }

    async init() {
        this.applyTheme(this.theme);
        this.initCodeMirror();
        this.renderHeaderProgress();
        this.renderSidebar();
        this.renderFormulaCheatSheet();
        this.setupEventListeners();
        this.updateFacultyModeUI();

        // Load initial lesson
        const lastLessonId = localStorage.getItem("pharmpy_last_lesson_id") || BP101T_LESSONS[0].id;
        this.selectLesson(lastLessonId);

        // Initialize Pyodide Runtime
        this.updateStatus("Initializing Python WebAssembly environment...", "running");
        await window.pythonRunner.init((msg) => {
            this.updateStatus(msg, "running");
        });
        this.updateStatus("Python 3.12 (BP101T Ready)", "ready");
    }

    applyTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("pharmpy_theme", theme);
        const icon = document.getElementById("theme-toggle-icon");
        if (icon) {
            icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
        }
        if (this.editor) {
            this.editor.setOption("theme", theme === "dark" ? "material-darker" : "default");
        }
        if (this.sandboxEditor) {
            this.sandboxEditor.setOption("theme", theme === "dark" ? "material-darker" : "default");
        }
    }

    toggleTheme() {
        this.applyTheme(this.theme === "dark" ? "light" : "dark");
    }

    toggleFacultyMode() {
        this.facultyMode = !this.facultyMode;
        localStorage.setItem("pharmpy_faculty_mode", JSON.stringify(this.facultyMode));
        this.updateFacultyModeUI();
        this.renderSidebar();
        if (this.currentLesson) {
            this.renderLessonDetails(this.currentLesson);
        }
    }

    updateFacultyModeUI() {
        const toggleBtn = document.getElementById("faculty-mode-btn");
        if (toggleBtn) {
            if (this.facultyMode) {
                toggleBtn.classList.remove("btn-outline");
                toggleBtn.classList.add("btn-primary");
                toggleBtn.innerHTML = `<i class="fas fa-chalkboard-teacher"></i> Faculty Mode: ON`;
            } else {
                toggleBtn.classList.remove("btn-primary");
                toggleBtn.classList.add("btn-outline");
                toggleBtn.innerHTML = `<i class="fas fa-graduation-cap"></i> Faculty Mode`;
            }
        }
    }

    initCodeMirror() {
        const textarea = document.getElementById("code-editor-textarea");
        if (typeof CodeMirror !== "undefined" && textarea) {
            this.editor = CodeMirror.fromTextArea(textarea, {
                mode: "python",
                lineNumbers: true,
                matchBrackets: true,
                indentUnit: 4,
                tabSize: 4,
                indentWithTabs: false,
                theme: this.theme === "dark" ? "material-darker" : "default",
                extraKeys: {
                    "Tab": (cm) => cm.replaceSelection("    ", "end"),
                    "Ctrl-Enter": () => this.handleRunCode(),
                    "Cmd-Enter": () => this.handleRunCode()
                }
            });

            this.editor.on("change", () => {
                if (this.currentLesson) {
                    this.codeCache[this.currentLesson.id] = this.editor.getValue();
                    localStorage.setItem("pharmpy_code_cache", JSON.stringify(this.codeCache));
                }
            });
        }

        const sandboxTextarea = document.getElementById("sandbox-editor-textarea");
        if (typeof CodeMirror !== "undefined" && sandboxTextarea) {
            this.sandboxEditor = CodeMirror.fromTextArea(sandboxTextarea, {
                mode: "python",
                lineNumbers: true,
                matchBrackets: true,
                indentUnit: 4,
                tabSize: 4,
                theme: this.theme === "dark" ? "material-darker" : "default"
            });
        }
    }

    isUnitUnlocked(unitId) {
        if (this.facultyMode) return true;
        if (unitId === "unit-1" || unitId === "advanced-track") return true;

        const unitIndex = BP101T_UNITS.findIndex(u => u.id === unitId);
        if (unitIndex <= 0) return true;

        const prevUnit = BP101T_UNITS[unitIndex - 1];
        const prevUnitLessons = BP101T_LESSONS.filter(l => l.unitId === prevUnit.id);
        const solvedCount = prevUnitLessons.filter(l => this.solvedLessons.has(l.id)).length;
        
        // Unlocked if at least 75% of previous unit is completed
        return solvedCount >= Math.ceil(prevUnitLessons.length * 0.75);
    }

    renderSidebar(searchQuery = "") {
        const sidebar = document.getElementById("sidebar-units-container");
        if (!sidebar) return;

        sidebar.innerHTML = "";
        const query = searchQuery.toLowerCase().trim();

        BP101T_UNITS.forEach(unit => {
            let unitLessons = [];
            if (unit.id === "advanced-track") {
                unitLessons = ADVANCED_PHARM_PROBLEMS;
            } else {
                unitLessons = BP101T_LESSONS.filter(l => l.unitId === unit.id);
            }

            if (query) {
                unitLessons = unitLessons.filter(l => 
                    l.title.toLowerCase().includes(query) || 
                    l.summary.toLowerCase().includes(query) ||
                    l.syllabusTopic.toLowerCase().includes(query)
                );
            }

            if (unitLessons.length === 0 && query) return;

            const isUnlocked = this.isUnitUnlocked(unit.id);
            const totalCount = unitLessons.length;
            const solvedCount = unitLessons.filter(l => this.solvedLessons.has(l.id)).length;

            const groupEl = document.createElement("div");
            groupEl.className = `unit-sidebar-group ${isUnlocked ? '' : 'unit-locked'}`;

            groupEl.innerHTML = `
                <div class="unit-group-header" data-unit="${unit.id}">
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <i class="fas ${unit.icon}" style="color:var(--primary);"></i>
                        <div>
                            <span class="unit-tag">${unit.number}</span>
                            <div class="unit-title-text">${unit.title}</div>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        ${isUnlocked ? `
                            <span class="unit-progress-count">${solvedCount}/${totalCount}</span>
                            <i class="fas fa-chevron-down toggle-icon"></i>
                        ` : `
                            <i class="fas fa-lock" style="color:var(--text-subtle);"></i>
                        `}
                    </div>
                </div>
                <div class="unit-lessons-list" id="lessons-list-${unit.id}" style="${unit.id === this.activeUnitId ? 'display:block;' : 'display:none;'}"></div>
            `;

            const headerEl = groupEl.querySelector(".unit-group-header");
            const listEl = groupEl.querySelector(`#lessons-list-${unit.id}`);

            headerEl.onclick = () => {
                if (!isUnlocked) {
                    alert(`This unit is locked! Complete the previous unit or enable Faculty Mode in the top header to inspect it.`);
                    return;
                }
                const isExpanded = listEl.style.display === "block";
                listEl.style.display = isExpanded ? "none" : "block";
                this.activeUnitId = unit.id;
            };

            // Populate lessons
            unitLessons.forEach(lesson => {
                const isSolved = this.solvedLessons.has(lesson.id);
                const isActive = this.currentLesson && this.currentLesson.id === lesson.id;

                const item = document.createElement("a");
                item.className = `lesson-nav-item ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}`;
                item.href = `#${lesson.id}`;
                item.id = `nav-${lesson.id}`;
                item.innerHTML = `
                    <span class="lesson-nav-title">${lesson.title}</span>
                    <i class="fas ${isSolved ? 'fa-check-circle check-solved' : 'fa-circle-notch'}"></i>
                `;
                item.onclick = (e) => {
                    e.preventDefault();
                    this.selectLesson(lesson.id);
                };
                listEl.appendChild(item);
            });

            // Add Unit Quiz button if not advanced track
            if (unit.id !== "advanced-track" && BP101T_QUIZZES[unit.id]) {
                const quizBtn = document.createElement("button");
                quizBtn.className = "btn btn-outline btn-sm unit-quiz-nav-btn";
                quizBtn.style.margin = "0.4rem 0.5rem 0.6rem 0.5rem";
                quizBtn.style.width = "calc(100% - 1rem)";
                quizBtn.innerHTML = `<i class="fas fa-tasks"></i> Take ${unit.number} Checkpoint Quiz`;
                quizBtn.onclick = () => this.showQuizModal(unit.id);
                listEl.appendChild(quizBtn);
            }

            sidebar.appendChild(groupEl);
        });
    }

    selectLesson(lessonId) {
        let lesson = BP101T_LESSONS.find(l => l.id === lessonId);
        if (!lesson) {
            lesson = ADVANCED_PHARM_PROBLEMS.find(l => l.id === lessonId) || BP101T_LESSONS[0];
        }

        this.currentLesson = lesson;
        this.activeUnitId = lesson.unitId;
        this.hintTier = 0;
        localStorage.setItem("pharmpy_last_lesson_id", lesson.id);

        if (this.viewMode !== "curriculum") {
            this.switchViewMode("curriculum");
        }

        // Highlight sidebar nav
        document.querySelectorAll(".lesson-nav-item").forEach(el => el.classList.remove("active"));
        const activeNav = document.getElementById(`nav-${lesson.id}`);
        if (activeNav) {
            activeNav.classList.add("active");
            const parentList = activeNav.closest(".unit-lessons-list");
            if (parentList) parentList.style.display = "block";
        }

        this.renderLessonDetails(lesson);

        // Populate editor
        const savedCode = this.codeCache[lesson.id];
        const codeToSet = savedCode || lesson.scaffoldCode || lesson.starterCode;
        if (this.editor) {
            this.editor.setValue(codeToSet);
            this.editor.clearHistory();
        }

        // Toggle plot button
        const plotBtn = document.getElementById("btn-plot-curve");
        if (plotBtn) {
            plotBtn.style.display = lesson.hasPlot ? "inline-flex" : "none";
        }

        this.setTerminalOutput("Terminal ready. Click 'Run Code' (Ctrl+Enter) or 'Test Solution'.", "stdout");
        this.updateHintUI();
    }

    renderLessonDetails(lesson) {
        const area = document.getElementById("lesson-content-area");
        if (!area) return;

        const isSolved = this.solvedLessons.has(lesson.id);
        const isAdvanced = lesson.unitId === "advanced-track";

        area.innerHTML = `
            ${isAdvanced ? `
                <div class="advanced-enrichment-banner">
                    <i class="fas fa-exclamation-triangle"></i>
                    <strong>Advanced Pharmacy Application:</strong> This is an upper-semester enrichment challenge (Pharmacokinetics & Physical Pharmacy). First-semester students should complete Units I–V first!
                </div>
            ` : `
                <div class="syllabus-breadcrumb">
                    <span><strong>BP101T</strong></span> &rsaquo;
                    <span>${lesson.unitNumber}</span> &rsaquo;
                    <span>${lesson.co} (${lesson.bloom})</span>
                </div>
            `}

            <div class="lesson-header-badges">
                <span class="badge badge-unit">${lesson.syllabusTopic}</span>
                <span class="badge badge-difficulty">${lesson.difficulty}</span>
                ${isSolved ? '<span class="badge badge-status-solved"><i class="fas fa-check"></i> Completed</span>' : ''}
                ${lesson.hasPlot ? '<span class="badge badge-unit" style="background:#e0e7ff; color:#4338ca;"><i class="fas fa-chart-line"></i> Graph Activity</span>' : ''}
            </div>

            <h2 class="lesson-title">${lesson.title}</h2>
            <p class="lesson-summary-text">${lesson.summary}</p>

            ${this.facultyMode && lesson.teachingTip ? `
                <div class="faculty-tip-box">
                    <strong><i class="fas fa-chalkboard-teacher"></i> Faculty Teaching Guide:</strong>
                    <p style="margin-top:0.25rem; font-size:0.82rem;">${lesson.teachingTip}</p>
                </div>
            ` : ''}

            <!-- 1. Learn & Pharmacy Context -->
            <div class="lesson-section">
                <div class="section-heading">
                    <i class="fas fa-book-medical" style="color:var(--primary);"></i>
                    What You Are Learning & Why It Matters
                </div>
                <div class="learn-content-card">
                    ${lesson.learn || lesson.clinicalContext}
                </div>
            </div>

            <!-- 2. See Example -->
            ${lesson.exampleCode ? `
                <div class="lesson-section">
                    <div class="section-heading">
                        <i class="fas fa-code" style="color:var(--secondary);"></i>
                        See Example Code
                    </div>
                    <pre class="example-code-block"><code>${lesson.exampleCode}</code></pre>
                </div>
            ` : ''}

            <!-- 3. Formula / Requirements -->
            ${lesson.formulaHtml ? `
                <div class="lesson-section">
                    <div class="section-heading">
                        <i class="fas fa-calculator" style="color:var(--primary);"></i>
                        Pharmaceutical Formula & Theory
                    </div>
                    <div class="formula-box">${lesson.formulaHtml}</div>
                </div>
            ` : ''}

            <!-- 4. Common Beginner Mistakes -->
            ${lesson.commonMistakes && lesson.commonMistakes.length > 0 ? `
                <div class="lesson-section">
                    <div class="section-heading">
                        <i class="fas fa-bug" style="color:var(--warning);"></i>
                        Common Beginner Mistakes to Avoid
                    </div>
                    <div class="common-mistakes-list">
                        ${lesson.commonMistakes.map(m => `
                            <div class="mistake-item">
                                <div class="mistake-title"><i class="fas fa-times-circle" style="color:var(--danger);"></i> ${m.mistake}</div>
                                <div class="mistake-why">${m.why}</div>
                                <div class="mistake-fix"><strong>Fix:</strong> <code>${m.fix}</code></div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            ` : ''}

            <!-- 5. Educational Disclaimer -->
            <div class="educational-disclaimer">
                <i class="fas fa-shield-alt"></i>
                Educational synthetic example for learning Python. Not for actual clinical prescribing decisions.
            </div>

            <!-- Hint Display Card -->
            <div class="hint-tier-container" id="hint-tier-display" style="display:none;"></div>
        `;
    }

    handleHintClick() {
        if (!this.currentLesson) return;
        this.hintTier = Math.min(this.hintTier + 1, 4);
        this.updateHintUI();
    }

    updateHintUI() {
        const container = document.getElementById("hint-tier-display");
        const hintBtn = document.getElementById("btn-tiered-hint");
        if (!container || !hintBtn) return;

        const hints = this.currentLesson.hints || [];

        if (this.hintTier === 0) {
            container.style.display = "none";
            hintBtn.innerHTML = `<i class="fas fa-lightbulb" style="color:var(--warning);"></i> Need a Hint? (1/3)`;
        } else if (this.hintTier === 1) {
            container.style.display = "block";
            container.innerHTML = `
                <div class="hint-tier-card tier-1">
                    <strong><i class="fas fa-lightbulb"></i> Hint 1 (Concept):</strong>
                    <p>${hints[0] || "Review the example code above and identify the required variable names."}</p>
                </div>
            `;
            hintBtn.innerHTML = `<i class="fas fa-lightbulb" style="color:var(--warning);"></i> Next Hint (2/3)`;
        } else if (this.hintTier === 2) {
            container.style.display = "block";
            container.innerHTML += `
                <div class="hint-tier-card tier-2">
                    <strong><i class="fas fa-code-branch"></i> Hint 2 (Code Structure):</strong>
                    <p>${hints[1] || "Write your statement following the pattern shown in the example."}</p>
                </div>
            `;
            hintBtn.innerHTML = `<i class="fas fa-lightbulb" style="color:var(--warning);"></i> Next Hint (3/3)`;
        } else if (this.hintTier === 3) {
            container.style.display = "block";
            container.innerHTML += `
                <div class="hint-tier-card tier-3">
                    <strong><i class="fas fa-key"></i> Hint 3 (Near Solution):</strong>
                    <p>${hints[2] || "Check the model solution if you are completely stuck!"}</p>
                </div>
            `;
            hintBtn.innerHTML = `<i class="fas fa-unlock-alt"></i> View Full Solution`;
        } else if (this.hintTier >= 4) {
            this.showSolutionModal();
            hintBtn.innerHTML = `<i class="fas fa-check"></i> Solution Viewed`;
        }
    }

    async handleRunCode() {
        const code = this.editor ? this.editor.getValue() : "";
        this.switchOutputTab("terminal");
        this.updateStatus("Executing Python...", "running");
        this.setTerminalOutput("Running Python script in WebAssembly environment...", "stdout");

        const res = await window.pythonRunner.executeCode(code);
        this.updateStatus("Python 3.12 Ready", "ready");

        if (res.error) {
            this.setTerminalOutput(res.error, "stderr");
        } else {
            let out = res.stdout || "";
            if (!out.trim()) {
                out = "[Execution completed with no printed output]\nTip: Use print() to display variables or output.";
            }
            out += `\n\n--- Executed in ${res.executionTime} ms ---`;
            this.setTerminalOutput(out, "stdout");
        }
    }

    async handleTestSolution() {
        if (!this.currentLesson) return;
        const code = this.editor ? this.editor.getValue() : "";

        this.switchOutputTab("tests");
        this.updateStatus("Evaluating test suite...", "running");

        const container = document.getElementById("tests-view");
        container.innerHTML = `<div style="color:var(--text-muted);"><i class="fas fa-spinner fa-spin"></i> Checking your solution against automated rubric...</div>`;

        const res = await window.pythonRunner.runTests(code, this.currentLesson.testCases || []);
        this.updateStatus("Python 3.12 Ready", "ready");

        const badge = document.getElementById("test-results-badge");
        if (badge) {
            badge.textContent = `${res.passedCount}/${res.totalCount}`;
            badge.className = `tab-badge ${res.allPassed ? 'pass' : 'fail'}`;
        }

        let html = `
            <div class="test-summary-header ${res.allPassed ? 'passed' : 'failed'}">
                <span>
                    <i class="fas ${res.allPassed ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    ${res.allPassed ? 'Excellent! All test assertions passed!' : `Test Run: ${res.passedCount} of ${res.totalCount} passed`}
                </span>
                <span>${res.executionTime} ms</span>
            </div>
            <div class="test-results-list">
        `;

        res.results.forEach((r, idx) => {
            html += `
                <div class="test-case-item ${r.passed ? 'pass' : 'fail'}">
                    <div class="test-case-title">
                        <span>Check ${idx + 1}: ${r.name}</span>
                        <span class="badge ${r.passed ? 'badge-difficulty-beginner' : 'badge-difficulty-advanced'}">
                            ${r.passed ? 'PASS' : 'FAIL'}
                        </span>
                    </div>
                    <div class="test-case-details">
                        ${r.call ? `<div>Verification: <code>${r.call}</code></div>` : ''}
                        <div>Expected: <code>${JSON.stringify(r.expected)}</code></div>
                        ${r.actual !== null ? `<div>Received: <code>${JSON.stringify(r.actual)}</code></div>` : ''}
                        ${r.error ? `<div style="color:var(--danger); margin-top:0.25rem;"><strong>Error:</strong> <pre style="white-space:pre-wrap; margin-top:2px;">${r.error}</pre></div>` : ''}
                    </div>
                </div>
            `;
        });

        if (res.allPassed) {
            this.solvedLessons.add(this.currentLesson.id);
            localStorage.setItem("pharmpy_solved_lessons", JSON.stringify([...this.solvedLessons]));
            this.renderHeaderProgress();
            this.renderSidebar();

            html += `
                <div style="margin-top:1rem; text-align:right;">
                    <button class="btn btn-success" id="btn-next-lesson">
                        Next Lesson &rarr;
                    </button>
                </div>
            `;
        }

        html += `</div>`;
        container.innerHTML = html;

        document.getElementById("btn-next-lesson")?.addEventListener("click", () => this.advanceToNextLesson());
    }

    advanceToNextLesson() {
        const all = [...BP101T_LESSONS, ...ADVANCED_PHARM_PROBLEMS];
        const idx = all.findIndex(l => l.id === this.currentLesson.id);
        if (idx >= 0 && idx < all.length - 1) {
            this.selectLesson(all[idx + 1].id);
        } else {
            alert("Congratulations! You have completed all lessons in this sequence.");
        }
    }

    async handlePlotCurve() {
        if (!this.currentLesson || !this.currentLesson.hasPlot) return;
        this.switchOutputTab("graph");
        this.updateStatus("Generating pharmaceutical curve...", "running");

        const container = document.getElementById("graph-view");
        container.innerHTML = `<div style="color:var(--text-muted);"><i class="fas fa-spinner fa-spin"></i> Rendering Matplotlib figure...</div>`;

        const plotScript = this.currentLesson.plotCode;
        const res = await window.pythonRunner.renderPlot(plotScript);
        this.updateStatus("Python 3.12 Ready", "ready");

        if (res.success) {
            container.innerHTML = `
                <div class="graph-container" style="flex-direction:column; align-items:center;">
                    <img src="${res.dataUrl}" alt="Pharmaceutical Curve" class="graph-image" />
                    ${this.currentLesson.scientificInterpretation ? `
                        <div class="scientific-interpretation-card">
                            <strong><i class="fas fa-microscope"></i> Scientific & Clinical Interpretation:</strong>
                            <p style="margin-top:0.25rem;">${this.currentLesson.scientificInterpretation}</p>
                        </div>
                    ` : ''}
                </div>
            `;
        } else {
            container.innerHTML = `
                <div style="color:var(--danger); padding:1rem;">
                    <strong>Graph Render Error:</strong>
                    <pre style="white-space:pre-wrap; margin-top:0.5rem;">${res.error}</pre>
                </div>
            `;
        }
    }

    async handleExplainCode() {
        const code = this.editor ? this.editor.getValue() : "";
        if (!code.trim()) {
            alert("Please type or run some Python code first!");
            return;
        }

        const modal = document.getElementById("explain-modal");
        const body = document.getElementById("explain-modal-body");
        if (!modal || !body) return;

        body.innerHTML = `<div style="text-align:center; padding:1.5rem;"><i class="fas fa-spinner fa-spin"></i> Analyzing code syntax and pharmaceutical logic...</div>`;
        modal.classList.add("open");

        const lines = await window.pythonRunner.explainCode(code);

        let html = `
            <div style="background:var(--primary-light); border:1px solid var(--primary); border-radius:6px; padding:0.6rem 0.85rem; font-size:0.82rem; margin-bottom:1rem; color:var(--primary-dark);">
                <i class="fas fa-chalkboard-teacher"></i> <strong>Line-by-Line Pharmacy Explanation:</strong>
                Here is what Python does for each instruction in plain clinical language:
            </div>
            <div class="explain-lines-list">
        `;

        lines.forEach(item => {
            html += `
                <div class="explain-line-row">
                    <div class="line-badge">Line ${item.lineNum}</div>
                    <div class="code-snippet"><code>${item.code}</code></div>
                    <div class="plain-english">&rarr; ${item.explanation}</div>
                </div>
            `;
        });

        html += `</div>`;
        body.innerHTML = html;
    }

    showSolutionModal() {
        if (!this.currentLesson) return;
        const modal = document.getElementById("solution-modal");
        const body = document.getElementById("solution-modal-body");
        if (!modal || !body) return;

        body.innerHTML = `
            <div style="background:var(--warning-light); border:1px solid #fde68a; border-radius:6px; padding:0.6rem 0.85rem; font-size:0.82rem; margin-bottom:1rem; color:#92400e;">
                <i class="fas fa-info-circle"></i> <strong>Model Reference Code:</strong> Use this to verify syntax or understand standard conventions.
            </div>
            <h4 style="margin-bottom:0.4rem; font-size:0.92rem;">Python Implementation:</h4>
            <pre style="background:var(--bg-code); color:var(--text-code); padding:1rem; border-radius:6px; font-family:var(--font-mono); font-size:0.84rem; overflow-x:auto;"><code>${this.currentLesson.modelSolution}</code></pre>
            
            <h4 style="margin-top:1rem; margin-bottom:0.4rem; font-size:0.92rem;">How This Works:</h4>
            <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.6; white-space:pre-wrap;">${this.currentLesson.explanation || "Applies standard pharmaceutical logic."}</p>
        `;

        modal.classList.add("open");
    }

    showQuizModal(unitId) {
        const quiz = BP101T_QUIZZES[unitId];
        const unit = BP101T_UNITS.find(u => u.id === unitId);
        if (!quiz || !unit) return;

        const modal = document.getElementById("quiz-modal");
        const body = document.getElementById("quiz-modal-body");
        const title = document.getElementById("quiz-modal-title");
        if (!modal || !body) return;

        title.textContent = `${unit.number} Checkpoint Quiz (${unit.title})`;

        let html = `<div style="display:flex; flex-direction:column; gap:1.25rem;">`;
        quiz.forEach((q, qIdx) => {
            html += `
                <div class="quiz-question-card" id="quiz-q-${qIdx}">
                    <div style="font-weight:600; font-size:0.9rem; margin-bottom:0.6rem;">
                        ${qIdx + 1}. ${q.question}
                    </div>
                    <div style="display:flex; flex-direction:column; gap:0.4rem;">
                        ${q.options.map((opt, oIdx) => `
                            <label class="quiz-option-label" data-q="${qIdx}" data-opt="${oIdx}">
                                <input type="radio" name="quiz_q_${qIdx}" value="${oIdx}">
                                <span>${opt}</span>
                            </label>
                        `).join("")}
                    </div>
                    <div class="quiz-feedback" id="quiz-feedback-${qIdx}" style="display:none; margin-top:0.5rem; font-size:0.82rem;"></div>
                </div>
            `;
        });
        html += `</div>`;

        body.innerHTML = html;
        modal.classList.add("open");

        // Submit listener
        document.getElementById("btn-submit-quiz").onclick = () => {
            let correct = 0;
            quiz.forEach((q, qIdx) => {
                const selected = document.querySelector(`input[name="quiz_q_${qIdx}"]:checked`);
                const feedback = document.getElementById(`quiz-feedback-${qIdx}`);
                feedback.style.display = "block";

                if (selected && parseInt(selected.value) === q.correctIndex) {
                    correct++;
                    feedback.className = "quiz-feedback correct";
                    feedback.innerHTML = `<i class="fas fa-check"></i> Correct! ${q.explanation}`;
                } else {
                    feedback.className = "quiz-feedback incorrect";
                    feedback.innerHTML = `<i class="fas fa-times"></i> Incorrect. ${q.explanation}`;
                }
            });

            this.quizScores[unitId] = `${correct}/${quiz.length}`;
            localStorage.setItem("pharmpy_quiz_scores", JSON.stringify(this.quizScores));
            alert(`Quiz Completed! You scored ${correct} out of ${quiz.length}.`);
        };
    }

    renderHeaderProgress() {
        const total = BP101T_LESSONS.length;
        const solved = BP101T_LESSONS.filter(l => this.solvedLessons.has(l.id)).length;
        const pct = Math.round((solved / total) * 100);

        const fill = document.getElementById("progress-bar-fill");
        const count = document.getElementById("progress-count-text");

        if (fill) fill.style.width = `${pct}%`;
        if (count) count.textContent = `${solved} / ${total} Lessons (${pct}%)`;
    }

    updateStatus(text, state = "ready") {
        const tag = document.getElementById("runtime-status-label");
        const dot = document.getElementById("runtime-status-dot");
        if (tag) tag.textContent = text;
        if (dot) dot.className = `status-dot ${state}`;
    }

    switchOutputTab(tabName) {
        this.activeTab = tabName;
        document.querySelectorAll(".drawer-tabs .tab-btn").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.tab === tabName);
        });

        document.getElementById("terminal-view").style.display = tabName === "terminal" ? "block" : "none";
        document.getElementById("tests-view").style.display = tabName === "tests" ? "block" : "none";
        document.getElementById("graph-view").style.display = tabName === "graph" ? "flex" : "none";
    }

    setTerminalOutput(text, type = "stdout") {
        const terminal = document.getElementById("terminal-console-output");
        if (!terminal) return;
        terminal.className = `terminal-console terminal-${type}`;
        terminal.textContent = text;
    }

    resetCurrentCode() {
        if (!this.currentLesson) return;
        if (confirm("Reset code back to the guided starter template?")) {
            const template = this.currentLesson.scaffoldCode || this.currentLesson.starterCode;
            if (this.editor) this.editor.setValue(template);
            delete this.codeCache[this.currentLesson.id];
            localStorage.setItem("pharmpy_code_cache", JSON.stringify(this.codeCache));
        }
    }

    copyCurrentCode() {
        const code = this.editor ? this.editor.getValue() : "";
        navigator.clipboard.writeText(code).then(() => {
            alert("Code copied to clipboard!");
        });
    }

    switchViewMode(mode) {
        this.viewMode = mode;
        const workspaceSplit = document.getElementById("workspace-curriculum");
        const sandboxView = document.getElementById("workspace-sandbox");

        if (mode === "sandbox") {
            workspaceSplit.style.display = "none";
            sandboxView.classList.add("active");
            document.getElementById("nav-btn-curriculum").classList.remove("btn-primary");
            document.getElementById("nav-btn-curriculum").classList.add("btn-outline");
            document.getElementById("nav-btn-sandbox").classList.remove("btn-outline");
            document.getElementById("nav-btn-sandbox").classList.add("btn-primary");
            if (this.sandboxEditor) this.sandboxEditor.refresh();
        } else {
            sandboxView.classList.remove("active");
            workspaceSplit.style.display = "flex";
            document.getElementById("nav-btn-sandbox").classList.remove("btn-primary");
            document.getElementById("nav-btn-sandbox").classList.add("btn-outline");
            document.getElementById("nav-btn-curriculum").classList.remove("btn-outline");
            document.getElementById("nav-btn-curriculum").classList.add("btn-primary");
            if (this.editor) this.editor.refresh();
        }
    }

    async handleSandboxRun() {
        const code = this.sandboxEditor ? this.sandboxEditor.getValue() : "";
        const terminal = document.getElementById("sandbox-terminal-output");
        terminal.textContent = "Executing custom Python code...\n";

        const res = await window.pythonRunner.executeCode(code);
        if (res.error) {
            terminal.textContent = res.error;
            terminal.className = "terminal-console terminal-stderr";
        } else {
            terminal.textContent = (res.stdout || "[Executed with no stdout]") + `\n\n--- Done in ${res.executionTime} ms ---`;
            terminal.className = "terminal-console terminal-stdout";
        }
    }

    renderFormulaCheatSheet() {
        const container = document.getElementById("cheat-sheet-list");
        if (!container) return;

        const syntaxItems = [
            { name: "Print Statement", cat: "Unit I", eq: "print('Hello Pharmacy')", code: "print('Hello Pharmacy')" },
            { name: "Variable Assignment", cat: "Unit I", eq: "drug = 'Paracetamol'", code: "drug = 'Paracetamol'\nstrength = 500" },
            { name: "Metric mg to g", cat: "Unit I", eq: "grams = mg / 1000", code: "grams = mg / 1000" },
            { name: "Blister Packs (//, %)", cat: "Unit I", eq: "strips = pills // 10\nloose = pills % 10", code: "strips = total // 10\nloose = total % 10" },
            { name: "if - elif - else", cat: "Unit II", eq: "if score > 100: ...", code: "if stock < 20:\n    print('Reorder')\nelse:\n    print('Sufficient')" },
            { name: "For Loop over Days", cat: "Unit II", eq: "for day in range(1, 8):", code: "for day in range(1, 8):\n    print(f'Day {day}: take tablet')" },
            { name: "Function Definition", cat: "Unit II", eq: "def calc_bmi(w, h):", code: "def calculate_bmi(weight_kg, height_m):\n    return round(weight_kg / (height_m ** 2), 2)" },
            { name: "Pandas CSV Read", cat: "Unit IV", eq: "df = pd.read_csv('file.csv')", code: "import pandas as pd\ndf = pd.read_csv('medicine_inventory.csv')\nprint(df.head())" },
            { name: "Matplotlib Plot", cat: "Unit V", eq: "plt.plot(x, y)", code: "import matplotlib.pyplot as plt\nplt.plot(time, conc)\nplt.xlabel('Time (hr)')\nplt.ylabel('Conc (mg/L)')\nplt.show()" }
        ];

        container.innerHTML = "";
        syntaxItems.forEach(item => {
            const card = document.createElement("div");
            card.className = "cheat-card";
            card.innerHTML = `
                <h4>${item.name}</h4>
                <span class="badge badge-unit" style="font-size:0.65rem; margin-bottom:0.4rem; display:inline-block;">${item.cat}</span>
                <div class="eq-text">${item.eq}</div>
                <div style="display:flex; justify-content:flex-end; gap:0.4rem; margin-top:0.4rem;">
                    <button class="btn btn-outline btn-sm insert-btn" style="font-size:0.72rem;">
                        <i class="fas fa-plus"></i> Insert to Code
                    </button>
                </div>
            `;
            card.querySelector(".insert-btn").onclick = () => {
                if (this.editor) {
                    const doc = this.editor.getDoc();
                    const cursor = doc.getCursor();
                    doc.replaceRange(`\n# --- ${item.name} ---\n${item.code}\n`, cursor);
                }
                document.getElementById("cheat-sheet-modal").classList.remove("open");
            };
            container.appendChild(card);
        });
    }

    setupEventListeners() {
        // Run code & test buttons
        document.getElementById("btn-run-code")?.addEventListener("click", () => this.handleRunCode());
        document.getElementById("btn-test-solution")?.addEventListener("click", () => this.handleTestSolution());
        document.getElementById("btn-plot-curve")?.addEventListener("click", () => this.handlePlotCurve());
        document.getElementById("btn-reset-code")?.addEventListener("click", () => this.resetCurrentCode());
        document.getElementById("btn-copy-code")?.addEventListener("click", () => this.copyCurrentCode());
        document.getElementById("btn-explain-code")?.addEventListener("click", () => this.handleExplainCode());
        document.getElementById("btn-tiered-hint")?.addEventListener("click", () => this.handleHintClick());

        // Faculty Mode
        document.getElementById("faculty-mode-btn")?.addEventListener("click", () => this.toggleFacultyMode());

        // Output tabs
        document.querySelectorAll(".drawer-tabs .tab-btn").forEach(btn => {
            btn.addEventListener("click", () => this.switchOutputTab(btn.dataset.tab));
        });

        // Theme toggle
        document.getElementById("theme-toggle-btn")?.addEventListener("click", () => this.toggleTheme());

        // Search input
        document.getElementById("lesson-search-input")?.addEventListener("input", (e) => this.renderSidebar(e.target.value));

        // Navigation mode
        document.getElementById("nav-btn-curriculum")?.addEventListener("click", () => this.switchViewMode("curriculum"));
        document.getElementById("nav-btn-sandbox")?.addEventListener("click", () => this.switchViewMode("sandbox"));

        // Sandbox Run
        document.getElementById("btn-sandbox-run")?.addEventListener("click", () => this.handleSandboxRun());
        document.getElementById("sandbox-template-select")?.addEventListener("change", (e) => {
            const tmpl = e.target.value;
            if (!this.sandboxEditor) return;
            if (tmpl === "pandas") {
                this.sandboxEditor.setValue(`import pandas as pd\n\n# Load the built-in medicine inventory\ndf = pd.read_csv('medicine_inventory.csv')\nprint("Total drugs in inventory:", len(df))\nprint(df.head(4))\n`);
            } else if (tmpl === "plot") {
                this.sandboxEditor.setValue(`import matplotlib.pyplot as plt\n\ntimes = [0, 1, 2, 4, 8, 12]\nconcentrations = [25.0, 18.2, 13.5, 7.2, 2.1, 0.6]\n\nplt.figure(figsize=(6, 3.5))\nplt.plot(times, concentrations, marker='o', color='#0d9488')\nplt.xlabel('Time (hours)')\nplt.ylabel('Plasma Drug Concentration (mg/L)')\nplt.title('Simulated Drug Elimination Curve')\nplt.grid(True, linestyle=':')\nplt.tight_layout()\nplt.show()\n`);
            } else if (tmpl === "qc") {
                this.sandboxEditor.setValue(`import pandas as pd\n\nqc = pd.read_csv('tablet_batch_qc.csv')\nprint("Batch Summary Statistics:")\nprint(qc.groupby('Batch')['Weight_mg'].mean().round(2))\n`);
            }
        });

        // Modals
        const cheatModal = document.getElementById("cheat-sheet-modal");
        const explainModal = document.getElementById("explain-modal");
        const solutionModal = document.getElementById("solution-modal");
        const quizModal = document.getElementById("quiz-modal");

        document.getElementById("btn-cheat-sheet")?.addEventListener("click", () => cheatModal.classList.add("open"));
        document.getElementById("btn-close-cheat-sheet")?.addEventListener("click", () => cheatModal.classList.remove("open"));
        document.getElementById("btn-close-explain")?.addEventListener("click", () => explainModal.classList.remove("open"));
        document.getElementById("btn-close-solution")?.addEventListener("click", () => solutionModal.classList.remove("open"));
        document.getElementById("btn-close-quiz")?.addEventListener("click", () => quizModal.classList.remove("open"));

        [cheatModal, explainModal, solutionModal, quizModal].forEach(m => {
            m?.addEventListener("click", (e) => {
                if (e.target === m) m.classList.remove("open");
            });
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.pharmPyApp = new PharmPyLabApp();
});
