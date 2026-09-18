/**
 * PHARMPY LAB — B.PHARM SEMESTER I EDITION
 * Curriculum Database for Medicaps University BP101T
 * Course: Basics of Python Programming for Pharmaceutical Sciences (Theory)
 * Total: 30 Hours (Classroom Teaching: 25 hrs, Self Learning: 5 hrs) | Credits: 2
 */

const BP101T_COURSE_META = {
    courseCode: "BP101T",
    courseTitle: "Basics of Python Programming for Pharmaceutical Sciences (Theory)",
    institution: "Medicaps University — Faculty of Pharmacy",
    totalHours: 30,
    classroomHours: 25,
    selfLearningHours: 5,
    credits: 2,
    evaluation: {
        maxMarks: 50,
        sessionalExam: 20,
        endSemExam: 30
    },
    objectives: [
        "Introduce the fundamentals of Python programming for pharmaceutical sciences.",
        "Develop basic programming skills using control structures, functions, and data structures.",
        "Provide knowledge of data handling techniques for structured dataset management.",
        "Familiarize students with data analysis tools such as NumPy and Pandas for healthcare datasets.",
        "Enable students to visualize and interpret pharmaceutical data."
    ],
    outcomes: [
        {
            code: "CO1",
            description: "Explain the fundamentals of Python programming, including variables, data types, operators, and libraries.",
            bloom: "BL2 – Understand",
            unit: "Unit I"
        },
        {
            code: "CO2",
            description: "Analyze program logic using control structures and functions.",
            bloom: "BL4 – Analyze",
            unit: "Unit II"
        },
        {
            code: "CO3",
            description: "Organize, manipulate, and retrieve data using data structures and file handling techniques.",
            bloom: "BL4 – Analyze",
            unit: "Unit III"
        },
        {
            code: "CO4",
            description: "Analyze pharmaceutical datasets using Python libraries.",
            bloom: "BL4 – Analyze",
            unit: "Unit IV"
        },
        {
            code: "CO5",
            description: "Visualize and interpret pharmaceutical data using graphical tools.",
            bloom: "BL4 – Analyze",
            unit: "Unit V"
        }
    ]
};

// Raw synthetic CSV datasets for in-browser virtual filesystem (Pyodide FS)
const EMBEDDED_DATASETS = {
    "medicine_inventory.csv": `Batch_ID,Drug_Name,Dosage_Form,Strength_mg,Stock_Quantity,Unit_Price_INR,Expiry_Date
B101,Paracetamol,Tablet,500,120,2.5,2028-06-30
B102,Amoxicillin,Capsule,250,45,6.0,2027-11-15
B103,Cetirizine,Tablet,10,210,3.0,2028-01-31
B104,Metformin,Tablet,500,85,4.5,2027-09-30
B105,Ibuprofen,Tablet,400,30,5.0,2027-04-30
B106,Azithromycin,Tablet,500,15,18.0,2028-08-31
B107,Omeprazole,Capsule,20,150,7.5,2028-03-31
B108,Atorvastatin,Tablet,10,60,11.0,2027-12-31
B109,Ciprofloxacin,Tablet,500,40,9.0,2027-08-15
B110,Salbutamol,Inhaler,2,25,125.0,2028-10-31`,

    "tablet_batch_qc.csv": `Tablet_ID,Batch,Weight_mg,Hardness_kp,Thickness_mm,Friability_pct
T01,Batch_A,498.2,6.5,4.1,0.22
T02,Batch_A,502.1,6.8,4.2,0.18
T03,Batch_A,495.4,6.2,4.0,0.25
T04,Batch_A,501.0,6.6,4.1,0.20
T05,Batch_A,499.5,6.4,4.1,0.19
T06,Batch_A,503.8,6.9,4.2,0.17
T07,Batch_A,497.6,6.3,4.0,0.24
T08,Batch_A,500.2,6.5,4.1,0.21
T09,Batch_A,496.9,6.1,4.0,0.23
T10,Batch_A,501.7,6.7,4.2,0.18
T11,Batch_B,512.4,7.2,4.3,0.15
T12,Batch_B,508.6,7.0,4.3,0.16
T13,Batch_B,515.1,7.4,4.4,0.14
T14,Batch_B,510.3,7.1,4.3,0.15
T15,Batch_B,509.7,7.0,4.3,0.17
T16,Batch_C,485.2,5.5,3.9,0.38
T17,Batch_C,488.0,5.8,3.9,0.35
T18,Batch_C,482.6,5.3,3.8,0.42
T19,Batch_C,487.4,5.6,3.9,0.36
T20,Batch_C,489.1,5.7,3.9,0.33`,

    "oral_vs_iv_pk_study.csv": `Time_hr,IV_Conc_mgL,Oral_Conc_mgL
0.0,25.0,0.0
0.5,21.8,4.2
1.0,19.0,9.8
1.5,16.5,14.5
2.0,14.4,17.2
3.0,10.9,15.6
4.0,8.3,12.8
6.0,4.8,7.9
8.0,2.8,4.6
12.0,0.9,1.5
24.0,0.1,0.2`,

    "adr_reports.csv": `Report_ID,Drug_Name,Therapeutic_Class,Patient_Age,Gender,Adverse_Reaction,Severity,Outcome
ADR001,Amoxicillin,Antibiotic,28,F,Skin Rash,Mild,Recovered
ADR002,Ibuprofen,NSAID,64,M,Gastric Pain,Moderate,Recovered
ADR003,Atorvastatin,Cardiovascular,58,M,Myalgia,Moderate,Recovered
ADR004,Metformin,Antidiabetic,52,F,Nausea,Mild,Recovered
ADR005,Ciprofloxacin,Antibiotic,71,F,Tendonitis,Severe,Recovering
ADR006,Aspirin,NSAID,67,M,Gastrointestinal Bleed,Severe,Hospitalized
ADR007,Omeprazole,Gastrointestinal,45,M,Headache,Mild,Recovered
ADR008,Amoxicillin,Antibiotic,8,M,Urticaria,Moderate,Recovered
ADR009,Paracetamol,Analgesic,35,F,Nausea,Mild,Recovered
ADR010,Atorvastatin,Cardiovascular,62,F,Elevated Liver Enzymes,Severe,Recovering
ADR011,Ibuprofen,NSAID,49,F,Dizziness,Mild,Recovered
ADR012,Metformin,Antidiabetic,59,M,Diarrhea,Moderate,Recovered`,

    "dissolution_profile.csv": `Time_min,Innovator_Release_Pct,Generic_Test_Pct
5,18.5,16.2
10,36.2,34.0
15,55.0,52.8
20,72.4,69.5
30,88.1,86.0
45,95.6,94.2
60,98.2,97.5`
};

