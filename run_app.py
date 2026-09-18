#!/usr/bin/env python3
"""
PharmPy Lab - Local Server & Launcher
Runs a lightweight, zero-dependency Python server for the B.Pharm Python learning app.
Automatically opens the student's browser and provides optional backend execution APIs.
"""

import sys
import os
import io
import json
import socket
import traceback
import webbrowser
import math
from http.server import HTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse

# Base directory is the folder where run_app.py lives
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def is_port_in_use(port):
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        return s.connect_ex(('127.0.0.1', port)) == 0

def find_available_port(start_port=8000, max_tries=50):
    port = start_port
    while port < start_port + max_tries:
        if not is_port_in_use(port):
            return port
        port += 1
    return start_port

class PharmPyRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def log_message(self, format, *args):
        # Concise logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} {args[1]}\n")

    def end_headers(self):
        # Enable CORS and disable caching for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        parsed = urlparse(self.path)
        content_length = int(self.headers.get('Content-Length', 0))
        post_data = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else '{}'

        try:
            req_json = json.loads(post_data)
        except Exception:
            req_json = {}

        if parsed.path == '/api/run':
            self.handle_run_code(req_json)
        elif parsed.path == '/api/test':
            self.handle_run_tests(req_json)
        elif parsed.path == '/api/plot':
            self.handle_render_plot(req_json)
        else:
            self.send_error(404, "API endpoint not found")

    def handle_run_code(self, data):
        code = data.get('code', '')
        old_stdout, old_stderr = sys.stdout, sys.stderr
        captured_stdout = io.StringIO()
        captured_stderr = io.StringIO()
        sys.stdout, sys.stderr = captured_stdout, captured_stderr
        
        exec_error = None
        try:
            ns = {"math": math}
            exec(code, ns)
        except Exception:
            exec_error = traceback.format_exc()
        finally:
            sys.stdout, sys.stderr = old_stdout, old_stderr

        response = {
            "stdout": captured_stdout.getvalue(),
            "stderr": captured_stderr.getvalue(),
            "error": exec_error
        }
        self.send_json_response(response)

    def handle_run_tests(self, data):
        code = data.get('code', '')
        test_cases = data.get('testCases', [])
        
        ns = {"math": math}
        compile_error = None
        try:
            exec(code, ns)
        except Exception:
            compile_error = traceback.format_exc()

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
            return val1 == val2

        results = []
        if compile_error:
            for tc in test_cases:
                results.append({
                    "name": tc.get("name", ""),
                    "call": tc.get("call", ""),
                    "expected": tc.get("expected"),
                    "actual": None,
                    "passed": False,
                    "error": "Error defining student code:\n" + compile_error,
                    "description": tc.get("description", "")
                })
        else:
            for tc in test_cases:
                call_code = tc.get("call", "")
                expected = tc.get("expected")
                try:
                    actual = eval(call_code, ns)
                    passed = is_close(actual, expected)
                    results.append({
                        "name": tc.get("name", ""),
                        "call": call_code,
                        "expected": expected,
                        "actual": actual,
                        "passed": bool(passed),
                        "error": None if passed else f"Expected: {expected}, but received: {actual}",
                        "description": tc.get("description", "")
                    })
                except Exception:
                    results.append({
                        "name": tc.get("name", ""),
                        "call": call_code,
                        "expected": expected,
                        "actual": None,
                        "passed": False,
                        "error": traceback.format_exc(),
                        "description": tc.get("description", "")
                    })

        passed_count = sum(1 for r in results if r["passed"])
        response = {
            "passedCount": passed_count,
            "totalCount": len(results),
            "allPassed": passed_count == len(results),
            "results": results
        }
        self.send_json_response(response)

    def handle_render_plot(self, data):
        code = data.get('code', '')
        try:
            import matplotlib
            matplotlib.use('Agg')
            import matplotlib.pyplot as plt
            import base64

            plt.clf()
            plt.close('all')

            ns = {"plt": plt, "math": math}
            try:
                import numpy as np
                ns["np"] = np
            except ImportError:
                pass

            exec(code, ns)

            buf = io.BytesIO()
            plt.savefig(buf, format='png', dpi=120, bbox_inches='tight')
            buf.seek(0)
            img_b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
            plt.close('all')

            self.send_json_response({
                "success": True,
                "dataUrl": f"data:image/png;base64,{img_b64}"
            })
        except Exception as e:
            self.send_json_response({
                "success": False,
                "error": traceback.format_exc()
            })

    def send_json_response(self, data, status_code=200):
        body = json.dumps(data).encode('utf-8')
        self.send_response(status_code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

def main():
    port = find_available_port(8000)
    server_address = ('', port)
    httpd = HTTPServer(server_address, PharmPyRequestHandler)
    url = f"http://localhost:{port}"

    print("=" * 65)
    print("   PharmPy Lab: Python for Pharmacy & Pharmaceutical Sciences")
    print("   Interactive Learning Environment for B.Pharm Students")
    print("=" * 65)
    print(f"[*] Serving locally from: {BASE_DIR}")
    print(f"[*] Server active at:     {url}")
    print(f"[*] Press Ctrl+C to stop the server")
    print("=" * 65)

    # Launch browser automatically
    try:
        webbrowser.open(url)
        print("[*] Launched browser window successfully.")
    except Exception as e:
        print(f"[!] Could not open browser automatically: {e}")
        print(f"[!] Please navigate manually to: {url}")

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[*] Shutting down PharmPy Lab server. Goodbye!")
        httpd.server_close()

if __name__ == '__main__':
    main()
