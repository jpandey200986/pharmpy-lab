# 🧪 PharmPy Lab — B.Pharm Semester I Edition
**Course: BP101T — Basics of Python Programming for Pharmaceutical Sciences (Theory)**  
*Medicaps University • Faculty of Pharmacy (w.e.f. July 2026)*  
**Tagline:** *Learn Python Through Pharmaceutical Sciences*

---

## 📚 Official Course Alignment

- **Credits:** 2 (L: 2, T: 0, P: 0)
- **Total Course Hours:** 30 (Classroom Teaching [CT]: 25 hrs, Self Learning [SL]: 5 hrs)
- **Evaluation:** Maximum Marks: 50 (Sessional Exam [SE]: 20, End Sem Exam [ESE]: 30)

### Course Outcomes & Bloom's Taxonomy
- **CO1**: Explain fundamentals of Python programming (variables, data types, operators, libraries) — **BL2 – Understand** (Unit I)
- **CO2**: Analyze program logic using control structures and functions — **BL4 – Analyze** (Unit II)
- **CO3**: Organize, manipulate, and retrieve data using data structures and file handling — **BL4 – Analyze** (Unit III)
- **CO4**: Analyze pharmaceutical datasets using Python libraries (Pandas) — **BL4 – Analyze** (Unit IV)
- **CO5**: Visualize and interpret pharmaceutical data using graphical tools (Matplotlib) — **BL4 – Analyze** (Unit V)

---

## 🏛️ The 5 Core Syllabus Units (52 Scaffolded Lessons)

### 1. Unit I: Introduction to Python Programming (12 Lessons | 6 Hours)
- IDEs (VS Code, PyCharm, Jupyter) and advantages over text editors
- Python variables and data types (`int`, `float`, `str`, `bool`)
- Type casting (`int()`, `float()`)
- Basic arithmetic, comparison, and logical operators
- Metric unit conversions ($mg \to g$, $mL \to L$)
- Packaging calculations: Floor division (`//`) and Modulo (`%`) for blister packs and loose capsules
- Percentage solution formulation (% w/v)
- Standard library imports (`import math` for logarithmic pH)

### 2. Unit II: Control Structures & Functions (12 Exercises | 6 Hours)
- Conditional branching (`if`, `if-else`, `if-elif-else`, nested conditions)
- Tablet assay specification testing (90%–110% IP limits)
- Patient Body Mass Index (BMI) WHO triage
- Latin prescription directions decoding (`"bid"`, `"tid"`, `"qid"`, `"stat"`)
- Loops (`for`, `while`) for 7-day antibiotic compliance and multidose vial liquid depletion
- Loop control statements (`break` on QC defects, `continue` on expired stock)
- Modular functions: Pediatric dosage calculation (Young's Rule) & Patient BMI function

### 3. Unit III: Data Structures & File Handling (10 Guided Activities | 6 Hours)
- Lists, indexing, and slicing for batch QC sampling
- Tuples for immutable Pharmacopoeial reference standards
- Dictionaries for complete drug monographs (`name`, `strength`, `unit`, `stock`)
- String manipulation (`.strip()`, `.upper()`, `.replace()`) on drug labels
- Introduction to NumPy arrays and batch statistics (`np.sum`, `np.mean`)
- Reading and writing CSV files using standard Python `csv` module
- Querying structured patient healthcare records

### 4. Unit IV: Data Handling with Pandas (10 Guided Labs | 6 Hours)
- Pandas Series & DataFrame structures
- Loading CSV files (`pd.read_csv()`)
- Inspecting datasets with `.head()`, `.tail()`, `.info()`, and `.describe()`
- Selecting columns and conditional filtering (finding severe ADR reports)
- Data cleaning & handling missing clinical values (`.isna()`, `.fillna()`)
- Grouping & aggregation (`df.groupby('Drug_Name').size()`) for pharmacovigilance and batch QC

### 5. Unit V: Data Visualization with Matplotlib (8 Guided Visualization Activities | 6 Hours)
- In-vitro tablet dissolution line plots
- Professional axis labels, units ($Time\ (min)$), titles, and grids
- Overlaying **Oral vs. IV plasma concentration-time curves**
- **Scientific Interpretation**: programmatically extracting $C_{max}$ and $T_{max}$
- ADR reporting rates across drug classes (Bar charts)
- Tablet weight uniformity Gaussian distribution (Histograms)
- Dose-response pharmacodynamic correlation (Scatter plots)
- Batch-to-batch weight variation & outliers (Box plots)

---

## 🌟 Beginner Teaching Features

1. **9-Step Instructional Scaffolding**:
   - Learn $\to$ See Example $\to$ Try Yourself (fill-in-the-blanks) $\to$ 3-Tier Hints $\to$ Run Code $\to$ Test Solution $\to$ Line-by-Line Explanation $\to$ Common Mistakes $\to$ Mini Quiz.
2. **"Explain My Code" Feature**:
   - Automatically translates every line of Python code into plain, friendly clinical pharmacy English.
3. **3-Tier Hint System**:
   - Tier 1: Conceptual clue.
   - Tier 2: Code structure template.
   - Tier 3: Near-complete solution.
4. **Faculty Mode**:
   - Toggle in the top header to unlock all units, view syllabus mapping, access teacher lecture guides ("How I can teach this in class"), and inspect answer keys.
5. **Unit Checkpoint Quizzes**:
   - 3 syllabus-aligned MCQs per unit with immediate explanations.
6. **Built-in Synthetic Healthcare Datasets**:
   - Embedded directly in WebAssembly virtual filesystem (`medicine_inventory.csv`, `tablet_batch_qc.csv`, `oral_vs_iv_pk_study.csv`, `adr_reports.csv`, `dissolution_profile.csv`).
7. **Advanced Pharmacy Applications (Preserved)**:
   - All 15 original advanced problems (*Cockcroft-Gault, Alligation, AUC, etc.*) preserved in an upper-semester enrichment section.

---

## 🚀 How to Run

```powershell
cd C:\Users\jyotipandey\.gemini\antigravity\scratch\pharm-python-lab
python run_app.py
```
Opens browser automatically at `http://localhost:8000`.