const BP101T_UNITS = [
    {
        id: "unit-1",
        number: "UNIT I",
        title: "Introduction to Python Programming",
        hours: "6 Hours (CT: 5 hrs, SL: 1 hr)",
        co: "CO1",
        bloom: "BL2 – Understand",
        icon: "fa-terminal",
        summary: "Variables, data types (int, float, str, bool), operators, I/O, string methods, and library imports.",
        description: "Learn how computers process pharmaceutical data. Start with printing prescription messages, storing medicine names and doses, and performing metric conversions."
    },
    {
        id: "unit-2",
        number: "UNIT II",
        title: "Control Structures & Functions",
        hours: "6 Hours (CT: 5 hrs, SL: 1 hr)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        icon: "fa-code-branch",
        summary: "Conditional statements (if, elif, else), loops (for, while), break/continue, and modular functions for dosage and BMI.",
        description: "Equip your code to make clinical decisions: check tablet quality limits, triage patient BMI, repeat dose administration over multi-day courses, and write reusable dosage functions."
    },
    {
        id: "unit-3",
        number: "UNIT III",
        title: "Data Structures & File Handling",
        hours: "6 Hours (CT: 5 hrs, SL: 1 hr)",
        co: "CO3",
        bloom: "BL4 – Analyze",
        icon: "fa-database",
        summary: "Lists, tuples, dictionaries, indexing, slicing, NumPy arrays, and reading/writing CSV healthcare files.",
        description: "Organize collections of medicines and patient logs. Learn NumPy array calculations on tablet weights and read/write real CSV files using standard Python tools."
    },
    {
        id: "unit-4",
        number: "UNIT IV",
        title: "Data Handling with Pandas",
        hours: "6 Hours (CT: 5 hrs, SL: 1 hr)",
        co: "CO4",
        bloom: "BL4 – Analyze",
        icon: "fa-table",
        summary: "Pandas Series & DataFrames, head/tail/info/describe, data cleaning, filtering, grouping, and aggregation on PK and ADR records.",
        description: "Master industry-standard clinical data handling. Inspect pharmacy inventory tables, filter severe adverse drug reactions, and summarize clinical trial datasets."
    },
    {
        id: "unit-5",
        number: "UNIT V",
        title: "Data Visualization with Matplotlib",
        hours: "6 Hours (CT: 5 hrs, SL: 1 hr)",
        co: "CO5",
        bloom: "BL4 – Analyze",
        icon: "fa-chart-area",
        summary: "Line plots, histograms, scatter, box plots, titles, labels, legends, Oral vs IV curves, ADR frequencies, and scientific interpretation.",
        description: "Transform tables of numbers into publication-grade pharmaceutical graphs. Learn to visually compare oral vs IV bioavailability and assess batch quality distributions."
    },
    {
        id: "advanced-track",
        number: "ENRICHMENT",
        title: "Advanced Pharmacy Applications",
        hours: "Self-Paced Upper-Semester Track",
        co: "Enrichment",
        bloom: "BL5/BL6 – Synthesize",
        icon: "fa-flask-vial",
        summary: "Pharmacokinetics (ke, t1/2, AUC, Css), Physical Pharmacy (Henderson-Hasselbalch, HLB), and Quality Control (IP Tablet Variation, f2 Factor).",
        description: "Advanced challenges connecting upper-semester Biopharmaceutics and Medicinal Chemistry concepts with Python. Complete Units I–V first!"
    }
];

if (typeof module !== "undefined") {
    module.exports = { BP101T_COURSE_META, BP101T_UNITS, EMBEDDED_DATASETS };
}
