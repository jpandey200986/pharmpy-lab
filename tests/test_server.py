"""
End-to-end integration test for run_app.py server and API endpoints
"""
import urllib.request
import json
import time
import subprocess
import sys
import os

PORT = 8008
SERVER_CMD = [sys.executable, "-c", f"""
import sys
sys.path.insert(0, r'{os.path.abspath(".")}')
from run_app import HTTPServer, PharmPyRequestHandler
server = HTTPServer(('127.0.0.1', {PORT}), PharmPyRequestHandler)
server.serve_forever()
"""]

def main():
    print(f"Starting test server on port {PORT}...")
    proc = subprocess.Popen(SERVER_CMD)
    time.sleep(1.5)

    try:
        # Test 1: GET / (index.html)
        print("Test 1: Fetching index.html (GET /)...")
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/index.html", timeout=5) as resp:
            content = resp.read().decode('utf-8')
            assert "<title>PharmPy Lab" in content
            print("  -> Passed: index.html served successfully.")

        # Test 2: GET /js/problems.js & /js/curriculum.js
        print("Test 2: Fetching js/curriculum.js & js/problems.js...")
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/js/curriculum.js", timeout=5) as resp:
            content = resp.read().decode('utf-8')
            assert "BP101T_COURSE_META" in content
            print("  -> Passed: js/curriculum.js served successfully.")

        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/js/problems.js", timeout=5) as resp:
            content = resp.read().decode('utf-8')
            assert "BP101T_LESSONS" in content
            print("  -> Passed: js/problems.js served successfully.")

        # Test 2b: GET /data/medicine_inventory.csv
        with urllib.request.urlopen(f"http://127.0.0.1:{PORT}/data/medicine_inventory.csv", timeout=5) as resp:
            content = resp.read().decode('utf-8')
            assert "Paracetamol" in content
            print("  -> Passed: data/medicine_inventory.csv served successfully.")

        # Test 3: POST /api/run
        print("Test 3: Testing /api/run endpoint...")
        payload = json.dumps({"code": "print('PharmPy Hello'); x = 5 * 10; print(x)"}).encode('utf-8')
        req = urllib.request.Request(f"http://127.0.0.1:{PORT}/api/run", data=payload, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            assert "PharmPy Hello" in data["stdout"]
            assert "50" in data["stdout"]
            assert data["error"] is None
            print("  -> Passed: /api/run successfully executed Python code.")

        # Test 4: POST /api/test
        print("Test 4: Testing /api/test endpoint...")
        student_code = "def add_doses(d1, d2): return d1 + d2"
        test_cases = [
            {"name": "test1", "call": "add_doses(100, 200)", "expected": 300},
            {"name": "test2", "call": "add_doses(50, 25)", "expected": 75}
        ]
        payload = json.dumps({"code": student_code, "testCases": test_cases}).encode('utf-8')
        req = urllib.request.Request(f"http://127.0.0.1:{PORT}/api/test", data=payload, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            assert data["allPassed"] is True
            assert data["passedCount"] == 2
            print("  -> Passed: /api/test automated test runner works correctly.")

        # Test 5: POST /api/plot
        print("Test 5: Testing /api/plot endpoint (Matplotlib curve generation)...")
        plot_code = "plt.plot([0, 1, 2], [10, 5, 2]); plt.title('Test Curve')"
        payload = json.dumps({"code": plot_code}).encode('utf-8')
        req = urllib.request.Request(f"http://127.0.0.1:{PORT}/api/plot", data=payload, headers={'Content-Type': 'application/json'})
        with urllib.request.urlopen(req, timeout=5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            assert data["success"] is True
            assert data["dataUrl"].startswith("data:image/png;base64,")
            print("  -> Passed: /api/plot rendered Matplotlib curve to base64 PNG successfully.")

        print("\nALL SERVER & INTEGRATION TESTS PASSED 100%!")

    finally:
        proc.terminate()
        proc.wait()

if __name__ == "__main__":
    main()
