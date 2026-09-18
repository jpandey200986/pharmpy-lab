/**
 * PHARMPY LAB — B.PHARM SEMESTER I EDITION
 * Comprehensive Lesson Bank for Medicaps University BP101T
 * Contains 52 scaffolded beginner lessons across Units I–V + 15 Advanced Enrichment Problems
 */

const BP101T_LESSONS = [
    // ========================================================================
    // UNIT I: INTRODUCTION TO PYTHON PROGRAMMING (12 Lessons)
    // 6 Hours (CT: 5 hrs, SL: 1 hr) | CO1 | Bloom: BL2 – Understand
    // ========================================================================
    {
        id: "u1_l01_welcome",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Input and output operations",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Very Easy",
        title: "1. Print Your First Prescription",
        summary: "Learn the print() function to display clinical pharmacy alerts.",
        learn: `In computer programming, the <code>print()</code> function is used to display messages on the screen. In pharmacy informatics, hospital dispensing systems and automated pill counters use text output to display patient instructions, drug alerts, and prescription labels. Any text inside quotation marks (<code>"..."</code> or <code>'...'</code>) is called a <strong>string</strong>.`,
        exampleCode: `print("Hospital Pharmacy System Active")\nprint("Dispensing Paracetamol 500 mg")`,
        scaffoldCode: `# Step 1: Use print() to output: Welcome to PharmPy Lab
# Fill in the text inside the quotation marks:
print("____________________")
`,
        modelSolution: `print("Welcome to PharmPy Lab")`,
        hints: [
            "Use Python's built-in print() function.",
            "Pass the exact phrase enclosed in double quotes: print(\"...\")",
            "Exact code: print(\"Welcome to PharmPy Lab\")"
        ],
        explanation: `• print() is a built-in Python function that tells the computer to show text on screen.
• "Welcome to PharmPy Lab" is a string literal enclosed in quotation marks.
• The computer prints everything between the quotes and starts a new line.`,
        commonMistakes: [
            {
                mistake: "Missing quotation marks: print(Welcome)",
                why: "Python thinks Welcome is a variable name, not words to print.",
                fix: "Always wrap text in quotes: print(\"Welcome\")"
            },
            {
                mistake: "Capitalizing Print(): Print(\"Hello\")",
                why: "Python is case-sensitive. The function is lowercase print.",
                fix: "Use lowercase: print(\"Hello\")"
            }
        ],
        teachingTip: "Explain to students that print() is like a digital label printer at the dispensing counter. Have them change the text to their own college or hospital name.",
        testCases: [
            {
                name: "Displays exact welcome message",
                type: "stdout",
                expectedOutput: "Welcome to PharmPy Lab",
                description: "Output must contain 'Welcome to PharmPy Lab'"
            }
        ]
    },

    {
        id: "u1_l02_drug_name",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Python variables and data types (strings)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Very Easy",
        title: "2. Storing Drug Names in Variables",
        summary: "Create string variables to represent pharmaceutical drug names.",
        learn: `A <strong>variable</strong> is like a labeled medicine container in a pharmacy dispensary. You stick a label on the container (the variable name) and store a medicine inside it (the value). When storing text such as a medicine's generic name, we use the <strong>string</strong> data type by wrapping the text in quotes.`,
        exampleCode: `drug_name = "Amoxicillin"\nprint(drug_name)`,
        scaffoldCode: `# Create a variable named medicine and store "Paracetamol"
# Then print the variable
medicine = "__________"
print(medicine)
`,
        modelSolution: `medicine = "Paracetamol"\nprint(medicine)`,
        hints: [
            "Create a variable called medicine using the assignment operator =.",
            "Assign the string \"Paracetamol\" to it.",
            "Then call print(medicine) without quotes around the variable name."
        ],
        explanation: `• medicine = "Paracetamol" creates a memory container labeled medicine and stores the string "Paracetamol".
• Notice that when printing a variable, print(medicine) does NOT have quotes around medicine. Quotes would print the word 'medicine' instead of its contents!`,
        commonMistakes: [
            {
                mistake: "Putting quotes around variable: print(\"medicine\")",
                why: "This prints the literal word 'medicine' instead of 'Paracetamol'.",
                fix: "Write print(medicine) without quotes."
            }
        ],
        teachingTip: "Use the analogy of a pharmacy amber bottle. The bottle's label is the variable name (medicine); the tablet inside is the value ('Paracetamol').",
        testCases: [
            {
                name: "Variable medicine holds 'Paracetamol'",
                type: "variable",
                varName: "medicine",
                expectedValue: "Paracetamol",
                description: "medicine should be 'Paracetamol'"
            },
            {
                name: "Prints 'Paracetamol'",
                type: "stdout",
                expectedOutput: "Paracetamol",
                description: "Terminal output should display Paracetamol"
            }
        ]
    },

    {
        id: "u1_l03_strength_quantity",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Python variables and data types (integers, floats)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Very Easy",
        title: "3. Dosage Numbers: Integers vs Floats",
        summary: "Store whole tablet counts (integers) and fractional volumes (floats).",
        learn: `In pharmacy, we encounter two kinds of numbers:
1. <strong>Integers (int)</strong>: Whole numbers without decimals. E.g., 10 tablets, 3 injections.
2. <strong>Floating-point numbers (float)</strong>: Numbers with decimals. E.g., 12.5 mL syrup, 0.25 mg Digoxin tablet.
Notice that numbers in Python are written <em>without</em> quotation marks.`,
        exampleCode: `tablet_count = 10       # int (whole number)\nsyrup_volume_ml = 12.5  # float (decimal number)`,
        scaffoldCode: `# Store the integer 500 in a variable named strength_mg
# Store the float 7.5 in a variable named dose_ml
strength_mg = ___
dose_ml = ___

print(strength_mg)
print(dose_ml)
`,
        modelSolution: `strength_mg = 500\ndose_ml = 7.5\nprint(strength_mg)\nprint(dose_ml)`,
        hints: [
            "Do not put quotes around numbers. 500 is an int, \"500\" would be a string.",
            "Assign 500 to strength_mg and 7.5 to dose_ml."
        ],
        explanation: `• strength_mg = 500 creates an integer variable.
• dose_ml = 7.5 creates a float variable.
• Python automatically detects the data type based on the presence of a decimal point.`,
        commonMistakes: [
            {
                mistake: "strength_mg = \"500\"",
                why: "Putting quotes around a number makes it a string, preventing arithmetic calculations.",
                fix: "Remove quotes for numbers: strength_mg = 500"
            }
        ],
        teachingTip: "Ask students: 'Can you dispense half a tablet? Yes (float). Can you count 12 blister strips? Yes (int).'",
        testCases: [
            {
                name: "strength_mg is 500 (int)",
                type: "variable",
                varName: "strength_mg",
                expectedValue: 500
            },
            {
                name: "dose_ml is 7.5 (float)",
                type: "variable",
                varName: "dose_ml",
                expectedValue: 7.5
            }
        ]
    },

    {
        id: "u1_l04_bool_prescription",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Python variables and data types (booleans)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Very Easy",
        title: "4. Prescription Flags (Boolean Values)",
        summary: "Use True and False to record prescription and schedule status.",
        learn: `A <strong>boolean</strong> data type has only two possible values: <code>True</code> or <code>False</code>. In hospital pharmacy management, booleans act as binary flags: Is this a Schedule H drug? (True). Has the patient paid? (False). Is the prescription valid? (True). Note that Python booleans must begin with a capital letter (<code>True</code>, not <code>true</code>).`,
        exampleCode: `is_antibiotic = True\nis_expired = False`,
        scaffoldCode: `# Create a variable named is_prescription_required and set it to True
# Create a variable named is_narcotic and set it to False
is_prescription_required = _____
is_narcotic = _____

print(is_prescription_required)
print(is_narcotic)
`,
        modelSolution: `is_prescription_required = True\nis_narcotic = False\nprint(is_prescription_required)\nprint(is_narcotic)`,
        hints: [
            "Use True and False with a capital T and F.",
            "Do not put quotes around True or False."
        ],
        explanation: `• Booleans represent binary truth values.
• True and False are reserved keywords in Python.`,
        commonMistakes: [
            {
                mistake: "is_rx = true (lowercase t)",
                why: "Python does not recognize lowercase true.",
                fix: "Capitalize the first letter: True or False."
            }
        ],
        teachingTip: "Relate this to Schedule H/X regulatory requirements under the Drugs and Cosmetics Act. Either a drug needs an Rx (True) or it is OTC (False).",
        testCases: [
            {
                name: "is_prescription_required is True",
                type: "variable",
                varName: "is_prescription_required",
                expectedValue: true
            },
            {
                name: "is_narcotic is False",
                type: "variable",
                varName: "is_narcotic",
                expectedValue: false
            }
        ]
    },

    {
        id: "u1_l05_type_casting",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Type casting",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Easy",
        title: "5. Type Casting in Dispensing Inputs",
        summary: "Convert text numbers into real integers and floats using int() and float().",
        learn: `When a pharmacist receives data from a barcode scanner or digital form, it often enters the computer as text (<code>"10"</code> instead of <code>10</code>). To perform dosage math, we must convert it into a numeric type. This process is called <strong>type casting</strong>:
• <code>int("10")</code> converts the string <code>"10"</code> into the integer <code>10</code>.
• <code>float("500.5")</code> converts into the decimal <code>500.5</code>.`,
        exampleCode: `scanned_qty = "12"\nactual_qty = int(scanned_qty)  # Now it's the number 12!`,
        scaffoldCode: `raw_strength = "250"\n# Convert raw_strength to an integer using int()
strength_number = int(__________)

raw_volume = "15.5"\n# Convert raw_volume to a float using float()
volume_number = float(__________)

print(strength_number)
print(volume_number)
`,
        modelSolution: `raw_strength = "250"\nstrength_number = int(raw_strength)\nraw_volume = "15.5"\nvolume_number = float(raw_volume)\nprint(strength_number)\nprint(volume_number)`,
        hints: [
            "Pass raw_strength into int(): int(raw_strength).",
            "Pass raw_volume into float(): float(raw_volume)."
        ],
        explanation: `• int() converts valid numerical text into a whole number.
• float() converts decimal strings into floating-point numbers.
• Now mathematical operations (+, *, /) can be performed safely.`,
        commonMistakes: [
            {
                mistake: "int(\"15.5\")",
                why: "int() cannot directly convert a string with a decimal point. It will cause a ValueError.",
                fix: "Use float(\"15.5\") for decimals."
            }
        ],
        teachingTip: "Demonstrate what happens if you add two strings: '10' + '10' becomes '1010' (concatenation). But 10 + 10 becomes 20. Type casting is essential!",
        testCases: [
            {
                name: "strength_number is 250 (int)",
                type: "variable",
                varName: "strength_number",
                expectedValue: 250
            },
            {
                name: "volume_number is 15.5 (float)",
                type: "variable",
                varName: "volume_number",
                expectedValue: 15.5
            }
        ]
    },

    {
        id: "u1_l06_arithmetic_dispense",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Basic operators (arithmetic)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Easy",
        title: "6. Total Medication Calculation",
        summary: "Use arithmetic multiplication (*) to calculate total tablets for a prescription.",
        learn: `A pharmacist frequently calculates the total medication quantity required for a patient's treatment regimen:
<code>Total Tablets = Daily Tablets &times; Days of Treatment</code>
In Python:
• Addition is <code>+</code>
• Subtraction is <code>-</code>
• Multiplication is <code>*</code> (asterisk)
• Division is <code>/</code> (forward slash)`,
        exampleCode: `pills_per_day = 3\ndays = 7\ntotal_pills = pills_per_day * days  # 21 pills`,
        scaffoldCode: `tablets_per_day = 2
treatment_days = 14

# Calculate total_tablets by multiplying tablets_per_day by treatment_days
total_tablets = tablets_per_day * ______________

print("Total tablets to dispense:")
print(total_tablets)
`,
        modelSolution: `tablets_per_day = 2\ntreatment_days = 14\ntotal_tablets = tablets_per_day * treatment_days\nprint("Total tablets to dispense:")\nprint(total_tablets)`,
        hints: [
            "Multiply tablets_per_day by treatment_days using the * symbol.",
            "Write: total_tablets = tablets_per_day * treatment_days"
        ],
        explanation: `• The * operator calculates 2 * 14 = 28.
• The result is stored in total_tablets and printed.`,
        commonMistakes: [
            {
                mistake: "Using 'x' for multiplication: 2 x 14",
                why: "Python uses asterisk (*) for multiplication.",
                fix: "Always use * for multiplication."
            }
        ],
        teachingTip: "Have students compute quantities for antibiotics taken 'TID for 5 days' (3 * 5 = 15 capsules).",
        testCases: [
            {
                name: "total_tablets equals 28",
                type: "variable",
                varName: "total_tablets",
                expectedValue: 28
            }
        ]
    },

    {
        id: "u1_l07_unit_conv_mg",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Basic operators (arithmetic)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Easy",
        title: "7. Metric Conversion: Milligrams to Grams",
        summary: "Convert pharmaceutical weights from milligrams (mg) to grams (g).",
        learn: `The metric system is standard in pharmacy (Pharmacopoeia). In pharmaceutical manufacturing, API weights are weighed in grams or kilograms, while individual tablet strengths are stated in milligrams.
<code>1 gram = 1000 milligrams</code>
Therefore:
<code>weight_in_grams = weight_in_mg / 1000</code>`,
        exampleCode: `amoxicillin_mg = 500\namoxicillin_g = amoxicillin_mg / 1000  # 0.5 g`,
        scaffoldCode: `paracetamol_mg = 1500

# Convert paracetamol_mg to grams by dividing by 1000
paracetamol_g = paracetamol_mg / ____

print(paracetamol_g)
`,
        modelSolution: `paracetamol_mg = 1500\nparacetamol_g = paracetamol_mg / 1000\nprint(paracetamol_g)`,
        hints: [
            "Divide by 1000 to convert mg to grams.",
            "Code: paracetamol_g = paracetamol_mg / 1000"
        ],
        explanation: `• The / division operator performs floating-point division.
• 1500 / 1000 evaluates to 1.5 grams.`,
        commonMistakes: [
            {
                mistake: "Multiplying instead of dividing: mg * 1000",
                why: "Multiplying converts grams to mg, not mg to grams.",
                fix: "Divide by 1000."
            }
        ],
        teachingTip: "Reinforce dimensional analysis: (1500 mg) * (1 g / 1000 mg) = 1.5 g.",
        testCases: [
            {
                name: "paracetamol_g equals 1.5",
                type: "variable",
                varName: "paracetamol_g",
                expectedValue: 1.5
            }
        ]
    },

    {
        id: "u1_l08_unit_conv_ml",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Basic operators (arithmetic)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Easy",
        title: "8. Metric Conversion: Milliliters to Liters",
        summary: "Convert liquid compounding volumes from milliliters (mL) to liters (L).",
        learn: `In hospital IV fluid compounding and syrup preparation, large batches are prepared in Liters (L), while dispensing cups and syringes measure in milliliters (mL).
<code>1 Liter = 1000 milliliters</code>
<code>volume_in_liters = volume_in_ml / 1000</code>`,
        exampleCode: `dextrose_ml = 2500\ndextrose_liters = dextrose_ml / 1000  # 2.5 L`,
        scaffoldCode: `saline_ml = 500

# Convert saline_ml to liters
saline_liters = saline_ml / ____

print(saline_liters)
`,
        modelSolution: `saline_ml = 500\nsaline_liters = saline_ml / 1000\nprint(saline_liters)`,
        hints: [
            "Divide by 1000 using the / operator.",
            "Code: saline_liters = saline_ml / 1000"
        ],
        explanation: `• 500 / 1000 evaluates to 0.5 Liters.`,
        commonMistakes: [
            {
                mistake: "Using backslash: saline_ml \\ 1000",
                why: "Backslash is an escape character, not division.",
                fix: "Use forward slash (/)."
            }
        ],
        teachingTip: "Point out standard hospital IV bottles: 500 mL normal saline = 0.5 L bottle.",
        testCases: [
            {
                name: "saline_liters equals 0.5",
                type: "variable",
                varName: "saline_liters",
                expectedValue: 0.5
            }
        ]
    },

    {
        id: "u1_l09_blister_modulo",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Basic operators (arithmetic - floor division and modulo)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Beginner",
        title: "9. Packaging: Blister Strips & Loose Capsules",
        summary: "Use floor division (//) and modulo (%) to package capsules into strips.",
        learn: `Tablets and capsules are packaged in blister strips of 10. If a patient needs 38 capsules, the pharmacist dispenses:
• <strong>3 full blister strips</strong> of 10 capsules
• <strong>8 loose capsules</strong>
In Python:
• <code>//</code> (Floor division) calculates the whole number quotient: <code>38 // 10 = 3</code>
• <code>%</code> (Modulo operator) calculates the remainder: <code>38 % 10 = 8</code>`,
        exampleCode: `total = 45\nstrips = total // 10  # 4 full strips\nloose = total % 10    # 5 loose capsules`,
        scaffoldCode: `prescribed_capsules = 38

# Use // to calculate full blister strips of 10 capsules each
full_strips = prescribed_capsules // 10

# Use % to calculate remaining loose capsules
loose_capsules = prescribed_capsules % __

print("Full strips:", full_strips)
print("Loose capsules:", loose_capsules)
`,
        modelSolution: `prescribed_capsules = 38\nfull_strips = prescribed_capsules // 10\nloose_capsules = prescribed_capsules % 10\nprint("Full strips:", full_strips)\nprint("Loose capsules:", loose_capsules)`,
        hints: [
            "Use // 10 for full strips.",
            "Use % 10 for the leftover capsules."
        ],
        explanation: `• 38 // 10 = 3 (discards the fractional part).
• 38 % 10 = 8 (the remainder of 38 divided by 10).
• Modulo is one of the most useful operators in dispensing algorithms!`,
        commonMistakes: [
            {
                mistake: "Using regular division: 38 / 10",
                why: "Regular division gives 3.8 (a float), not the whole number of physical strips.",
                fix: "Use // for whole integer count."
            }
        ],
        teachingTip: "Have students think of pharmacy dispensing: you can't cut a blister pack into 0.8 strips. You hand over 3 whole strips and 8 loose pills.",
        testCases: [
            {
                name: "full_strips is 3",
                type: "variable",
                varName: "full_strips",
                expectedValue: 3
            },
            {
                name: "loose_capsules is 8",
                type: "variable",
                varName: "loose_capsules",
                expectedValue: 8
            }
        ]
    },

    {
        id: "u1_l10_pct_solution",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Basic operators (arithmetic)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Beginner",
        title: "10. Percentage Solution Formulation (% w/v)",
        summary: "Calculate the percentage weight-in-volume of a pharmaceutical preparation.",
        learn: `In Pharmaceutics, the strength of a solution is often expressed as percentage weight-in-volume (<strong>% w/v</strong>), which represents the grams of solute dissolved in 100 mL of solution:
<code>Percentage (% w/v) = (Solute in grams / Total Volume in mL) &times; 100</code>
For example, Normal Saline has 4.5 g NaCl in 500 mL water: (4.5 / 500) * 100 = 0.9% w/v.`,
        exampleCode: `solute_g = 5.0\nvolume_ml = 100.0\npct_w_v = (solute_g / volume_ml) * 100  # 5.0%`,
        scaffoldCode: `nacl_grams = 4.5
solution_volume_ml = 500.0

# Calculate percentage_w_v
percentage_w_v = (nacl_grams / solution_volume_ml) * ___

print("Concentration (% w/v):", percentage_w_v)
`,
        modelSolution: `nacl_grams = 4.5\nsolution_volume_ml = 500.0\npercentage_w_v = (nacl_grams / solution_volume_ml) * 100\nprint("Concentration (% w/v):", percentage_w_v)`,
        hints: [
            "Multiply by 100 to convert the decimal fraction to a percentage.",
            "Formula: (nacl_grams / solution_volume_ml) * 100"
        ],
        explanation: `• 4.5 / 500 = 0.009.
• Multiplying by 100 gives 0.9% w/v (the standard concentration for isotonic Normal Saline IV infusion).`,
        commonMistakes: [
            {
                mistake: "Forgetting parentheses or multiplying volume first",
                why: "Operator precedence: (solute / volume) * 100 is clear and unambiguous.",
                fix: "Wrap division in parentheses."
            }
        ],
        teachingTip: "Connect to their Pharmaceutics I lab: explain % w/v, % v/v, and % w/w.",
        testCases: [
            {
                name: "percentage_w_v is 0.9",
                type: "variable",
                varName: "percentage_w_v",
                expectedValue: 0.9
            }
        ]
    },

    {
        id: "u1_l11_comparison_operators",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Basic operators (comparison, logical)",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Beginner",
        title: "11. Dose Safety Checking with Comparison Operators",
        summary: "Compare prescribed doses against maximum safety limits using <, <=, and ==.",
        learn: `Before dispensing any drug, a pharmacist checks whether the prescribed dose exceeds the Maximum Recommended Daily Dose (MRDD). Python provides <strong>comparison operators</strong> that return <code>True</code> or <code>False</code>:
• <code><</code> (Less than)
• <code><=</code> (Less than or equal to)
• <code>></code> (Greater than)
• <code>>=</code> (Greater than or equal to)
• <code>==</code> (Equal to — notice two equal signs!)
• <code>!=</code> (Not equal to)`,
        exampleCode: `dose = 650\nmax_dose = 1000\nis_safe = dose <= max_dose  # True`,
        scaffoldCode: `prescribed_dose_mg = 4000
max_daily_dose_mg = 4000

# Check if prescribed_dose_mg is less than or equal to max_daily_dose_mg
is_dose_safe = prescribed_dose_mg <= _________________

# Check if prescribed_dose_mg is strictly greater than 3000 mg
is_high_dose = prescribed_dose_mg > ____

print("Dose is safe:", is_dose_safe)
print("Is high dose:", is_high_dose)
`,
        modelSolution: `prescribed_dose_mg = 4000\nmax_daily_dose_mg = 4000\nis_dose_safe = prescribed_dose_mg <= max_daily_dose_mg\nis_high_dose = prescribed_dose_mg > 3000\nprint("Dose is safe:", is_dose_safe)\nprint("Is high dose:", is_high_dose)`,
        hints: [
            "Use <= to compare prescribed_dose_mg against max_daily_dose_mg.",
            "Use > to compare prescribed_dose_mg against 3000."
        ],
        explanation: `• 4000 <= 4000 is True (since 4000 equals 4000).
• 4000 > 3000 is True.
• Both boolean flags are stored and printed.`,
        commonMistakes: [
            {
                mistake: "Using single = for comparison: dose = max_dose",
                why: "Single = assigns a value. Double == compares two values.",
                fix: "Use == for equality comparison, or <= for upper boundary."
            }
        ],
        teachingTip: "Highlight paracetamol hepatotoxicity: maximum adult dose is 4000 mg (4 grams) in 24 hours.",
        testCases: [
            {
                name: "is_dose_safe is True",
                type: "variable",
                varName: "is_dose_safe",
                expectedValue: true
            },
            {
                name: "is_high_dose is True",
                type: "variable",
                varName: "is_high_dose",
                expectedValue: true
            }
        ]
    },

    {
        id: "u1_l12_library_import",
        unitId: "unit-1",
        unitNumber: "UNIT I",
        syllabusTopic: "Introduction to standard libraries",
        co: "CO1",
        bloom: "BL2 – Understand",
        difficulty: "Beginner",
        title: "12. Standard Libraries: Importing Math for pH",
        summary: "Import Python's standard math library to calculate logarithmic pH.",
        learn: `Python comes with built-in modules called <strong>standard libraries</strong>. One essential library is <code>math</code>, which provides advanced scientific mathematical tools like logarithms, square roots, and exponential powers.
In Pharmaceutical Chemistry, pH is defined as the negative base-10 logarithm of hydrogen ion concentration:
<code>pH = -log10([H+])</code>
We can import Python's <code>math</code> module using: <code>import math</code> and call <code>math.log10()</code>.`,
        exampleCode: `import math\nh_conc = 0.0001\nph = -math.log10(h_conc)  # pH = 4.0`,
        scaffoldCode: `# Import the standard math library
import ____

h_ion_conc = 0.001

# Calculate pH using -math.log10(h_ion_conc)
calculated_ph = -math.log10(__________)

print("Calculated pH:", calculated_ph)
`,
        modelSolution: `import math\nh_ion_conc = 0.001\ncalculated_ph = -math.log10(h_ion_conc)\nprint("Calculated pH:", calculated_ph)`,
        hints: [
            "Write: import math",
            "Pass h_ion_conc into math.log10()."
        ],
        explanation: `• import math loads Python's built-in math toolbox.
• math.log10(0.001) calculates log10(10^-3) = -3.0.
• Multiplying by -1 gives pH = 3.0 (an acidic solution).`,
        commonMistakes: [
            {
                mistake: "Using math.log() instead of math.log10()",
                why: "math.log() calculates the natural log (ln, base e). pH requires base 10.",
                fix: "Use math.log10() for pH calculations."
            }
        ],
        teachingTip: "Remind students of their Inorganic & Analytical Chemistry class: Sørensen's pH scale is based on log10.",
        testCases: [
            {
                name: "calculated_ph is 3.0",
                type: "variable",
                varName: "calculated_ph",
                expectedValue: 3.0
            }
        ]
    },

    // ========================================================================
    // UNIT II: CONTROL STRUCTURES & FUNCTIONS (12 Exercises)
    // 6 Hours (CT: 5 hrs, SL: 1 hr) | CO2 | Bloom: BL4 – Analyze
    // ========================================================================
    {
        id: "u2_e01_if_stock",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Conditional statements (if)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Very Easy",
        title: "1. Inventory Reorder Alert (if Statement)",
        summary: "Trigger an inventory warning when medicine stock drops below threshold.",
        learn: `An <code>if</code> statement allows a computer program to make decisions. It executes a block of code <em>only if</em> a condition is True.
In pharmacy inventory management, we check:
<code>if stock < minimum_threshold: print("Reorder Required")</code>
<strong>Indentation is critical in Python</strong>: the indented lines (usually 4 spaces) belong inside the <code>if</code> block.`,
        exampleCode: `stock = 15\nif stock < 20:\n    print("Stock is low!")`,
        scaffoldCode: `current_stock = 12
minimum_stock = 25

# If current_stock is less than minimum_stock, print "Reorder Required"
if current_stock < _____________:
    print("Reorder Required")
`,
        modelSolution: `current_stock = 12\nminimum_stock = 25\nif current_stock < minimum_stock:\n    print("Reorder Required")`,
        hints: [
            "Complete the if condition with minimum_stock.",
            "Remember the colon (:) at the end of the if line."
        ],
        explanation: `• The condition 12 < 25 evaluates to True.
• Therefore, Python enters the indented block and prints "Reorder Required".`,
        commonMistakes: [
            {
                mistake: "Forgetting indentation",
                why: "Python uses indentation to know which lines belong inside the if statement.",
                fix: "Indent the print line by 4 spaces."
            }
        ],
        teachingTip: "Show students how inventory systems at Apollo or MedPlus automatically highlight items in red when stock dips below safety thresholds.",
        testCases: [
            {
                name: "Prints 'Reorder Required'",
                type: "stdout",
                expectedOutput: "Reorder Required"
            }
        ]
    },

    {
        id: "u2_e02_if_else_assay",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Conditional statements (if-else)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "2. Tablet Assay QC Check (if-else)",
        summary: "Check if an active pharmaceutical ingredient assay meets pharmacopoeial limits.",
        learn: `An <code>if-else</code> statement provides two paths: execute Path A if the condition is True, or execute Path B if the condition is False.
According to the Indian Pharmacopoeia (IP), a tablet batch must contain between <strong>90.0% and 110.0%</strong> of the stated active drug content. If it falls within this range, it passes; otherwise, it fails quality control.`,
        exampleCode: `assay_pct = 98.5\nif 90.0 <= assay_pct <= 110.0:\n    result = "Pass"\nelse:\n    result = "Fail"`,
        scaffoldCode: `measured_assay_pct = 98.4

# Check if measured_assay_pct is between 90.0 and 110.0 (inclusive)
if 90.0 <= measured_assay_pct <= 110.0:
    qc_status = "Pass"
else:
    qc_status = "____"

print("Batch Status:", qc_status)
`,
        modelSolution: `measured_assay_pct = 98.4\nif 90.0 <= measured_assay_pct <= 110.0:\n    qc_status = "Pass"\nelse:\n    qc_status = "Fail"\nprint("Batch Status:", qc_status)`,
        hints: [
            "If the condition is not met, the else block runs.",
            "Set qc_status = \"Fail\" inside the else block."
        ],
        explanation: `• 98.4 is between 90.0 and 110.0, so the if block executes.
• qc_status is assigned "Pass".`,
        commonMistakes: [
            {
                mistake: "Writing else without a colon: else",
                why: "else must always end with a colon (:).",
                fix: "Write else:"
            }
        ],
        teachingTip: "Ask students: 'What happens if a chemist gets 87.5%? (Fail - underpotent). What if 114%? (Fail - risk of toxicity).'",
        testCases: [
            {
                name: "qc_status is 'Pass'",
                type: "variable",
                varName: "qc_status",
                expectedValue: "Pass"
            }
        ]
    },

    {
        id: "u2_e03_if_elif_bmi",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Writing modular programs for simple pharmaceutical applications — BMI calculation",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "3. Patient BMI Classification (if-elif-else)",
        summary: "Classify Body Mass Index into WHO clinical categories using if-elif-else.",
        learn: `When testing multiple conditions sequentially, Python uses <code>if - elif - else</code> (where <em>elif</em> stands for 'else if').
The World Health Organization (WHO) classifies Body Mass Index (BMI in kg/m&sup2;) as follows:
• <code>BMI < 18.5</code>: Underweight
• <code>18.5 &le; BMI < 25.0</code>: Normal
• <code>25.0 &le; BMI < 30.0</code>: Overweight
• <code>BMI &ge; 30.0</code>: Obese`,
        exampleCode: `bmi = 22.4\nif bmi < 18.5:\n    cat = "Underweight"\nelif bmi < 25.0:\n    cat = "Normal"\nelse:\n    cat = "Overweight"`,
        scaffoldCode: `patient_bmi = 27.3

# Classify patient_bmi into category
if patient_bmi < 18.5:
    bmi_category = "Underweight"
elif patient_bmi < 25.0:
    bmi_category = "Normal"
elif patient_bmi < 30.0:
    bmi_category = "__________"
else:
    bmi_category = "Obese"

print("BMI Category:", bmi_category)
`,
        modelSolution: `patient_bmi = 27.3\nif patient_bmi < 18.5:\n    bmi_category = "Underweight"\nelif patient_bmi < 25.0:\n    bmi_category = "Normal"\nelif patient_bmi < 30.0:\n    bmi_category = "Overweight"\nelse:\n    bmi_category = "Obese"\nprint("BMI Category:", bmi_category)`,
        hints: [
            "27.3 falls between 25.0 and 30.0.",
            "Set bmi_category = \"Overweight\"."
        ],
        explanation: `• 27.3 is not < 18.5 (skipped).
• 27.3 is not < 25.0 (skipped).
• 27.3 is < 30.0 (True! Executes the third block).
• bmi_category becomes "Overweight".`,
        commonMistakes: [
            {
                mistake: "Using multiple separate if statements instead of elif",
                why: "Separate if statements check every condition independently. elif ensures only the first matching branch runs.",
                fix: "Use if - elif - else chains."
            }
        ],
        teachingTip: "Explain why BMI matters to a pharmacist: lipophilic drugs (like diazepam) have larger volumes of distribution in obese patients.",
        testCases: [
            {
                name: "bmi_category is 'Overweight'",
                type: "variable",
                varName: "bmi_category",
                expectedValue: "Overweight"
            }
        ]
    },

    {
        id: "u2_e04_nested_dose",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Conditional statements (nested conditions)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "4. Pediatric vs Adult Safety Gate (Nested Conditions)",
        summary: "Use nested if conditions to evaluate both patient age and weight before dosing.",
        learn: `A <strong>nested condition</strong> is an <code>if</code> statement placed inside another <code>if</code> statement. This is essential when a clinical decision depends on multiple sequential checks.
For example:
1. Is the patient an adult (age &ge; 18)?
   - If yes: is their weight &ge; 50 kg? (Full adult dose 500 mg vs weight-adjusted dose 350 mg).
2. If no (pediatric): refer to pediatrician.`,
        exampleCode: `if age >= 18:\n    if weight >= 50:\n        dose = 500\n    else:\n        dose = 350\nelse:\n    dose = 250`,
        scaffoldCode: `patient_age = 22
patient_weight_kg = 45

if patient_age >= 18:
    # Patient is adult. Now check weight:
    if patient_weight_kg >= 50:
        prescribed_dose = 500
    else:
        # Adult with low body weight (< 50 kg)
        prescribed_dose = ___
else:
    prescribed_dose = 250

print("Dose in mg:", prescribed_dose)
`,
        modelSolution: `patient_age = 22\npatient_weight_kg = 45\nif patient_age >= 18:\n    if patient_weight_kg >= 50:\n        prescribed_dose = 500\n    else:\n        prescribed_dose = 350\nelse:\n    prescribed_dose = 250\nprint("Dose in mg:", prescribed_dose)`,
        hints: [
            "The patient is 22 years old (age >= 18).",
            "Their weight is 45 kg, which is less than 50 kg.",
            "Fill in 350 for the reduced dose."
        ],
        explanation: `• The outer if (22 >= 18) is True.
• The inner if (45 >= 50) is False, so the inner else runs.
• prescribed_dose is set to 350 mg.`,
        commonMistakes: [
            {
                mistake: "Misaligning inner and outer indentation levels",
                why: "In nested conditions, each level must be indented further.",
                fix: "Use 4 spaces for outer block, 8 spaces for inner block."
            }
        ],
        teachingTip: "Relate this to clinical guidelines for low-weight adult patients receiving narrow therapeutic index drugs.",
        testCases: [
            {
                name: "prescribed_dose is 350",
                type: "variable",
                varName: "prescribed_dose",
                expectedValue: 350
            }
        ]
    },

    {
        id: "u2_e05_sig_decoder",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Conditional statements (if-elif-else)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "5. Prescription Latin Term Decoder (Sig)",
        summary: "Translate medical Latin abbreviations (bid, tid, qid) to daily dose counts.",
        learn: `Physicians historically write prescription instructions (Sig / Signatura) using Latin abbreviations:
• <code>"stat"</code> = Immediately (1 dose)
• <code>"bid"</code> (bis in die) = Twice daily (2 doses)
• <code>"tid"</code> (ter in die) = Three times daily (3 doses)
• <code>"qid"</code> (quater in die) = Four times daily (4 doses)
Hospital pharmacy software uses conditional logic to decode these directions into numeric daily schedules.`,
        exampleCode: `sig = "bid"\nif sig == "bid":\n    times_per_day = 2`,
        scaffoldCode: `latin_sig = "tid"

# Decode latin_sig into doses_per_day
if latin_sig == "stat":
    doses_per_day = 1
elif latin_sig == "bid":
    doses_per_day = 2
elif latin_sig == "tid":
    doses_per_day = _
elif latin_sig == "qid":
    doses_per_day = 4
else:
    doses_per_day = 0

print("Doses per day:", doses_per_day)
`,
        modelSolution: `latin_sig = "tid"\nif latin_sig == "stat":\n    doses_per_day = 1\nelif latin_sig == "bid":\n    doses_per_day = 2\nelif latin_sig == "tid":\n    doses_per_day = 3\nelif latin_sig == "qid":\n    doses_per_day = 4\nelse:\n    doses_per_day = 0\nprint("Doses per day:", doses_per_day)`,
        hints: [
            "'tid' means ter in die = 3 times a day.",
            "Fill in 3 for doses_per_day."
        ],
        explanation: `• latin_sig == "tid" evaluates to True.
• doses_per_day is assigned 3.`,
        commonMistakes: [
            {
                mistake: "Using single = in comparison: latin_sig = 'tid'",
                why: "Single = assigns. Double == tests equality.",
                fix: "Use == for comparisons."
            }
        ],
        teachingTip: "Highlight General Pharmacy (BP102T) prescription handling: Latin terminology is tested in semester exams.",
        testCases: [
            {
                name: "doses_per_day is 3",
                type: "variable",
                varName: "doses_per_day",
                expectedValue: 3
            }
        ]
    },

    {
        id: "u2_e06_for_range",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Loops (for loop)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "6. 7-Day Medication Schedule (for Loop)",
        summary: "Use a for loop with range() to generate a day-by-day pill schedule.",
        learn: `A <code>for</code> loop repeats a block of code for every item in a sequence.
The <code>range(start, stop)</code> function generates numbers from <code>start</code> up to (but not including) <code>stop</code>.
To print a 7-day antibiotic schedule from Day 1 to Day 7:
<code>for day in range(1, 8):</code>
<code>    print("Take dose on Day", day)</code>`,
        exampleCode: `for day in range(1, 4):\n    print(f"Day {day}: Take 1 tablet")`,
        scaffoldCode: `# Loop through days 1 to 7 using range(1, 8)
for day in range(1, 8):
    print("Day", day, "- Take 500mg Amoxicillin")
`,
        modelSolution: `for day in range(1, 8):\n    print("Day", day, "- Take 500mg Amoxicillin")`,
        hints: [
            "range(1, 8) produces numbers 1, 2, 3, 4, 5, 6, 7.",
            "The loop runs 7 times, once for each day."
        ],
        explanation: `• The variable 'day' starts at 1 and increases by 1 each turn.
• It prints a complete 7-day patient compliance schedule.`,
        commonMistakes: [
            {
                mistake: "Writing range(1, 7) instead of range(1, 8)",
                why: "range(1, 7) stops at 6! The upper bound is exclusive.",
                fix: "Use range(1, 8) for 7 days."
            }
        ],
        teachingTip: "Emphasize patient compliance: antibiotic courses must be completed for the full prescribed duration to prevent bacterial resistance.",
        testCases: [
            {
                name: "Prints schedule for all 7 days",
                type: "stdout",
                expectedOutput: "Day 7 - Take 500mg Amoxicillin"
            }
        ]
    },

    {
        id: "u2_e07_for_sum",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Loops (for loop)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "7. Total Quantity Across Prescriptions (Accumulator Loop)",
        summary: "Use a loop to sum up tablet quantities across multiple patient orders.",
        learn: `In pharmacy dispensing, you often receive multiple prescription orders and need to calculate the grand total. We use a <strong>running total (accumulator)</strong> variable:
1. Start with <code>total = 0</code>
2. In each iteration of the loop, add the current quantity: <code>total = total + qty</code> (or <code>total += qty</code>)`,
        exampleCode: `orders = [10, 20, 15]\ntotal = 0\nfor qty in orders:\n    total += qty\nprint(total)  # 45`,
        scaffoldCode: `prescription_quantities = [10, 14, 20, 30]
total_dispensed = 0

# Loop through each quantity and add it to total_dispensed
for qty in prescription_quantities:
    total_dispensed = total_dispensed + ___

print("Grand total dispensed:", total_dispensed)
`,
        modelSolution: `prescription_quantities = [10, 14, 20, 30]\ntotal_dispensed = 0\nfor qty in prescription_quantities:\n    total_dispensed = total_dispensed + qty\nprint("Grand total dispensed:", total_dispensed)`,
        hints: [
            "In each step of the loop, add qty to total_dispensed.",
            "Write: total_dispensed = total_dispensed + qty"
        ],
        explanation: `• Step 1: total = 0 + 10 = 10
• Step 2: total = 10 + 14 = 24
• Step 3: total = 24 + 20 = 44
• Step 4: total = 44 + 30 = 74 tablets.`,
        commonMistakes: [
            {
                mistake: "Resetting total_dispensed = 0 inside the loop",
                why: "If total is reset inside the loop, it only holds the last value.",
                fix: "Initialize the accumulator before the loop begins."
            }
        ],
        teachingTip: "Ask students: 'How would an inventory manager sum the total units dispensed at the end of the day?'",
        testCases: [
            {
                name: "total_dispensed is 74",
                type: "variable",
                varName: "total_dispensed",
                expectedValue: 74
            }
        ]
    },

    {
        id: "u2_e08_while_vial",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Loops (while loop)",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "8. Multidose Vial Withdrawal (while Loop)",
        summary: "Simulate withdrawals from an insulin vial until depleted using a while loop.",
        learn: `A <code>while</code> loop keeps repeating <em>as long as a condition remains True</em>.
Consider a 10 mL multidose vial of Insulin. Each patient dose withdraws 2 mL:
<code>while vial_volume >= dose_size:</code>
<code>    vial_volume = vial_volume - dose_size</code>
Be careful: a while loop must modify the condition variable, or it will loop forever (an infinite loop)!`,
        exampleCode: `vol = 10\nwhile vol > 0:\n    print(f"Remaining: {vol} mL")\n    vol -= 2`,
        scaffoldCode: `vial_volume_ml = 10.0
dose_ml = 2.0
doses_drawn = 0

# Keep withdrawing while vial_volume_ml is greater than or equal to dose_ml
while vial_volume_ml >= dose_ml:
    vial_volume_ml = vial_volume_ml - dose_ml
    doses_drawn = doses_drawn + 1

print("Total doses drawn:", doses_drawn)
print("Remaining volume in vial:", vial_volume_ml)
`,
        modelSolution: `vial_volume_ml = 10.0\ndose_ml = 2.0\ndoses_drawn = 0\nwhile vial_volume_ml >= dose_ml:\n    vial_volume_ml = vial_volume_ml - dose_ml\n    doses_drawn = doses_drawn + 1\nprint("Total doses drawn:", doses_drawn)\nprint("Remaining volume in vial:", vial_volume_ml)`,
        hints: [
            "The loop continues while vial_volume_ml >= dose_ml.",
            "Each step subtracts dose_ml and increments doses_drawn by 1."
        ],
        explanation: `• Runs 5 times (10 -> 8 -> 6 -> 4 -> 2 -> 0).
• When volume reaches 0.0, the condition (0.0 >= 2.0) is False and the loop stops.
• Exactly 5 doses were drawn.`,
        commonMistakes: [
            {
                mistake: "Forgetting to decrease vial_volume_ml inside the loop",
                why: "If the volume never decreases, the condition is always True -> Infinite Loop!",
                fix: "Always update the loop control variable."
            }
        ],
        teachingTip: "Relate to hospital nursing: multi-dose vials have fixed extractable volume before discarding.",
        testCases: [
            {
                name: "doses_drawn is 5",
                type: "variable",
                varName: "doses_drawn",
                expectedValue: 5
            },
            {
                name: "vial_volume_ml is 0.0",
                type: "variable",
                varName: "vial_volume_ml",
                expectedValue: 0.0
            }
        ]
    },

    {
        id: "u2_e09_break_qc",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Break and continue statements",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "9. Halting QC Testing on Defect (break)",
        summary: "Use the break statement to immediately stop a loop when a broken tablet is detected.",
        learn: `The <code>break</code> statement terminates a loop immediately.
In quality control friability or visual inspection, as soon as an inspector finds a cracked or capped tablet, there is no need to inspect the remaining 99 tablets—the batch is immediately flagged for rejection:
<code>if tablet_condition == "Defective": break</code>`,
        exampleCode: `for tablet in ["Good", "Good", "Broken", "Good"]:\n    if tablet == "Broken":\n        print("Defect found! Stopping.")\n        break`,
        scaffoldCode: `tablet_samples = ["Intact", "Intact", "Chipped", "Intact", "Intact"]
inspected_count = 0

for sample in tablet_samples:
    if sample == "Chipped":
        print("Defect found! Halting inspection.")
        # Stop the loop immediately using break
        _____
    inspected_count = inspected_count + 1

print("Tablets inspected before halt:", inspected_count)
`,
        modelSolution: `tablet_samples = ["Intact", "Intact", "Chipped", "Intact", "Intact"]\ninspected_count = 0\nfor sample in tablet_samples:\n    if sample == "Chipped":\n        print("Defect found! Halting inspection.")\n        break\n    inspected_count = inspected_count + 1\nprint("Tablets inspected before halt:", inspected_count)`,
        hints: [
            "Type the keyword: break",
            "break immediately exits the for loop."
        ],
        explanation: `• Tablet 1 (Intact): count = 1.
• Tablet 2 (Intact): count = 2.
• Tablet 3 (Chipped): triggers break!
• Loop stops immediately without inspecting tablets 4 and 5. inspected_count = 2.`,
        commonMistakes: [
            {
                mistake: "Putting break outside of an if condition",
                why: "If break is placed directly in the loop, the loop will only run once.",
                fix: "Place break inside the if block."
            }
        ],
        teachingTip: "Explain efficiency in industrial QC: why waste 3 hours testing when a critical failure is found in the first 5 minutes?",
        testCases: [
            {
                name: "inspected_count is 2",
                type: "variable",
                varName: "inspected_count",
                expectedValue: 2
            }
        ]
    },

    {
        id: "u2_e10_continue_exp",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Break and continue statements",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "10. Skipping Expired Stock (continue)",
        summary: "Use the continue statement to skip expired medicine lots and process valid ones.",
        learn: `Unlike <code>break</code> (which stops the entire loop), <code>continue</code> skips only the current iteration and jumps directly to the next item in the loop.
When auditing medicine stock, if a batch is marked "Expired", we skip dispensing it and continue checking the remaining batches.`,
        exampleCode: `for status in ["Valid", "Expired", "Valid"]:\n    if status == "Expired":\n        continue\n    print("Dispensing:", status)`,
        scaffoldCode: `batch_statuses = ["Valid", "Expired", "Valid", "Valid"]
dispensed_batches = 0

for status in batch_statuses:
    if status == "Expired":
        # Skip this expired batch using continue
        ________
    dispensed_batches = dispensed_batches + 1

print("Valid batches dispensed:", dispensed_batches)
`,
        modelSolution: `batch_statuses = ["Valid", "Expired", "Valid", "Valid"]\ndispensed_batches = 0\nfor status in batch_statuses:\n    if status == "Expired":\n        continue\n    dispensed_batches = dispensed_batches + 1\nprint("Valid batches dispensed:", dispensed_batches)`,
        hints: [
            "Use the keyword: continue",
            "continue skips the remainder of the loop body for that iteration."
        ],
        explanation: `• When status == "Expired", continue skips the dispensed_batches line.
• 3 valid batches are processed; 1 expired batch is skipped. Result = 3.`,
        commonMistakes: [
            {
                mistake: "Confusing break and continue",
                why: "break stops the entire loop. continue only skips the current turn.",
                fix: "Use continue when you want to skip an item and keep going."
            }
        ],
        teachingTip: "Explain good pharmacy practice: expired stock must be quarantined, never dispensed.",
        testCases: [
            {
                name: "dispensed_batches is 3",
                type: "variable",
                varName: "dispensed_batches",
                expectedValue: 3
            }
        ]
    },

    {
        id: "u2_e11_func_pediatric",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Defining and calling functions, passing arguments and returning values. Writing modular programs for dosage calculation",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "11. Modular Function: Pediatric Dosage (Young's Rule)",
        summary: "Define and call a reusable Python function to calculate child doses.",
        learn: `A <strong>function</strong> is a reusable block of code that takes inputs (arguments), performs a calculation, and sends back a result using the <code>return</code> keyword.
In Posology, Young's rule calculates pediatric dose for children aged 1 to 12 years:
<code>Child Dose = (Age / (Age + 12)) &times; Adult Dose</code>
Instead of rewriting this formula every time, we write a modular function:
<code>def calculate_child_dose(adult_dose_mg, age_years):</code>`,
        exampleCode: `def add_doses(d1, d2):\n    return d1 + d2\n\ntotal = add_doses(100, 200)  # total is 300`,
        scaffoldCode: `# Define the function calculate_child_dose
def calculate_child_dose(adult_dose_mg, age_years):
    # Calculate child_dose using Young's formula:
    # (age_years / (age_years + 12)) * adult_dose_mg
    child_dose = (age_years / (age_years + 12)) * adult_dose_mg
    return round(child_dose, 2)

# Call the function for a 6-year-old child with a 500 mg adult dose
dose_for_child = calculate_child_dose(500, 6)
print("Pediatric Dose (mg):", dose_for_child)
`,
        modelSolution: `def calculate_child_dose(adult_dose_mg, age_years):\n    child_dose = (age_years / (age_years + 12)) * adult_dose_mg\n    return round(child_dose, 2)\n\ndose_for_child = calculate_child_dose(500, 6)\nprint("Pediatric Dose (mg):", dose_for_child)`,
        hints: [
            "Use def to define the function.",
            "Use return round(child_dose, 2) to send back the answer.",
            "Test with calculate_child_dose(500, 6) -> 166.67 mg."
        ],
        explanation: `• def calculate_child_dose(...) defines the function blueprint.
• When calculate_child_dose(500, 6) is called, adult_dose_mg becomes 500 and age_years becomes 6.
• (6 / 18) * 500 = 166.67 mg.
• The return statement hands this value back to dose_for_child.`,
        commonMistakes: [
            {
                mistake: "Using print() instead of return inside the function",
                why: "print() only displays text. return allows the output to be saved in a variable.",
                fix: "Use return to send back values."
            }
        ],
        teachingTip: "Ask students: 'Imagine a busy hospital dispensing 500 pediatric prescriptions a day. Would you rather calculate by hand or call calculate_child_dose()?'",
        testCases: [
            {
                name: "calculate_child_dose(500, 6) returns 166.67",
                type: "function_call",
                call: "calculate_child_dose(500, 6)",
                expectedValue: 166.67
            },
            {
                name: "calculate_child_dose(250, 4) returns 62.5",
                type: "function_call",
                call: "calculate_child_dose(250, 4)",
                expectedValue: 62.5
            }
        ]
    },

    {
        id: "u2_e12_func_bmi",
        unitId: "unit-2",
        unitNumber: "UNIT II",
        syllabusTopic: "Writing modular programs for simple pharmaceutical applications — BMI calculation",
        co: "CO2",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "12. Modular Function: Patient BMI Calculator",
        summary: "Write a modular clinical function that computes BMI from weight and height.",
        learn: `Body Mass Index (BMI) is widely used by clinical pharmacists to adjust narrow-therapeutic-index drugs.
<code>BMI = Weight in kg / (Height in meters)&sup2;</code>
In Python, squaring a number is written as <code>height_m ** 2</code>.
Let's build a modular function that takes weight (kg) and height (m) and returns the rounded BMI value.`,
        exampleCode: `def square(x):\n    return x ** 2`,
        scaffoldCode: `# Define a function named calculate_bmi
def calculate_bmi(weight_kg, height_m):
    # Calculate bmi = weight_kg / (height_m ** 2)
    bmi = weight_kg / (height_m ** 2)
    return round(bmi, 2)

# Call the function for 70 kg and 1.75 meters
patient_bmi = calculate_bmi(70, 1.75)
print("Patient BMI:", patient_bmi)
`,
        modelSolution: `def calculate_bmi(weight_kg, height_m):\n    bmi = weight_kg / (height_m ** 2)\n    return round(bmi, 2)\n\npatient_bmi = calculate_bmi(70, 1.75)\nprint("Patient BMI:", patient_bmi)`,
        hints: [
            "Use ** 2 for exponentiation: height_m ** 2.",
            "Return round(bmi, 2)."
        ],
        explanation: `• 1.75 ** 2 = 3.0625 m².
• 70 / 3.0625 = 22.86 kg/m² (a healthy, normal BMI).
• The function returns 22.86.`,
        commonMistakes: [
            {
                mistake: "Writing height_m ^ 2 instead of height_m ** 2",
                why: "In Python, ^ is the bitwise XOR operator, not power!",
                fix: "Always use ** for powers in Python."
            }
        ],
        teachingTip: "Remind students: height must be in meters, not centimeters! 175 cm = 1.75 m.",
        testCases: [
            {
                name: "calculate_bmi(70, 1.75) returns 22.86",
                type: "function_call",
                call: "calculate_bmi(70, 1.75)",
                expectedValue: 22.86
            },
            {
                name: "calculate_bmi(90, 1.80) returns 27.78",
                type: "function_call",
                call: "calculate_bmi(90, 1.80)",
                expectedValue: 27.78
            }
        ]
    },

    // ========================================================================
    // UNIT III: DATA STRUCTURES & FILE HANDLING (10 Guided Activities)
    // 6 Hours (CT: 5 hrs, SL: 1 hr) | CO3 | Bloom: BL4 – Analyze
    // ========================================================================
    {
        id: "u3_a01_list_drugs",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Lists, indexing, basic operations on lists",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "1. Essential Drug List (Lists & Indexing)",
        summary: "Create and access elements in a Python list of pharmaceutical medicines.",
        learn: `A <strong>list</strong> is an ordered, changeable collection of items enclosed in square brackets <code>[...]</code>.
In a pharmacy dispensary, a formulary or essential drug list is stored as a list.
In Python, indexing starts at <strong>0</strong>:
• <code>drugs[0]</code> accesses the 1st medicine.
• <code>drugs[1]</code> accesses the 2nd medicine.
• <code>drugs[-1]</code> accesses the last medicine.`,
        exampleCode: `antibiotics = ["Amoxicillin", "Azithromycin", "Ciprofloxacin"]\nprint(antibiotics[0])  # Amoxicillin`,
        scaffoldCode: `# Create a list of 3 medicines
essential_drugs = ["Paracetamol", "Amoxicillin", "Cetirizine"]

# Access the first drug (index 0)
first_drug = essential_drugs[_]

# Add "Metformin" to the list using .append()
essential_drugs.append("Metformin")

print("First drug:", first_drug)
print("Updated list:", essential_drugs)
`,
        modelSolution: `essential_drugs = ["Paracetamol", "Amoxicillin", "Cetirizine"]\nfirst_drug = essential_drugs[0]\nessential_drugs.append("Metformin")\nprint("First drug:", first_drug)\nprint("Updated list:", essential_drugs)`,
        hints: [
            "Python indexes start at 0: essential_drugs[0].",
            "Use .append(\"Metformin\") to add a drug to the end of the list."
        ],
        explanation: `• essential_drugs[0] retrieves "Paracetamol".
• .append() modifies the list in place, adding "Metformin" as the 4th item.`,
        commonMistakes: [
            {
                mistake: "essential_drugs[1] for the first item",
                why: "Python is zero-indexed! Index 1 gives the second item.",
                fix: "Use index 0 for the first element."
            }
        ],
        teachingTip: "Explain that lists are like a pharmacy shelf where every slot has an address number starting from zero.",
        testCases: [
            {
                name: "first_drug is 'Paracetamol'",
                type: "variable",
                varName: "first_drug",
                expectedValue: "Paracetamol"
            },
            {
                name: "essential_drugs has length 4",
                type: "custom",
                code: "len(essential_drugs) == 4 and essential_drugs[3] == 'Metformin'"
            }
        ]
    },

    {
        id: "u3_a02_list_slice",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Indexing and slicing lists",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "2. QC Batch Sampling with Slicing",
        summary: "Extract sub-samples from a batch list using Python slice notation [start:stop].",
        learn: `<strong>Slicing</strong> allows you to extract a specific portion of a list using <code>list[start:stop]</code>.
Note that the <code>stop</code> index is exclusive (not included in the result).
In pharmaceutical quality assurance, when 10 tablets come off the rotary compression press, an analyst might slice the first 3 tablets for weight testing and the last 3 for friability testing.`,
        exampleCode: `tablets = [498, 501, 500, 503, 499, 502]\nsample = tablets[0:3]  # [498, 501, 500]`,
        scaffoldCode: `batch_weights = [500.1, 498.5, 502.3, 499.0, 501.2, 497.8]

# Slice the first 3 tablets (index 0 up to 3)
initial_sample = batch_weights[0:3]

# Slice the last 2 tablets using negative indexing [-2:]
final_sample = batch_weights[-2:]

print("Initial sample:", initial_sample)
print("Final sample:", final_sample)
`,
        modelSolution: `batch_weights = [500.1, 498.5, 502.3, 499.0, 501.2, 497.8]\ninitial_sample = batch_weights[0:3]\nfinal_sample = batch_weights[-2:]\nprint("Initial sample:", initial_sample)\nprint("Final sample:", final_sample)`,
        hints: [
            "Use [0:3] to extract items at indices 0, 1, and 2.",
            "[-2:] extracts from 2nd-from-last to the end."
        ],
        explanation: `• batch_weights[0:3] returns the first 3 values: [500.1, 498.5, 502.3].
• batch_weights[-2:] returns the last 2 values: [501.2, 497.8].`,
        commonMistakes: [
            {
                mistake: "Thinking [0:3] includes index 3",
                why: "Slicing is half-open [start, stop): index 3 is not included.",
                fix: "To get indices 0, 1, 2, use [0:3]."
            }
        ],
        teachingTip: "Demonstrate Pharmacopoeial sampling: randomly slicing portions of a batch for QC testing.",
        testCases: [
            {
                name: "initial_sample length is 3",
                type: "custom",
                code: "len(initial_sample) == 3 and initial_sample[0] == 500.1"
            }
        ]
    },

    {
        id: "u3_a03_tuple_standards",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Tuples",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "3. Fixed Pharmacopoeial Standards (Tuples)",
        summary: "Store immutable official standards that cannot be accidentally modified in a tuple.",
        learn: `A <strong>tuple</strong> is an ordered collection enclosed in round parentheses <code>(...)</code> that is <strong>immutable</strong> (it cannot be changed after creation).
In pharmacy, official Pharmacopoeial limits (such as IP temperature standards or allowed dissolution thresholds) must remain fixed to prevent accidental modification during program execution.`,
        exampleCode: `ip_limits = (90.0, 110.0)  # Cannot be changed!`,
        scaffoldCode: `# Create a tuple named assay_limits storing the values 90.0 and 110.0
assay_limits = (____, _____)

print("Official IP Assay Limits (%):", assay_limits)
print("Lower limit:", assay_limits[0])
print("Upper limit:", assay_limits[1])
`,
        modelSolution: `assay_limits = (90.0, 110.0)\nprint("Official IP Assay Limits (%):", assay_limits)\nprint("Lower limit:", assay_limits[0])\nprint("Upper limit:", assay_limits[1])`,
        hints: [
            "Use parentheses: (90.0, 110.0).",
            "Tuples are indexed just like lists: assay_limits[0]."
        ],
        explanation: `• assay_limits = (90.0, 110.0) creates a 2-element tuple.
• If someone tries assay_limits[0] = 85.0, Python raises a TypeError, protecting official standards.`,
        commonMistakes: [
            {
                mistake: "Trying to append to a tuple: tuple.append()",
                why: "Tuples are immutable; they have no append method.",
                fix: "Use a list if you need to add items, or tuple for fixed standards."
            }
        ],
        teachingTip: "Explain regulatory compliance: you don't want a junior QA tech's code accidentally rewriting the monograph specification.",
        testCases: [
            {
                name: "assay_limits is a tuple (90.0, 110.0)",
                type: "variable",
                varName: "assay_limits",
                expectedValue: [90.0, 110.0]
            }
        ]
    },

    {
        id: "u3_a04_dict_monograph",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Dictionaries and basic dictionary operations",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "4. Drug Monograph Dictionary",
        summary: "Store and query key-value pairs representing a drug's complete specifications.",
        learn: `A <strong>dictionary</strong> stores data in <code>key: value</code> pairs enclosed in curly braces <code>{...}</code>.
Instead of remembering that index 0 is name and index 1 is strength, dictionaries let you look up values using meaningful labels:
<code>medicine["name"] &rarr; "Paracetamol"</code>
<code>medicine["strength"] &rarr; 500</code>`,
        exampleCode: `drug = {\n    "name": "Aspirin",\n    "strength_mg": 75,\n    "dosage_form": "Tablet"\n}\nprint(drug["name"])`,
        scaffoldCode: `# Create a dictionary named medicine
medicine = {
    "name": "Paracetamol",
    "strength": 500,
    "unit": "mg",
    "stock": 120
}

# Access the drug's name using medicine["name"]
drug_name = medicine["____"]

# Update stock to 150
medicine["stock"] = 150

print("Drug Name:", drug_name)
print("Updated Medicine:", medicine)
`,
        modelSolution: `medicine = {\n    "name": "Paracetamol",\n    "strength": 500,\n    "unit": "mg",\n    "stock": 120\n}\ndrug_name = medicine["name"]\nmedicine["stock"] = 150\nprint("Drug Name:", drug_name)\nprint("Updated Medicine:", medicine)`,
        hints: [
            "Use the key \"name\" to retrieve the drug name.",
            "Update stock with medicine[\"stock\"] = 150."
        ],
        explanation: `• Dictionaries use keys instead of numeric indices.
• medicine["name"] returns "Paracetamol".
• medicine["stock"] = 150 modifies the stock value in place.`,
        commonMistakes: [
            {
                mistake: "Using dot notation like JavaScript: medicine.name",
                why: "In Python, dictionary values are accessed with brackets: dict['key'].",
                fix: "Use medicine[\"name\"]."
            }
        ],
        teachingTip: "Show students how this mirrors an Indian Pharmacopoeia monograph: Title, Category, Dose, Storage.",
        testCases: [
            {
                name: "drug_name is 'Paracetamol'",
                type: "variable",
                varName: "drug_name",
                expectedValue: "Paracetamol"
            },
            {
                name: "medicine stock is 150",
                type: "custom",
                code: "medicine['stock'] == 150"
            }
        ]
    },

    {
        id: "u3_a05_str_clean",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "String manipulation techniques",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "5. Cleaning Messy Drug Label Strings",
        summary: "Standardize drug names using .strip(), .upper(), and .replace().",
        learn: `In hospital databases, different pharmacists enter drug names inconsistently (e.g. <code>"  amoxicillin 250mg  "</code>). To prevent dispensing errors, we standardize strings using Python string methods:
• <code>.strip()</code>: removes unwanted whitespace from both ends.
• <code>.upper()</code>: converts text to ALL CAPS.
• <code>.lower()</code>: converts text to lowercase.
• <code>.replace("old", "new")</code>: swaps substrings.`,
        exampleCode: `raw = "  paracetamol  "\nclean = raw.strip().upper()  # "PARACETAMOL"`,
        scaffoldCode: `raw_entry = "   ciprofloxacin 500mg   "

# Step 1: Remove leading/trailing spaces using .strip()
trimmed_entry = raw_entry.strip()

# Step 2: Convert to uppercase using .upper()
clean_drug_name = trimmed_entry._______()

print("Original:", raw_entry)
print("Standardized:", clean_drug_name)
`,
        modelSolution: `raw_entry = "   ciprofloxacin 500mg   "\ntrimmed_entry = raw_entry.strip()\nclean_drug_name = trimmed_entry.upper()\nprint("Original:", raw_entry)\nprint("Standardized:", clean_drug_name)`,
        hints: [
            "Call .upper() on trimmed_entry.",
            "Write: clean_drug_name = trimmed_entry.upper()"
        ],
        explanation: `• .strip() eliminates the leading and trailing spaces.
• .upper() transforms "ciprofloxacin 500mg" to "CIPROFLOXACIN 500MG".`,
        commonMistakes: [
            {
                mistake: "raw_entry.strip() without saving to a variable",
                why: "Strings in Python are immutable! Calling .strip() returns a new string; it doesn't modify the original in place.",
                fix: "Save to a variable: clean = raw_entry.strip()"
            }
        ],
        teachingTip: "Explain Sound-Alike Look-Alike (LASA) drugs: clean, standardized uppercase text reduces dispensing errors in hospital wards.",
        testCases: [
            {
                name: "clean_drug_name is 'CIPROFLOXACIN 500MG'",
                type: "variable",
                varName: "clean_drug_name",
                expectedValue: "CIPROFLOXACIN 500MG"
            }
        ]
    },

    {
        id: "u3_a06_numpy_array",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Introduction to NumPy arrays, array creation",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "6. Creating NumPy Arrays of Tablet Weights",
        summary: "Import NumPy and create an array of tablet batch measurements.",
        learn: `<strong>NumPy</strong> (Numerical Python) is the foundational scientific library in Python. While standard Python lists can hold anything, a <strong>NumPy array</strong> stores numbers of the same type in contiguous memory, making scientific calculations 50&times; faster!
We import NumPy using the universal standard alias: <code>import numpy as np</code>
and create an array using <code>np.array([...])</code>.`,
        exampleCode: `import numpy as np\nweights = np.array([500.2, 498.6, 501.4])\nprint(weights)`,
        scaffoldCode: `# Import numpy with the alias np
import numpy as __

# Create a numpy array of 5 tablet weights
tablet_weights = np.array([498.2, 502.1, 495.4, 501.0, 499.5])

print("NumPy Array of Weights:")
print(tablet_weights)
print("Array data type:", tablet_weights.dtype)
`,
        modelSolution: `import numpy as np\ntablet_weights = np.array([498.2, 502.1, 495.4, 501.0, 499.5])\nprint("NumPy Array of Weights:")\nprint(tablet_weights)\nprint("Array data type:", tablet_weights.dtype)`,
        hints: [
            "Use standard alias: import numpy as np",
            "tablet_weights = np.array([...])"
        ],
        explanation: `• import numpy as np gives access to NumPy functions.
• np.array() converts the Python list into an optimized 1D numerical array.
• .dtype shows that elements are 64-bit floating point numbers (float64).`,
        commonMistakes: [
            {
                mistake: "Calling np.Array() with a capital A",
                why: "NumPy's array constructor is lowercase: np.array().",
                fix: "Use lowercase np.array()."
            }
        ],
        teachingTip: "Explain why NumPy is used everywhere in pharmaceutical sciences: molecular modeling, pharmacometrics, and analytical signal processing.",
        testCases: [
            {
                name: "tablet_weights has length 5",
                type: "custom",
                code: "len(tablet_weights) == 5 and round(float(tablet_weights[0]), 1) == 498.2"
            }
        ]
    },

    {
        id: "u3_a07_numpy_stats",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Basic operations using NumPy (arithmetic operations)",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "7. Batch Statistics with NumPy (Mean & Total)",
        summary: "Compute batch total weight and mean using np.sum() and np.mean().",
        learn: `NumPy provides built-in statistical functions that operate on an entire array instantly:
• <code>np.sum(array)</code>: calculates total sum
• <code>np.mean(array)</code>: calculates average value
• <code>np.min(array)</code>: finds minimum value
• <code>np.max(array)</code>: finds maximum value
In tablet manufacturing QC, calculating the mean weight of 20 tablets takes just a single command!`,
        exampleCode: `import numpy as np\narr = np.array([10, 20, 30])\nprint(np.mean(arr))  # 20.0`,
        scaffoldCode: `import numpy as np

weights = np.array([498.2, 502.1, 495.4, 501.0, 499.5])

# Calculate total batch weight using np.sum()
total_weight = np.sum(_______)

# Calculate average tablet weight using np.mean()
average_weight = np.mean(_______)

print("Total Weight (mg):", round(total_weight, 2))
print("Average Weight (mg):", round(average_weight, 2))
`,
        modelSolution: `import numpy as np\nweights = np.array([498.2, 502.1, 495.4, 501.0, 499.5])\ntotal_weight = np.sum(weights)\naverage_weight = np.mean(weights)\nprint("Total Weight (mg):", round(total_weight, 2))\nprint("Average Weight (mg):", round(average_weight, 2))`,
        hints: [
            "Pass weights into np.sum(weights).",
            "Pass weights into np.mean(weights)."
        ],
        explanation: `• np.sum(weights) sums all 5 tablet weights (2496.2 mg).
• np.mean(weights) divides by 5, giving 499.24 mg (very close to the 500 mg target!).`,
        commonMistakes: [
            {
                mistake: "Writing weights.sum instead of np.sum(weights) or weights.sum()",
                why: "Methods must be called with parentheses ().",
                fix: "Use np.mean(weights) or weights.mean()."
            }
        ],
        teachingTip: "Compare this to calculating the average of 20 tablets on a pocket calculator during a practical exam. NumPy does it in 1 millisecond.",
        testCases: [
            {
                name: "average_weight is 499.24",
                type: "variable",
                varName: "average_weight",
                expectedValue: 499.24
            }
        ]
    },

    {
        id: "u3_a08_csv_read",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Reading and writing CSV files, structured healthcare datasets",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "8. Reading Pharmacy Inventory CSV Files",
        summary: "Use Python's built-in csv module to read and inspect a medicine inventory file.",
        learn: `<strong>CSV</strong> (Comma-Separated Values) is the universal file format used in healthcare and pharmacy for storing tabular data (like Excel spreadsheets).
Python includes a standard <code>csv</code> module:
<code>import csv</code>
<code>with open('file.csv', 'r') as f:</code>
<code>    reader = csv.reader(f)</code>
<code>    for row in reader: print(row)</code>`,
        exampleCode: `import csv\nwith open('medicine_inventory.csv', 'r') as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row[1])  # Prints drug names`,
        scaffoldCode: `import csv

# Open the built-in medicine_inventory.csv file
with open('medicine_inventory.csv', mode='r') as file:
    csv_reader = csv.reader(file)
    header = next(csv_reader)  # Read header row
    
    drug_names = []
    for row in csv_reader:
        # row[1] contains the Drug_Name
        drug_names.append(row[1])

print("Total drugs loaded:", len(drug_names))
print("First 3 drugs:", drug_names[0:3])
`,
        modelSolution: `import csv\nwith open('medicine_inventory.csv', mode='r') as file:\n    csv_reader = csv.reader(file)\n    header = next(csv_reader)\n    drug_names = []\n    for row in csv_reader:\n        drug_names.append(row[1])\nprint("Total drugs loaded:", len(drug_names))\nprint("First 3 drugs:", drug_names[0:3])`,
        hints: [
            "next(csv_reader) skips the column names header.",
            "row[1] extracts the second column (Drug_Name)."
        ],
        explanation: `• with open(...) safely opens the CSV file and ensures it closes automatically.
• csv.reader parses lines by separating values at each comma.
• row[1] grabs the drug name from each inventory line.`,
        commonMistakes: [
            {
                mistake: "Forgetting to skip the header row",
                why: "If you don't call next(), 'Drug_Name' will be included as an actual drug in your list!",
                fix: "Use next(csv_reader) before the loop."
            }
        ],
        teachingTip: "Explain that hospital management software exports daily billing and stock reports as CSV files.",
        testCases: [
            {
                name: "Loaded 10 drugs from inventory",
                type: "variable",
                varName: "drug_names",
                expectedValue: ["Paracetamol", "Amoxicillin", "Cetirizine", "Metformin", "Ibuprofen", "Azithromycin", "Omeprazole", "Atorvastatin", "Ciprofloxacin", "Salbutamol"]
            }
        ]
    },

    {
        id: "u3_a09_csv_write",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Reading and writing CSV files",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "9. Writing Dispensing Logs to CSV",
        summary: "Record patient dispensing logs into a CSV audit file using csv.writer.",
        learn: `Hospital pharmacies must maintain legal audit records of dispensed medications. Python's <code>csv.writer</code> allows you to create new CSV files and write rows:
<code>writer.writerow(['Patient', 'Drug', 'Qty'])</code>`,
        exampleCode: `import csv\nwith open('log.csv', 'w', newline='') as f:\n    w = csv.writer(f)\n    w.writerow(['Rx_ID', 'Drug'])\n    w.writerow(['RX101', 'Paracetamol'])`,
        scaffoldCode: `import csv

dispensing_records = [
    ["Rx_ID", "Patient_Name", "Drug", "Quantity"],
    ["RX001", "Ramesh Kumar", "Paracetamol", 10],
    ["RX002", "Priya Sharma", "Amoxicillin", 15],
    ["RX003", "Anil Verma", "Cetirizine", 5]
]

# Write records to daily_dispense_log.csv
with open('daily_dispense_log.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    for record in dispensing_records:
        writer.writerow(record)

print("Dispensing records written successfully!")
`,
        modelSolution: `import csv\ndispensing_records = [\n    ["Rx_ID", "Patient_Name", "Drug", "Quantity"],\n    ["RX001", "Ramesh Kumar", "Paracetamol", 10],\n    ["RX002", "Priya Sharma", "Amoxicillin", 15],\n    ["RX003", "Anil Verma", "Cetirizine", 5]\n]\nwith open('daily_dispense_log.csv', mode='w', newline='') as file:\n    writer = csv.writer(file)\n    for record in dispensing_records:\n        writer.writerow(record)\nprint("Dispensing records written successfully!")`,
        hints: [
            "Use mode='w' for writing.",
            "Call writer.writerow(record) for each row."
        ],
        explanation: `• mode='w' creates or overwrites the file.
• writer.writerow() writes a list of values separated by commas.`,
        commonMistakes: [
            {
                mistake: "Omitting newline='' on Windows",
                why: "On Windows, omitting newline='' can add blank lines between CSV rows.",
                fix: "Always pass newline='' when opening files for CSV writing."
            }
        ],
        teachingTip: "Explain CDSCO and FDA data integrity guidelines: audit trails must record who dispensed what and when.",
        testCases: [
            {
                name: "Writes dispensing log",
                type: "stdout",
                expectedOutput: "Dispensing records written successfully!"
            }
        ]
    },

    {
        id: "u3_a10_patient_records",
        unitId: "unit-3",
        unitNumber: "UNIT III",
        syllabusTopic: "Understanding structured healthcare datasets, basic data access",
        co: "CO3",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "10. Querying Structured Patient Healthcare Records",
        summary: "Filter a list of patient dictionaries to find those prescribed Metformin.",
        learn: `Real-world clinical data often exists as a <strong>list of dictionaries</strong>, where each dictionary represents one patient or one prescription.
We can iterate through the list and check dictionary keys to find matching patients:
<code>for pt in patient_list:</code>
<code>    if pt["drug"] == "Metformin": count += 1</code>`,
        exampleCode: `pts = [{"id": 1, "drug": "Aspirin"}, {"id": 2, "drug": "Metformin"}]\nfor p in pts:\n    if p["drug"] == "Metformin":\n        print("Found patient:", p["id"])`,
        scaffoldCode: `patients = [
    {"id": "P101", "name": "Rajesh", "prescribed_drug": "Metformin", "age": 52},
    {"id": "P102", "name": "Sunita", "prescribed_drug": "Paracetamol", "age": 28},
    {"id": "P103", "name": "Deepak", "prescribed_drug": "Metformin", "age": 61},
    {"id": "P104", "name": "Meena",  "prescribed_drug": "Atorvastatin", "age": 45}
]

metformin_patients = []

# Loop through patients and find those prescribed "Metformin"
for pt in patients:
    if pt["prescribed_drug"] == "Metformin":
        metformin_patients.append(pt["name"])

print("Patients taking Metformin:", metformin_patients)
`,
        modelSolution: `patients = [\n    {"id": "P101", "name": "Rajesh", "prescribed_drug": "Metformin", "age": 52},\n    {"id": "P102", "name": "Sunita", "prescribed_drug": "Paracetamol", "age": 28},\n    {"id": "P103", "name": "Deepak", "prescribed_drug": "Metformin", "age": 61},\n    {"id": "P104", "name": "Meena",  "prescribed_drug": "Atorvastatin", "age": 45}\n]\nmetformin_patients = []\nfor pt in patients:\n    if pt["prescribed_drug"] == "Metformin":\n        metformin_patients.append(pt["name"])\nprint("Patients taking Metformin:", metformin_patients)`,
        hints: [
            "Check if pt[\"prescribed_drug\"] == \"Metformin\".",
            "If True, append pt[\"name\"] to metformin_patients."
        ],
        explanation: `• Inspects P101 (Rajesh) -> Matches!
• Inspects P102 (Sunita) -> Skipped.
• Inspects P103 (Deepak) -> Matches!
• metformin_patients becomes ['Rajesh', 'Deepak'].`,
        commonMistakes: [
            {
                mistake: "Appending the whole dictionary instead of the patient's name",
                why: "pt is the dictionary. pt['name'] gets the name string.",
                fix: "Append pt['name']."
            }
        ],
        teachingTip: "Ask students: 'If a pharmaceutical company announces a recall on a specific batch of Metformin, how quickly can your software identify every patient who received it?'",
        testCases: [
            {
                name: "metformin_patients is ['Rajesh', 'Deepak']",
                type: "variable",
                varName: "metformin_patients",
                expectedValue: ["Rajesh", "Deepak"]
            }
        ]
    },

    // ========================================================================
    // UNIT IV: DATA HANDLING WITH PANDAS (10 Guided Labs)
    // 6 Hours (CT: 5 hrs, SL: 1 hr) | CO4 | Bloom: BL4 – Analyze
    // ========================================================================
    {
        id: "u4_l01_pandas_series",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Introduction to the Pandas library, Pandas Series structure",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "1. Introduction to Pandas Series",
        summary: "Create a 1D labeled Pandas Series of patient blood pressure readings.",
        learn: `<strong>Pandas</strong> is the world's most popular data analysis library.
A <strong>Series</strong> is a 1-dimensional labeled column of data. Think of it like a column in a patient's chart with dates as labels:
<code>import pandas as pd</code>
<code>bp = pd.Series([120, 125, 118], index=['Day 1', 'Day 2', 'Day 3'])</code>`,
        exampleCode: `import pandas as pd\ndoses = pd.Series([500, 500, 250], index=['Morning', 'Afternoon', 'Night'])\nprint(doses)`,
        scaffoldCode: `import pandas as pd

# Create a Pandas Series of Systolic Blood Pressure (mmHg)
bp_readings = pd.Series([120, 135, 128, 142, 118], index=['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])

print("Blood Pressure Series:")
print(bp_readings)
print("\\nWednesday BP reading:", bp_readings['Wed'])
`,
        modelSolution: `import pandas as pd\nbp_readings = pd.Series([120, 135, 128, 142, 118], index=['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])\nprint("Blood Pressure Series:")\nprint(bp_readings)\nprint("\\nWednesday BP reading:", bp_readings['Wed'])`,
        hints: [
            "Use standard alias: import pandas as pd",
            "Access labeled elements using brackets: bp_readings['Wed']."
        ],
        explanation: `• pd.Series() creates a labeled 1D array.
• You can access values by index label ('Wed' -> 128).`,
        commonMistakes: [
            {
                mistake: "Confusing Series (1D) and DataFrame (2D)",
                why: "A Series is a single column. A DataFrame is an entire multi-column table.",
                fix: "Use pd.Series for single columns."
            }
        ],
        teachingTip: "Explain that Series is the fundamental building block of Pandas: a DataFrame is simply a collection of Series side-by-side.",
        testCases: [
            {
                name: "Wednesday BP reading is 128",
                type: "custom",
                code: "int(bp_readings['Wed']) == 128 and len(bp_readings) == 5"
            }
        ]
    },

    {
        id: "u4_l02_pandas_df",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Pandas DataFrame structures",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "2. The Pharmacy DataFrame",
        summary: "Construct a 2D tabular DataFrame representing medicine stock.",
        learn: `A <strong>DataFrame</strong> is a 2-dimensional table with labeled rows and columns—exactly like an Excel spreadsheet or an SQL database table.
You can create a DataFrame from a Python dictionary where each key is a column name:
<code>df = pd.DataFrame({'Drug': ['A', 'B'], 'Price': [10, 20]})</code>`,
        exampleCode: `import pandas as pd\ndata = {'Drug': ['Paracetamol', 'Aspirin'], 'Strength_mg': [500, 75]}\ndf = pd.DataFrame(data)\nprint(df)`,
        scaffoldCode: `import pandas as pd

pharmacy_data = {
    "Drug_Name": ["Paracetamol", "Amoxicillin", "Cetirizine"],
    "Strength_mg": [500, 250, 10],
    "Stock": [120, 45, 210]
}

# Create a DataFrame from the dictionary
inventory_df = pd.DataFrame(_____________)

print(inventory_df)
`,
        modelSolution: `import pandas as pd\npharmacy_data = {\n    "Drug_Name": ["Paracetamol", "Amoxicillin", "Cetirizine"],\n    "Strength_mg": [500, 250, 10],\n    "Stock": [120, 45, 210]\n}\ninventory_df = pd.DataFrame(pharmacy_data)\nprint(inventory_df)`,
        hints: [
            "Pass pharmacy_data into pd.DataFrame().",
            "Write: inventory_df = pd.DataFrame(pharmacy_data)"
        ],
        explanation: `• pd.DataFrame() aligns the dictionary lists into columns.
• Rows are automatically indexed (0, 1, 2).`,
        commonMistakes: [
            {
                mistake: "Mismatched list lengths in dictionary",
                why: "All column lists must have the exact same number of items!",
                fix: "Ensure all column lists have 3 items."
            }
        ],
        teachingTip: "Explain rows vs columns: each row is an individual drug batch; each column is an attribute (name, strength, stock).",
        testCases: [
            {
                name: "inventory_df has 3 rows and 3 columns",
                type: "custom",
                code: "inventory_df.shape == (3, 3) and 'Drug_Name' in inventory_df.columns"
            }
        ]
    },

    {
        id: "u4_l03_read_csv",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Reading CSV and Excel files",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "3. Loading Datasets with pd.read_csv()",
        summary: "Load pharmaceutical inventory datasets directly into a Pandas DataFrame.",
        learn: `In real pharmaceutical data science, you rarely type data by hand. Instead, you load datasets using <code>pd.read_csv('filename.csv')</code>.
Pandas automatically parses column headers, rows, integers, floats, and strings in a single line of code!`,
        exampleCode: `import pandas as pd\ndf = pd.read_csv('medicine_inventory.csv')\nprint(df.shape)  # (10, 7)`,
        scaffoldCode: `import pandas as pd

# Load 'medicine_inventory.csv' using pd.read_csv()
df_inventory = pd.read_csv('______________________')

# Display the shape (rows, columns)
print("Dataset Shape (Rows, Columns):", df_inventory.shape)
print("Column Names:", list(df_inventory.columns))
`,
        modelSolution: `import pandas as pd\ndf_inventory = pd.read_csv('medicine_inventory.csv')\nprint("Dataset Shape (Rows, Columns):", df_inventory.shape)\nprint("Column Names:", list(df_inventory.columns))`,
        hints: [
            "Pass 'medicine_inventory.csv' as string to pd.read_csv().",
            "Code: df_inventory = pd.read_csv('medicine_inventory.csv')"
        ],
        explanation: `• pd.read_csv() reads the file from disk or virtual storage.
• .shape returns (10, 7): 10 drug batches and 7 columns.`,
        commonMistakes: [
            {
                mistake: "Misspelling the filename: 'medicine_inventry.csv'",
                why: "Causes a FileNotFoundError.",
                fix: "Check exact spelling: 'medicine_inventory.csv'."
            }
        ],
        teachingTip: "Remind students: all data in our lab is synthetic for educational learning. Always respect patient privacy (HIPAA/DISHA) in real clinical data.",
        testCases: [
            {
                name: "Loaded 10 rows from medicine_inventory.csv",
                type: "custom",
                code: "df_inventory.shape[0] == 10 and 'Stock_Quantity' in df_inventory.columns"
            }
        ]
    },

    {
        id: "u4_l04_head_tail",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Inspecting datasets using functions such as head(), tail()",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "4. Quick Inspection with head() and tail()",
        summary: "Inspect the top and bottom rows of large clinical datasets.",
        learn: `When dealing with clinical trials with 10,000 patients, printing the whole dataset would freeze the computer.
• <code>df.head(n)</code> displays the first <code>n</code> rows (default 5).
• <code>df.tail(n)</code> displays the last <code>n</code> rows (default 5).
This is the first command every data analyst runs to verify data loaded properly.`,
        exampleCode: `import pandas as pd\ndf = pd.read_csv('medicine_inventory.csv')\nprint(df.head(3))  # First 3 drugs\nprint(df.tail(2))  # Last 2 drugs`,
        scaffoldCode: `import pandas as pd
df = pd.read_csv('medicine_inventory.csv')

# Get the first 3 rows using .head(3)
top_3_drugs = df.head(_)

# Get the last 2 rows using .tail(2)
bottom_2_drugs = df.tail(_)

print("Top 3 Drugs:")
print(top_3_drugs[['Drug_Name', 'Strength_mg', 'Stock_Quantity']])

print("\\nBottom 2 Drugs:")
print(bottom_2_drugs[['Drug_Name', 'Stock_Quantity']])
`,
        modelSolution: `import pandas as pd\ndf = pd.read_csv('medicine_inventory.csv')\ntop_3_drugs = df.head(3)\nbottom_2_drugs = df.tail(2)\nprint("Top 3 Drugs:")\nprint(top_3_drugs[['Drug_Name', 'Strength_mg', 'Stock_Quantity']])\nprint("\\nBottom 2 Drugs:")\nprint(bottom_2_drugs[['Drug_Name', 'Stock_Quantity']])`,
        hints: [
            "Use df.head(3) for top 3 rows.",
            "Use df.tail(2) for bottom 2 rows."
        ],
        explanation: `• df.head(3) returns rows 0, 1, 2.
• df.tail(2) returns rows 8 and 9.`,
        commonMistakes: [
            {
                mistake: "Forgetting parentheses: df.head",
                why: "df.head is the function object, not its result. You must call it with ().",
                fix: "Always call functions with (): df.head()."
            }
        ],
        teachingTip: "Explain real-world clinical workflow: always inspect head() to check if column headers and units match the trial protocol.",
        testCases: [
            {
                name: "top_3_drugs has 3 rows",
                type: "custom",
                code: "len(top_3_drugs) == 3 and len(bottom_2_drugs) == 2"
            }
        ]
    },

    {
        id: "u4_l05_info_describe",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Inspecting datasets using functions such as info(), and describe ()",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "5. Dataset Summary: info() & describe()",
        summary: "Analyze data types, missing counts, and summary statistics of tablet quality control.",
        learn: `Pandas provides two diagnostic tools for data health:
1. <code>df.info()</code>: lists column names, non-null counts (detecting missing data), and memory usage.
2. <code>df.describe()</code>: calculates summary statistics (count, mean, standard deviation, min, 25%, 50% median, 75%, max) for all numerical columns.`,
        exampleCode: `import pandas as pd\ndf = pd.read_csv('tablet_batch_qc.csv')\nprint(df.describe())`,
        scaffoldCode: `import pandas as pd

# Load tablet batch quality control data
qc_df = pd.read_csv('tablet_batch_qc.csv')

# Generate statistical summary using .describe()
qc_summary = qc_df.describe()

print("Quality Control Statistical Summary:")
print(qc_summary[['Weight_mg', 'Hardness_kp', 'Friability_pct']])
`,
        modelSolution: `import pandas as pd\nqc_df = pd.read_csv('tablet_batch_qc.csv')\nqc_summary = qc_df.describe()\nprint("Quality Control Statistical Summary:")\nprint(qc_summary[['Weight_mg', 'Hardness_kp', 'Friability_pct']])`,
        hints: [
            "Call qc_df.describe().",
            "This computes count, mean, std, min, and quartiles automatically."
        ],
        explanation: `• qc_df.describe() summarizes the 20 tablet weights.
• Notice how you can instantly see the mean weight (~500 mg) and min/max boundaries.`,
        commonMistakes: [
            {
                mistake: "Expecting describe() to work on text columns",
                why: "By default, describe() only summarizes numeric columns.",
                fix: "Check your numeric columns (weight, hardness)."
            }
        ],
        teachingTip: "Connect to Pharmaceutical Quality Assurance: mean and standard deviation are required for USP Content Uniformity testing.",
        testCases: [
            {
                name: "qc_summary contains 'Weight_mg'",
                type: "custom",
                code: "'Weight_mg' in qc_summary.columns and 'mean' in qc_summary.index"
            }
        ]
    },

    {
        id: "u4_l06_select_columns",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Filtering and selecting data based on conditions",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Easy",
        title: "6. Selecting Specific Clinical Columns",
        summary: "Extract single Series and multi-column DataFrame subsets from adverse event data.",
        learn: `When a dataset contains 50 columns, you usually only care about 2 or 3:
• <strong>Single Column</strong>: <code>df['Drug_Name']</code> (returns a Series)
• <strong>Multiple Columns</strong>: <code>df[['Drug_Name', 'Severity', 'Adverse_Reaction']]</code> (note the double brackets <code>[[...]]</code>; returns a DataFrame).`,
        exampleCode: `import pandas as pd\ndf = pd.read_csv('adr_reports.csv')\nreactions = df[['Drug_Name', 'Adverse_Reaction']]\nprint(reactions.head())`,
        scaffoldCode: `import pandas as pd

# Load adverse drug reaction (ADR) reports
adr_df = pd.read_csv('adr_reports.csv')

# Select only Drug_Name, Adverse_Reaction, and Severity
adr_subset = adr_df[['Drug_Name', 'Adverse_Reaction', '________']]

print(adr_subset.head(4))
`,
        modelSolution: `import pandas as pd\nadr_df = pd.read_csv('adr_reports.csv')\nadr_subset = adr_df[['Drug_Name', 'Adverse_Reaction', 'Severity']]\nprint(adr_subset.head(4))`,
        hints: [
            "Fill in 'Severity' inside the column list.",
            "Use double square brackets: adr_df[['col1', 'col2', 'col3']]."
        ],
        explanation: `• Double brackets [['...']] tell Pandas to create a DataFrame with those 3 specific columns.
• The resulting sub-table contains only the relevant pharmacovigilance details.`,
        commonMistakes: [
            {
                mistake: "Using single brackets for multiple columns: df['Col1', 'Col2']",
                why: "Single brackets expect one column. For multiple columns, pass a Python list: df[['Col1', 'Col2']].",
                fix: "Always use double brackets for multiple columns."
            }
        ],
        teachingTip: "Explain pharmacovigilance: ADR monitoring teams extract drug name and reaction severity to report to national drug authorities.",
        testCases: [
            {
                name: "adr_subset has 3 columns",
                type: "custom",
                code: "list(adr_subset.columns) == ['Drug_Name', 'Adverse_Reaction', 'Severity']"
            }
        ]
    },

    {
        id: "u4_l07_filter_condition",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Filtering and selecting data based on conditions",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "7. Clinical Filtering: Locating Severe ADRs",
        summary: "Filter DataFrame rows matching clinical criteria using Boolean indexing.",
        learn: `<strong>Filtering</strong> extracts only the rows that satisfy a condition:
<code>filtered_df = df[df['Column'] == 'Value']</code>
For example, to find all patient records where Adverse Reaction Severity is 'Severe':
<code>severe_cases = adr_df[adr_df['Severity'] == 'Severe']</code>`,
        exampleCode: `import pandas as pd\ndf = pd.read_csv('medicine_inventory.csv')\nlow_stock = df[df['Stock_Quantity'] < 50]\nprint(low_stock[['Drug_Name', 'Stock_Quantity']])`,
        scaffoldCode: `import pandas as pd
adr_df = pd.read_csv('adr_reports.csv')

# Filter rows where Severity is "Severe"
severe_cases = adr_df[adr_df['Severity'] == '______']

print("Severe Adverse Drug Reaction Reports:")
print(severe_cases[['Report_ID', 'Drug_Name', 'Adverse_Reaction', 'Outcome']])
print("\\nTotal Severe Cases:", len(severe_cases))
`,
        modelSolution: `import pandas as pd\nadr_df = pd.read_csv('adr_reports.csv')\nsevere_cases = adr_df[adr_df['Severity'] == 'Severe']\nprint("Severe Adverse Drug Reaction Reports:")\nprint(severe_cases[['Report_ID', 'Drug_Name', 'Adverse_Reaction', 'Outcome']])\nprint("\\nTotal Severe Cases:", len(severe_cases))`,
        hints: [
            "Check for 'Severe' exactly (case-sensitive).",
            "Code: severe_cases = adr_df[adr_df['Severity'] == 'Severe']"
        ],
        explanation: `• adr_df['Severity'] == 'Severe' creates a boolean Series of True/False for each row.
• Passing this into adr_df[...] selects only the True rows (3 severe cases: Ciprofloxacin tendonitis, Aspirin GI bleed, Atorvastatin liver enzymes).`,
        commonMistakes: [
            {
                mistake: "Using single = inside the condition: df['Severity'] = 'Severe'",
                why: "Single = overwrites the column! Double == checks equality.",
                fix: "Use == for comparison."
            }
        ],
        teachingTip: "Point out the clinical significance: severe ADRs trigger immediate regulatory review and black box warnings.",
        testCases: [
            {
                name: "Found exactly 3 severe cases",
                type: "custom",
                code: "len(severe_cases) == 3 and all(severe_cases['Severity'] == 'Severe')"
            }
        ]
    },

    {
        id: "u4_l08_missing_values",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Data cleaning techniques and handling missing values",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "8. Data Cleaning: Handling Missing Clinical Values",
        summary: "Detect and impute missing clinical values with .isna() and .fillna().",
        learn: `In hospital data, patients sometimes miss blood tests, creating <strong>missing values</strong> (represented as <code>NaN</code>: Not a Number).
Pandas provides tools to handle them:
• <code>df.isna().sum()</code>: counts missing values in each column.
• <code>df.dropna()</code>: removes rows with missing values.
• <code>df.fillna(value)</code>: replaces missing values with a default or mean.`,
        exampleCode: `import pandas as pd\ns = pd.Series([10, None, 30])\ns_clean = s.fillna(0)  # [10, 0, 30]`,
        scaffoldCode: `import pandas as pd
import numpy as np

# Sample patient trial dataset with missing blood pressure readings (np.nan)
trial_data = pd.DataFrame({
    "Patient": ["P1", "P2", "P3", "P4"],
    "Drug": ["Drug_A", "Drug_A", "Drug_B", "Drug_B"],
    "BP_Drop": [12.5, np.nan, 14.0, np.nan]
})

print("Before Cleaning (has missing values):")
print(trial_data)

# Impute missing BP_Drop values with 0.0 using .fillna()
cleaned_trial = trial_data.fillna(0.0)

print("\\nAfter Cleaning (missing values replaced with 0.0):")
print(cleaned_trial)
`,
        modelSolution: `import pandas as pd\nimport numpy as np\ntrial_data = pd.DataFrame({\n    "Patient": ["P1", "P2", "P3", "P4"],\n    "Drug": ["Drug_A", "Drug_A", "Drug_B", "Drug_B"],\n    "BP_Drop": [12.5, np.nan, 14.0, np.nan]\n})\ncleaned_trial = trial_data.fillna(0.0)\nprint("Before Cleaning:")\nprint(trial_data)\nprint("\\nAfter Cleaning:")\nprint(cleaned_trial)`,
        hints: [
            "Use trial_data.fillna(0.0).",
            "This replaces all NaN values with 0.0."
        ],
        explanation: `• Missing data causes calculations to fail if unhandled.
• fillna(0.0) replaces all missing readings with 0.0, completing the dataset.`,
        commonMistakes: [
            {
                mistake: "Calling trial_data.fillna() without an argument",
                why: "fillna needs to know what value to insert!",
                fix: "Provide a replacement value: fillna(0.0) or fillna(mean)."
            }
        ],
        teachingTip: "Explain clinical trial protocols: intention-to-treat analysis requires handling patient dropouts responsibly.",
        testCases: [
            {
                name: "No missing values in cleaned_trial",
                type: "custom",
                code: "cleaned_trial['BP_Drop'].isna().sum() == 0"
            }
        ]
    },

    {
        id: "u4_l09_groupby",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Grouping data and performing aggregation functions",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "9. Pharmacovigilance Grouping with .groupby()",
        summary: "Group adverse reactions by drug to calculate incident frequencies.",
        learn: `In pharmacovigilance, you need to count how many adverse reactions each drug caused.
The <code>.groupby('Column')</code> function splits the table into groups, and an aggregation function (like <code>.size()</code> or <code>.mean()</code>) summarizes each group:
<code>adr_counts = adr_df.groupby('Drug_Name').size()</code>`,
        exampleCode: `import pandas as pd\ndf = pd.read_csv('adr_reports.csv')\ncounts = df.groupby('Drug_Name').size()\nprint(counts)`,
        scaffoldCode: `import pandas as pd
adr_df = pd.read_csv('adr_reports.csv')

# Group by 'Drug_Name' and count total reports for each drug
reports_per_drug = adr_df.groupby('________').size()

print("ADR Reports per Drug:")
print(reports_per_drug)
`,
        modelSolution: `import pandas as pd\nadr_df = pd.read_csv('adr_reports.csv')\nreports_per_drug = adr_df.groupby('Drug_Name').size()\nprint("ADR Reports per Drug:")\nprint(reports_per_drug)`,
        hints: [
            "Group by 'Drug_Name'.",
            "Code: reports_per_drug = adr_df.groupby('Drug_Name').size()"
        ],
        explanation: `• .groupby('Drug_Name') aggregates all entries for Amoxicillin, Atorvastatin, Ibuprofen, etc.
• .size() counts the number of occurrences per drug.`,
        commonMistakes: [
            {
                mistake: "Calling groupby without an aggregation function",
                why: "groupby() alone returns a DataFrameGroupBy object, not a printable summary.",
                fix: "Always chain an aggregation: .size(), .mean(), .sum()."
            }
        ],
        teachingTip: "Ask students: 'If Drug X has 50 ADR reports and Drug Y has 2, which drug requires priority investigation by the safety committee?'",
        testCases: [
            {
                name: "reports_per_drug contains Amoxicillin",
                type: "custom",
                code: "'Amoxicillin' in reports_per_drug.index and reports_per_drug['Amoxicillin'] == 2"
            }
        ]
    },

    {
        id: "u4_l10_aggregation",
        unitId: "unit-4",
        unitNumber: "UNIT IV",
        syllabusTopic: "Grouping data and performing aggregation functions",
        co: "CO4",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "10. Multi-Batch QC Aggregation",
        summary: "Calculate mean tablet weight and standard deviation across manufacturing batches.",
        learn: `Pharmaceutical companies manufacture tablets in multiple batches (Batch A, Batch B, Batch C). Using <code>groupby()</code> with <code>.agg()</code> allows you to compute the mean and standard deviation for each batch simultaneously:
<code>df.groupby('Batch')['Weight_mg'].agg(['mean', 'std'])</code>`,
        exampleCode: `import pandas as pd\ndf = pd.read_csv('tablet_batch_qc.csv')\nstats = df.groupby('Batch')['Weight_mg'].agg(['mean', 'std'])\nprint(stats)`,
        scaffoldCode: `import pandas as pd
qc_df = pd.read_csv('tablet_batch_qc.csv')

# Group by 'Batch' and compute the mean and standard deviation of 'Weight_mg'
batch_stats = qc_df.groupby('Batch')['Weight_mg'].agg(['mean', 'std'])

print("Batch Quality Comparison:")
print(batch_stats.round(2))
`,
        modelSolution: `import pandas as pd\nqc_df = pd.read_csv('tablet_batch_qc.csv')\nbatch_stats = qc_df.groupby('Batch')['Weight_mg'].agg(['mean', 'std'])\nprint("Batch Quality Comparison:")\nprint(batch_stats.round(2))`,
        hints: [
            "Use .groupby('Batch')['Weight_mg'].agg(['mean', 'std']).",
            "This computes both statistics for each batch."
        ],
        explanation: `• Groups 20 tablets into Batch_A, Batch_B, and Batch_C.
• Calculates average weight and variance for each, enabling instant batch-to-batch consistency comparison.`,
        commonMistakes: [
            {
                mistake: "Passing function names without quotes: agg([mean, std])",
                why: "Pass them as strings: ['mean', 'std'].",
                fix: "Use quotes inside the list: ['mean', 'std']."
            }
        ],
        teachingTip: "Explain Process Analytical Technology (PAT): batch consistency is mandated by GMP regulations worldwide.",
        testCases: [
            {
                name: "batch_stats has 3 batches",
                type: "custom",
                code: "len(batch_stats) == 3 and 'mean' in batch_stats.columns"
            }
        ]
    },

    // ========================================================================
    // UNIT V: DATA VISUALIZATION WITH MATPLOTLIB (8 Activities)
    // 6 Hours (CT: 5 hrs, SL: 1 hr) | CO5 | Bloom: BL4 – Analyze
    // ========================================================================
    {
        id: "u5_v01_line_plot",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "Introduction to Matplotlib, creating line plots",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "1. Dissolution Profile: Line Plot",
        summary: "Plot in-vitro drug release percentage over time using plt.plot().",
        hasPlot: true,
        learn: `<strong>Matplotlib</strong> is the standard plotting library in Python.
A <strong>line plot</strong> connects data points with straight line segments. It is ideal for showing continuous processes over time, such as in-vitro drug dissolution testing (sampling at 5, 10, 15, 20, 30, 45, 60 minutes).
We import Matplotlib using: <code>import matplotlib.pyplot as plt</code>
and plot with <code>plt.plot(x, y)</code>.`,
        exampleCode: `import matplotlib.pyplot as plt\ntime = [0, 1, 2, 3]\nconc = [0, 5, 8, 10]\nplt.plot(time, conc)\nplt.show()`,
        scaffoldCode: `import matplotlib.pyplot as plt

time_min = [5, 10, 15, 20, 30, 45, 60]
drug_release_pct = [18.5, 36.2, 55.0, 72.4, 88.1, 95.6, 98.2]

# Create a line plot with circle markers ('-o')
plt.figure(figsize=(6, 3.5))
plt.plot(time_min, drug_release_pct, marker='o', color='#0284c7', linewidth=2)

plt.xlabel("Time (minutes)")
plt.ylabel("% Drug Dissolved")
plt.title("Tablet In-Vitro Dissolution Profile")
plt.grid(True, linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()
`,
        modelSolution: `import matplotlib.pyplot as plt\ntime_min = [5, 10, 15, 20, 30, 45, 60]\ndrug_release_pct = [18.5, 36.2, 55.0, 72.4, 88.1, 95.6, 98.2]\nplt.figure(figsize=(6, 3.5))\nplt.plot(time_min, drug_release_pct, marker='o', color='#0284c7', linewidth=2)\nplt.xlabel("Time (minutes)")\nplt.ylabel("% Drug Dissolved")\nplt.title("Tablet In-Vitro Dissolution Profile")\nplt.grid(True, linestyle=':', alpha=0.6)\nplt.tight_layout()\nplt.show()`,
        plotCode: `import matplotlib.pyplot as plt
time_min = [5, 10, 15, 20, 30, 45, 60]
drug_release_pct = [18.5, 36.2, 55.0, 72.4, 88.1, 95.6, 98.2]
plt.figure(figsize=(6, 3.5))
plt.plot(time_min, drug_release_pct, marker='o', color='#0284c7', linewidth=2)
plt.xlabel("Time (minutes)")
plt.ylabel("% Drug Dissolved")
plt.title("Tablet In-Vitro Dissolution Profile")
plt.grid(True, linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()`,
        scientificInterpretation: "The graph shows a standard immediate-release dissolution profile. Over 85% of the active drug dissolves within 30 minutes, satisfying the Indian Pharmacopoeia standard for conventional tablets.",
        hints: [
            "Use plt.plot(time_min, drug_release_pct).",
            "Click 'Plot Curve' to visualize the Matplotlib figure."
        ],
        explanation: `• plt.plot(x, y) renders Time on the X-axis and Dissolution % on the Y-axis.
• marker='o' highlights each discrete sampling point.`,
        commonMistakes: [
            {
                mistake: "Swapping X and Y axes: plt.plot(y, x)",
                why: "In scientific graphs, Time (independent variable) always belongs on the X-axis.",
                fix: "Always place time first: plt.plot(time, concentration)."
            }
        ],
        teachingTip: "Connect to BP107P (General Pharmacy practicals): relate this curve to USP Type II (paddle) dissolution apparatus results.",
        testCases: [
            {
                name: "Executed line plot script successfully",
                type: "stdout_check",
                description: "Matplotlib canvas generated"
            }
        ]
    },

    {
        id: "u5_v02_labels_titles",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "Labeling axes, titles, and legends",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner",
        title: "2. Professional Plot Formatting: Labels & Units",
        summary: "Format scientific graphs with standard pharmaceutical units and titles.",
        hasPlot: true,
        learn: `In scientific publications and regulatory submissions, an unlabeled graph is completely worthless. A professional graph must have:
1. <code>plt.title('...')</code>: A clear descriptive title.
2. <code>plt.xlabel('...')</code>: X-axis parameter with units (e.g. <em>Time (hours)</em>).
3. <code>plt.ylabel('...')</code>: Y-axis parameter with units (e.g. <em>Plasma Concentration (mg/L)</em>).
4. <code>plt.grid(True)</code>: A background grid for easy coordinate reading.`,
        exampleCode: `plt.plot([0, 1, 2], [10, 5, 2.5])\nplt.xlabel("Time (hr)")\nplt.ylabel("Conc (mg/L)")\nplt.title("Drug Decay")`,
        scaffoldCode: `import matplotlib.pyplot as plt

times_hr = [0, 1, 2, 4, 6, 8]
plasma_conc = [20.0, 15.2, 11.5, 6.6, 3.8, 2.1]

plt.figure(figsize=(6, 3.5))
plt.plot(times_hr, plasma_conc, marker='s', color='#0d9488', linewidth=2)

# Add X-axis label with units
plt.xlabel("Time (hours)")

# Add Y-axis label with units
plt.ylabel("Plasma Drug Concentration (mg/L)")

# Add Title
plt.title("First-Order Elimination Curve")

plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()
`,
        modelSolution: `import matplotlib.pyplot as plt\ntimes_hr = [0, 1, 2, 4, 6, 8]\nplasma_conc = [20.0, 15.2, 11.5, 6.6, 3.8, 2.1]\nplt.figure(figsize=(6, 3.5))\nplt.plot(times_hr, plasma_conc, marker='s', color='#0d9488', linewidth=2)\nplt.xlabel("Time (hours)")\nplt.ylabel("Plasma Drug Concentration (mg/L)")\nplt.title("First-Order Elimination Curve")\nplt.grid(True, linestyle='--', alpha=0.5)\nplt.tight_layout()\nplt.show()`,
        plotCode: `import matplotlib.pyplot as plt
times_hr = [0, 1, 2, 4, 6, 8]
plasma_conc = [20.0, 15.2, 11.5, 6.6, 3.8, 2.1]
plt.figure(figsize=(6, 3.5))
plt.plot(times_hr, plasma_conc, marker='s', color='#0d9488', linewidth=2)
plt.xlabel("Time (hours)")
plt.ylabel("Plasma Drug Concentration (mg/L)")
plt.title("First-Order Elimination Curve")
plt.grid(True, linestyle='--', alpha=0.5)
plt.tight_layout()
plt.show()`,
        scientificInterpretation: "The curve demonstrates first-order exponential decay. Concentration decreases from 20 mg/L to ~2 mg/L over 8 hours as the liver and kidneys clear the medication.",
        hints: [
            "Always include units in parentheses in label strings.",
            "Use plt.xlabel and plt.ylabel."
        ],
        explanation: `• Clear labels and units make the graph self-explanatory for clinical rounds.`,
        commonMistakes: [
            {
                mistake: "Omitting measurement units (e.g. labeling 'Time' instead of 'Time (hours)')",
                why: "In clinical dosing, confusing hours with minutes could cause a fatal overdose.",
                fix: "Always state units explicitly: 'Time (hours)'."
            }
        ],
        teachingTip: "Grade deduction rule: emphasize to students that in university exams, unlabeled axes lose 50% of the graph marks.",
        testCases: [
            {
                name: "Formatted plot executed",
                type: "stdout_check",
                description: "Labeled plot rendered"
            }
        ]
    },

    {
        id: "u5_v03_oral_vs_iv",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "Create plots and visualize pharmaceutical datasets - concentration-time curves for oral and IV administration",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "3. Oral vs IV Administration Curves",
        summary: "Overlay Oral and IV concentration-time profiles on a single graph with legends.",
        hasPlot: true,
        learn: `In Biopharmaceutics, route of administration drastically alters pharmacokinetics:
• <strong>Intravenous (IV) Bolus</strong>: 100% bioavailable immediately. Concentration peaks instantly at $t=0$ and then declines exponentially.
• <strong>Oral Administration</strong>: Drug must dissolve and be absorbed through the GI tract. Concentration starts at 0, rises to a peak ($C_{max}$) at time $T_{max}$, and then declines.
We overlay two lines using two <code>plt.plot()</code> calls with <code>label='...'</code> and display the legend with <code>plt.legend()</code>.`,
        exampleCode: `plt.plot(t, iv, label='IV Injection')\nplt.plot(t, oral, label='Oral Tablet')\nplt.legend()`,
        scaffoldCode: `import pandas as pd
import matplotlib.pyplot as plt

# Load synthetic oral vs IV pharmacokinetic study dataset
df = pd.read_csv('oral_vs_iv_pk_study.csv')

plt.figure(figsize=(6.5, 3.8))

# Plot IV profile in red
plt.plot(df['Time_hr'], df['IV_Conc_mgL'], color='#ef4444', linewidth=2.5, label='IV Bolus (Instant Availability)')

# Plot Oral profile in blue
plt.plot(df['Time_hr'], df['Oral_Conc_mgL'], color='#0284c7', linewidth=2.5, linestyle='--', label='Oral Tablet (Absorption Phase)')

plt.xlabel('Time (hours)')
plt.ylabel('Plasma Concentration (mg/L)')
plt.title('Comparative PK: Oral vs Intravenous Administration')
plt.legend(loc='upper right')
plt.grid(True, linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()
`,
        modelSolution: `import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.read_csv('oral_vs_iv_pk_study.csv')\nplt.figure(figsize=(6.5, 3.8))\nplt.plot(df['Time_hr'], df['IV_Conc_mgL'], color='#ef4444', linewidth=2.5, label='IV Bolus (Instant Availability)')\nplt.plot(df['Time_hr'], df['Oral_Conc_mgL'], color='#0284c7', linewidth=2.5, linestyle='--', label='Oral Tablet (Absorption Phase)')\nplt.xlabel('Time (hours)')\nplt.ylabel('Plasma Concentration (mg/L)')\nplt.title('Comparative PK: Oral vs Intravenous Administration')\nplt.legend(loc='upper right')\nplt.grid(True, linestyle=':', alpha=0.6)\nplt.tight_layout()\nplt.show()`,
        plotCode: `import pandas as pd
import matplotlib.pyplot as plt
df = pd.read_csv('oral_vs_iv_pk_study.csv')
plt.figure(figsize=(6.5, 3.8))
plt.plot(df['Time_hr'], df['IV_Conc_mgL'], color='#ef4444', linewidth=2.5, label='IV Bolus (Instant Availability)')
plt.plot(df['Time_hr'], df['Oral_Conc_mgL'], color='#0284c7', linewidth=2.5, linestyle='--', label='Oral Tablet (Absorption Phase)')
plt.xlabel('Time (hours)')
plt.ylabel('Plasma Concentration (mg/L)')
plt.title('Comparative PK: Oral vs Intravenous Administration')
plt.legend(loc='upper right')
plt.grid(True, linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()`,
        scientificInterpretation: "Notice two key differences: (1) IV concentration is highest at t=0 (25 mg/L), whereas Oral starts at 0 mg/L. (2) Oral concentration reaches its peak (Cmax = 17.2 mg/L) at Tmax = 2 hours, illustrating the drug absorption phase.",
        hints: [
            "Use two separate plt.plot() calls with label='...'.",
            "Call plt.legend() so the labels appear in the legend box."
        ],
        explanation: `• Comparing IV and Oral profiles is the gold standard method for calculating absolute oral bioavailability (F = AUC_oral / AUC_iv).`,
        commonMistakes: [
            {
                mistake: "Forgetting plt.legend()",
                why: "Even if you provide label='...', the legend box won't show unless you call plt.legend().",
                fix: "Always call plt.legend()."
            }
        ],
        teachingTip: "Ask students: 'Why does the oral curve not start at 25 mg/L like the IV curve?' (First-pass hepatic metabolism and gradual gastrointestinal absorption).",
        testCases: [
            {
                name: "Rendered comparative PK curve",
                type: "stdout_check",
                description: "Comparative plot generated"
            }
        ]
    },

    {
        id: "u5_v04_scientific_interpretation",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "Scientific interpretation of plots",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "4. Scientific Interpretation: Identifying Cmax & Tmax",
        summary: "Extract clinical pharmacokinetic parameters (Cmax, Tmax) programmatically from curve data.",
        learn: `In pharmaceutical data analysis, creating a graph is only the first step. The true job of a pharmacist is <strong>Scientific Interpretation</strong>:
• <strong>Cmax</strong>: The maximum observed plasma drug concentration (Peak).
• <strong>Tmax</strong>: The time at which Cmax occurs.
Using Pandas on the oral study dataset:
<code>c_max = df['Oral_Conc_mgL'].max()</code>
<code>t_max = df.loc[df['Oral_Conc_mgL'].idxmax(), 'Time_hr']</code>`,
        exampleCode: `c_max = df['Conc'].max()\nt_max = df.loc[df['Conc'].idxmax(), 'Time']`,
        scaffoldCode: `import pandas as pd

df = pd.read_csv('oral_vs_iv_pk_study.csv')

# Find the maximum oral concentration (Cmax)
c_max = df['Oral_Conc_mgL'].max()

# Find the time point (Tmax) corresponding to Cmax using idxmax()
max_row_index = df['Oral_Conc_mgL'].idxmax()
t_max = df.loc[max_row_index, 'Time_hr']

print("=== Clinical PK Interpretation ===")
print("Peak Concentration (Cmax):", c_max, "mg/L")
print("Time to Peak (Tmax):", t_max, "hours")
`,
        modelSolution: `import pandas as pd\ndf = pd.read_csv('oral_vs_iv_pk_study.csv')\nc_max = df['Oral_Conc_mgL'].max()\nmax_row_index = df['Oral_Conc_mgL'].idxmax()\nt_max = df.loc[max_row_index, 'Time_hr']\nprint("=== Clinical PK Interpretation ===")\nprint("Peak Concentration (Cmax):", c_max, "mg/L")\nprint("Time to Peak (Tmax):", t_max, "hours")`,
        hints: [
            ".max() gives the highest concentration.",
            ".idxmax() gives the row index where the maximum occurs."
        ],
        explanation: `• Cmax = 17.2 mg/L.
• Tmax = 2.0 hours.
• This tells the clinician that therapeutic pain relief or antibiotic action reaches maximum strength 2 hours after swallowing the tablet.`,
        commonMistakes: [
            {
                mistake: "Confusing Cmax and Tmax",
                why: "Cmax is measured in concentration units (mg/L). Tmax is measured in time units (hours).",
                fix: "Keep track of your units."
            }
        ],
        teachingTip: "Ask students: 'If a patient needs urgent headache relief in 15 minutes, is a tablet with Tmax = 2 hours the best choice?' (No, an IV injection or fast-dissolving sublingual form is needed).",
        testCases: [
            {
                name: "c_max is 17.2 and t_max is 2.0",
                type: "custom",
                code: "c_max == 17.2 and t_max == 2.0"
            }
        ]
    },

    {
        id: "u5_v05_bar_adr",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "ADR reporting rates across drugs",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "5. ADR Reporting Rates: Bar Chart",
        summary: "Plot adverse drug reaction reporting frequencies across therapeutic classes.",
        hasPlot: true,
        learn: `A <strong>bar chart</strong> uses rectangular bars to compare discrete categorical groups.
In hospital pharmacovigilance reports, bar charts show which drug classes (e.g. Antibiotics, NSAIDs, Cardiovascular) cause the highest number of reported side effects.
We use <code>plt.bar(categories, values)</code>.`,
        exampleCode: `drugs = ['Drug A', 'Drug B']\nreports = [15, 3]\nplt.bar(drugs, reports)\nplt.show()`,
        scaffoldCode: `import pandas as pd
import matplotlib.pyplot as plt

adr_df = pd.read_csv('adr_reports.csv')

# Count reports by Therapeutic_Class
class_counts = adr_df['Therapeutic_Class'].value_counts()

plt.figure(figsize=(6.5, 3.5))
plt.bar(class_counts.index, class_counts.values, color='#6366f1', edgecolor='#4338ca')

plt.xlabel('Therapeutic Drug Class')
plt.ylabel('Number of Reported ADRs')
plt.title('Adverse Drug Reactions by Therapeutic Class')
plt.xticks(rotation=15)
plt.grid(axis='y', linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()
`,
        modelSolution: `import pandas as pd\nimport matplotlib.pyplot as plt\nadr_df = pd.read_csv('adr_reports.csv')\nclass_counts = adr_df['Therapeutic_Class'].value_counts()\nplt.figure(figsize=(6.5, 3.5))\nplt.bar(class_counts.index, class_counts.values, color='#6366f1', edgecolor='#4338ca')\nplt.xlabel('Therapeutic Drug Class')\nplt.ylabel('Number of Reported ADRs')\nplt.title('Adverse Drug Reactions by Therapeutic Class')\nplt.xticks(rotation=15)\nplt.grid(axis='y', linestyle=':', alpha=0.6)\nplt.tight_layout()\nplt.show()`,
        plotCode: `import pandas as pd
import matplotlib.pyplot as plt
adr_df = pd.read_csv('adr_reports.csv')
class_counts = adr_df['Therapeutic_Class'].value_counts()
plt.figure(figsize=(6.5, 3.5))
plt.bar(class_counts.index, class_counts.values, color='#6366f1', edgecolor='#4338ca')
plt.xlabel('Therapeutic Drug Class')
plt.ylabel('Number of Reported ADRs')
plt.title('Adverse Drug Reactions by Therapeutic Class')
plt.xticks(rotation=15)
plt.grid(axis='y', linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()`,
        scientificInterpretation: "Antibiotics and NSAIDs account for the highest frequency of adverse drug event reports in this hospital audit, highlighting the need for clinician vigilance regarding hypersensitivity rashes and gastric bleeding.",
        hints: [
            "value_counts() computes the count for each category.",
            "plt.bar() plots categorical bars."
        ],
        explanation: `• class_counts.index contains the class names ('Antibiotic', 'NSAID', etc.).
• class_counts.values contains the incident counts.`,
        commonMistakes: [
            {
                mistake: "Long category labels overlapping on X-axis",
                why: "Categories with long text run into each other.",
                fix: "Use plt.xticks(rotation=15) to tilt text."
            }
        ],
        teachingTip: "Connect to Pharmacy Practice (Pharmacovigilance Programme of India - PvPI).",
        testCases: [
            {
                name: "Generated ADR bar chart",
                type: "stdout_check",
                description: "Bar chart rendered"
            }
        ]
    },

    {
        id: "u5_v06_hist_weight",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "Creating histograms",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "6. Tablet Weight Uniformity: Histogram",
        summary: "Plot the frequency distribution of tablet weights to evaluate Gaussian bell curves.",
        hasPlot: true,
        learn: `A <strong>histogram</strong> groups continuous numerical measurements into 'bins' and counts how many observations fall into each range.
In industrial pharmacy tablet compression, tablet weights naturally follow a normal (Gaussian) bell curve centered around the target weight (e.g. 500 mg).
We use <code>plt.hist(data, bins=5)</code>.`,
        exampleCode: `plt.hist(weights, bins=5, color='teal')\nplt.show()`,
        scaffoldCode: `import pandas as pd
import matplotlib.pyplot as plt

qc_df = pd.read_csv('tablet_batch_qc.csv')

plt.figure(figsize=(6.5, 3.5))
# Plot histogram of Weight_mg with 6 bins
plt.hist(qc_df['Weight_mg'], bins=6, color='#0d9488', edgecolor='#134e4a', alpha=0.8)

# Add target weight vertical line at 500 mg
plt.axvline(x=500.0, color='#ef4444', linestyle='--', linewidth=2, label='Target Weight (500 mg)')

plt.xlabel('Tablet Weight (mg)')
plt.ylabel('Frequency (Count of Tablets)')
plt.title('Distribution of Tablet Weights (Uniformity Check)')
plt.legend()
plt.grid(axis='y', linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()
`,
        modelSolution: `import pandas as pd\nimport matplotlib.pyplot as plt\nqc_df = pd.read_csv('tablet_batch_qc.csv')\nplt.figure(figsize=(6.5, 3.5))\nplt.hist(qc_df['Weight_mg'], bins=6, color='#0d9488', edgecolor='#134e4a', alpha=0.8)\nplt.axvline(x=500.0, color='#ef4444', linestyle='--', linewidth=2, label='Target Weight (500 mg)')\nplt.xlabel('Tablet Weight (mg)')\nplt.ylabel('Frequency (Count of Tablets)')\nplt.title('Distribution of Tablet Weights (Uniformity Check)')\nplt.legend()\nplt.grid(axis='y', linestyle=':', alpha=0.6)\nplt.tight_layout()\nplt.show()`,
        plotCode: `import pandas as pd
import matplotlib.pyplot as plt
qc_df = pd.read_csv('tablet_batch_qc.csv')
plt.figure(figsize=(6.5, 3.5))
plt.hist(qc_df['Weight_mg'], bins=6, color='#0d9488', edgecolor='#134e4a', alpha=0.8)
plt.axvline(x=500.0, color='#ef4444', linestyle='--', linewidth=2, label='Target Weight (500 mg)')
plt.xlabel('Tablet Weight (mg)')
plt.ylabel('Frequency (Count of Tablets)')
plt.title('Distribution of Tablet Weights (Uniformity Check)')
plt.legend()
plt.grid(axis='y', linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()`,
        scientificInterpretation: "The histogram reveals a central peak around 500 mg, with slight spread between 485 mg and 515 mg across different trial batches. A tight, narrow bell curve signifies superior die-filling precision during tablet compression.",
        hints: [
            "Use plt.hist(qc_df['Weight_mg'], bins=6).",
            "plt.axvline() draws a vertical reference line at target 500 mg."
        ],
        explanation: `• Histograms illustrate process variability in manufacturing.
• The red dashed line shows how closely the distribution centers on the label claim.`,
        commonMistakes: [
            {
                mistake: "Confusing bar chart and histogram",
                why: "Bar charts plot discrete categories. Histograms plot continuous numerical intervals.",
                fix: "Use plt.hist() for continuous numeric data."
            }
        ],
        teachingTip: "Connect to Pharmaceutical Quality Control: explain why die filling variation and granulation flow properties determine tablet weight spread.",
        testCases: [
            {
                name: "Rendered tablet weight histogram",
                type: "stdout_check",
                description: "Histogram rendered"
            }
        ]
    },

    {
        id: "u5_v07_scatter_bp",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "Creating scatter plots",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "7. Dose-Response Correlation: Scatter Plot",
        summary: "Plot Drug Dose vs Blood Pressure reduction to explore pharmacodynamic correlation.",
        hasPlot: true,
        learn: `A <strong>scatter plot</strong> displays individual observations as dots on Cartesian coordinates.
In Pharmacology, scatter plots demonstrate <strong>Dose-Response relationships</strong>: does a higher dose of an antihypertensive drug correlate with a greater reduction in systolic blood pressure?
We use <code>plt.scatter(x_dose, y_response)</code>.`,
        exampleCode: `plt.scatter(doses, bp_drops)\nplt.show()`,
        scaffoldCode: `import matplotlib.pyplot as plt

# Antihypertensive clinical trial data (Dose in mg vs SBP Reduction in mmHg)
doses_mg = [5, 5, 10, 10, 20, 20, 40, 40]
sbp_reduction_mmhg = [4.2, 5.1, 8.5, 9.2, 14.0, 15.5, 19.8, 21.0]

plt.figure(figsize=(6.5, 3.5))
plt.scatter(doses_mg, sbp_reduction_mmhg, color='#0284c7', s=80, edgecolor='#0369a1', alpha=0.8)

plt.xlabel('Amlodipine Daily Dose (mg)')
plt.ylabel('Systolic Blood Pressure Reduction (mmHg)')
plt.title('Dose-Response Pharmacodynamic Correlation')
plt.grid(True, linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()
`,
        modelSolution: `import matplotlib.pyplot as plt\ndoses_mg = [5, 5, 10, 10, 20, 20, 40, 40]\nsbp_reduction_mmhg = [4.2, 5.1, 8.5, 9.2, 14.0, 15.5, 19.8, 21.0]\nplt.figure(figsize=(6.5, 3.5))\nplt.scatter(doses_mg, sbp_reduction_mmhg, color='#0284c7', s=80, edgecolor='#0369a1', alpha=0.8)\nplt.xlabel('Amlodipine Daily Dose (mg)')\nplt.ylabel('Systolic Blood Pressure Reduction (mmHg)')\nplt.title('Dose-Response Pharmacodynamic Correlation')\nplt.grid(True, linestyle=':', alpha=0.6)\nplt.tight_layout()\nplt.show()`,
        plotCode: `import matplotlib.pyplot as plt
doses_mg = [5, 5, 10, 10, 20, 20, 40, 40]
sbp_reduction_mmhg = [4.2, 5.1, 8.5, 9.2, 14.0, 15.5, 19.8, 21.0]
plt.figure(figsize=(6.5, 3.5))
plt.scatter(doses_mg, sbp_reduction_mmhg, color='#0284c7', s=80, edgecolor='#0369a1', alpha=0.8)
plt.xlabel('Amlodipine Daily Dose (mg)')
plt.ylabel('Systolic Blood Pressure Reduction (mmHg)')
plt.title('Dose-Response Pharmacodynamic Correlation')
plt.grid(True, linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()`,
        scientificInterpretation: "The scatter plot reveals a strong positive pharmacodynamic correlation: as the amlodipine dose increases from 5 mg to 40 mg, systolic BP reduction increases linearly from ~4.5 mmHg to ~20.5 mmHg.",
        hints: [
            "Use plt.scatter(x, y).",
            "s=80 sets the dot diameter."
        ],
        explanation: `• Scatter plots reveal trends, outliers, and dose proportionality.`,
        commonMistakes: [
            {
                mistake: "Using plt.plot instead of plt.scatter",
                why: "plt.plot connects points with lines. When points are not time-ordered, this creates a confusing zig-zag.",
                fix: "Use plt.scatter for independent pair measurements."
            }
        ],
        teachingTip: "Connect to Pharmacology: introduce Emax and ED50 concepts through dose-response graphs.",
        testCases: [
            {
                name: "Generated scatter plot",
                type: "stdout_check",
                description: "Scatter plot rendered"
            }
        ]
    },

    {
        id: "u5_v08_box_batch",
        unitId: "unit-5",
        unitNumber: "UNIT V",
        syllabusTopic: "Creating box plots",
        co: "CO5",
        bloom: "BL4 – Analyze",
        difficulty: "Beginner+",
        title: "8. Quality Comparison Across Batches: Box Plot",
        summary: "Compare tablet weight medians, interquartile spread, and outliers using box plots.",
        hasPlot: true,
        learn: `A <strong>box plot</strong> (box-and-whisker plot) displays a 5-number statistical summary:
1. Minimum (whisker)
2. First Quartile (Q1 - 25th percentile)
3. Median (line inside the box - 50th percentile)
4. Third Quartile (Q3 - 75th percentile)
5. Maximum (whisker)
Outliers are plotted as individual points beyond the whiskers. In industrial manufacturing, box plots instantly highlight which batch failed uniformity of weight standards.`,
        exampleCode: `plt.boxplot([batch1, batch2])\nplt.show()`,
        scaffoldCode: `import pandas as pd
import matplotlib.pyplot as plt

qc_df = pd.read_csv('tablet_batch_qc.csv')

# Group data by batch into separate lists
batch_a = qc_df[qc_df['Batch'] == 'Batch_A']['Weight_mg']
batch_b = qc_df[qc_df['Batch'] == 'Batch_B']['Weight_mg']
batch_c = qc_df[qc_df['Batch'] == 'Batch_C']['Weight_mg']

plt.figure(figsize=(6.5, 3.8))
# Create boxplot comparing the 3 batches
plt.boxplot([batch_a, batch_b, batch_c], labels=['Batch A', 'Batch B', 'Batch C'], patch_artist=True)

plt.ylabel('Tablet Weight (mg)')
plt.title('Comparison of Tablet Weights Across Manufacturing Batches')
plt.grid(axis='y', linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()
`,
        modelSolution: `import pandas as pd\nimport matplotlib.pyplot as plt\nqc_df = pd.read_csv('tablet_batch_qc.csv')\nbatch_a = qc_df[qc_df['Batch'] == 'Batch_A']['Weight_mg']\nbatch_b = qc_df[qc_df['Batch'] == 'Batch_B']['Weight_mg']\nbatch_c = qc_df[qc_df['Batch'] == 'Batch_C']['Weight_mg']\nplt.figure(figsize=(6.5, 3.8))\nplt.boxplot([batch_a, batch_b, batch_c], labels=['Batch A', 'Batch B', 'Batch C'], patch_artist=True)\nplt.ylabel('Tablet Weight (mg)')\nplt.title('Comparison of Tablet Weights Across Manufacturing Batches')\nplt.grid(axis='y', linestyle=':', alpha=0.6)\nplt.tight_layout()\nplt.show()`,
        plotCode: `import pandas as pd
import matplotlib.pyplot as plt
qc_df = pd.read_csv('tablet_batch_qc.csv')
batch_a = qc_df[qc_df['Batch'] == 'Batch_A']['Weight_mg']
batch_b = qc_df[qc_df['Batch'] == 'Batch_B']['Weight_mg']
batch_c = qc_df[qc_df['Batch'] == 'Batch_C']['Weight_mg']
plt.figure(figsize=(6.5, 3.8))
plt.boxplot([batch_a, batch_b, batch_c], labels=['Batch A', 'Batch B', 'Batch C'], patch_artist=True)
plt.ylabel('Tablet Weight (mg)')
plt.title('Comparison of Tablet Weights Across Manufacturing Batches')
plt.grid(axis='y', linestyle=':', alpha=0.6)
plt.tight_layout()
plt.show()`,
        scientificInterpretation: "Batch A is tightly clustered near target 500 mg. Batch B displays an upward deviation (median ~510 mg), while Batch C is underweight (median ~487 mg), signaling calibration drift in the rotary compression tooling.",
        hints: [
            "Pass a list of arrays to plt.boxplot: [batch_a, batch_b, batch_c].",
            "Use labels=['Batch A', 'Batch B', 'Batch C']."
        ],
        explanation: `• Box plots summarize location, spread, and skewness for multiple groups on a single screen.`,
        commonMistakes: [
            {
                mistake: "Passing unseparated DataFrame",
                why: "plt.boxplot needs groups separated into lists or columns.",
                fix: "Extract batches into individual arrays."
            }
        ],
        teachingTip: "Connect to Industrial Pharmacy / Six Sigma: box plots provide visual process capability verification.",
        testCases: [
            {
                name: "Rendered comparative box plot",
                type: "stdout_check",
                description: "Box plot generated"
            }
        ]
    }
];

// ============================================================================
// UNIT QUIZZES (Syllabus Aligned MCQs)
// ============================================================================
const BP101T_QUIZZES = {
    "unit-1": [
        {
            question: "Which Python function is used to display text on the computer screen?",
            options: ["input()", "print()", "write()", "output()"],
            correctIndex: 1,
            explanation: "print() is the built-in output function in Python."
        },
        {
            question: "What data type would best represent a tablet strength of 500.5 mg?",
            options: ["int", "float", "str", "bool"],
            correctIndex: 1,
            explanation: "Numbers with decimal fractions are stored as floats."
        },
        {
            question: "Which operator calculates the remainder of an integer division (e.g. 38 % 10)?",
            options: ["/", "//", "%", "**"],
            correctIndex: 2,
            explanation: "% (modulo) calculates the remainder, useful for loose capsules."
        }
    ],
    "unit-2": [
        {
            question: "What symbol must be placed at the end of an if or else header line?",
            options: ["; (semicolon)", ": (colon)", ". (period)", "# (hash)"],
            correctIndex: 1,
            explanation: "In Python, header statements (if, elif, else, for, while, def) end with a colon (:)."
        },
        {
            question: "Which loop is best when you know in advance you need to repeat for 7 days?",
            options: ["while loop", "for loop with range(1, 8)", "infinite loop", "if-else chain"],
            correctIndex: 1,
            explanation: "for loops with range() are ideal for known, finite sequences of numbers."
        },
        {
            question: "What keyword sends a calculated result back from a Python function to the caller?",
            options: ["send", "output", "return", "print"],
            correctIndex: 2,
            explanation: "return delivers the output of a function."
        }
    ],
    "unit-3": [
        {
            question: "What is the index of the FIRST element in a Python list?",
            options: ["1", "0", "-1", "first"],
            correctIndex: 1,
            explanation: "Python uses 0-based indexing: the first element is at index 0."
        },
        {
            question: "How do tuples differ from lists in Python?",
            options: [
                "Tuples can only store numbers",
                "Tuples are immutable (cannot be modified after creation)",
                "Tuples do not support indexing",
                "Tuples are slower than lists"
            ],
            correctIndex: 1,
            explanation: "Tuples are immutable, making them ideal for fixed pharmacopoeial standards."
        },
        {
            question: "Which library provides fast N-dimensional numerical arrays for scientific computing?",
            options: ["csv", "math", "NumPy", "re"],
            correctIndex: 2,
            explanation: "NumPy is the core scientific computing library in Python."
        }
    ],
    "unit-4": [
        {
            question: "What is the primary 2-dimensional tabular data structure in Pandas?",
            options: ["Series", "DataFrame", "Matrix", "Dictionary"],
            correctIndex: 1,
            explanation: "A DataFrame represents a 2D table with labeled rows and columns."
        },
        {
            question: "Which Pandas method displays the first 5 rows of a dataset?",
            options: ["df.top()", "df.first()", "df.head()", "df.show()"],
            correctIndex: 2,
            explanation: "df.head() displays the first 5 rows."
        },
        {
            question: "Which method generates statistical summaries (mean, std, min, max) for numeric columns?",
            options: ["df.info()", "df.describe()", "df.summary()", "df.stats()"],
            correctIndex: 1,
            explanation: "df.describe() computes summary statistics automatically."
        }
    ],
    "unit-5": [
        {
            question: "Which Matplotlib plot type is best for showing drug dissolution percentage over time?",
            options: ["Histogram", "Line plot", "Pie chart", "Box plot"],
            correctIndex: 1,
            explanation: "Line plots connect continuous sequential measurements over time."
        },
        {
            question: "In an oral pharmacokinetic profile, what does Cmax represent?",
            options: [
                "The minimum effective concentration",
                "The maximum observed plasma drug concentration",
                "The time required to eliminate half the dose",
                "The volume of distribution"
            ],
            correctIndex: 1,
            explanation: "Cmax is the peak plasma drug concentration achieved after administration."
        },
        {
            question: "Which chart type displays the 5-number summary (median, quartiles, outliers) across batches?",
            options: ["Line plot", "Scatter plot", "Box plot (boxplot)", "Bar chart"],
            correctIndex: 2,
            explanation: "Box plots summarize medians, spreads, and outliers across groups."
        }
    ]
};

// ============================================================================
// PRESERVED ADVANCED PHARMACEUTICAL PROBLEMS (15 Problems)
// Moved to Enrichment / Upper-Semester Track
// ============================================================================
const ADVANCED_PHARM_PROBLEMS = [
    {
        id: "adv_pediatric_dose",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Pediatric Dose Multi-Rule Calculator",
        difficulty: "Advanced",
        category: "Posology & Clinical Calculations",
        summary: "Calculate child doses with Young's, Clark's, and Dilling's rules with exception handling.",
        clinicalContext: "In clinical pharmacy, pediatric dosing requires multi-rule verification (age vs weight in lbs).",
        formulaHtml: "<code>Child Dose = (Age / (Age + 12)) * Adult Dose</code>",
        starterCode: "def calculate_pediatric_dose(adult_dose_mg, age_years=None, weight_kg=None, rule='young'):\n    pass",
        modelSolution: "def calculate_pediatric_dose(adult_dose_mg, age_years=None, weight_kg=None, rule='young'):\n    if rule == 'young':\n        return round((age_years / (age_years + 12)) * adult_dose_mg, 2)\n    elif rule == 'clark':\n        return round(((weight_kg * 2.20462) / 150) * adult_dose_mg, 2)",
        hints: ["Check rule parameter and apply corresponding formula."],
        testCases: [
            { name: "Young's Rule 6yr 500mg", call: "calculate_pediatric_dose(500, age_years=6, rule='young')", expected: 166.67 }
        ]
    },
    {
        id: "adv_cockcroft_gault",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Cockcroft-Gault Creatinine Clearance (CrCl)",
        difficulty: "Advanced",
        category: "Posology & Clinical Calculations",
        summary: "Estimate renal function for dose adjustments in renal impairment.",
        clinicalContext: "CrCl calculation with 0.85 female gender factor for renal dosage adjustments.",
        formulaHtml: "<code>CrCl = [(140 - Age) * Weight] / [72 * SCr] (* 0.85 if Female)</code>",
        starterCode: "def cockcroft_gault(age, weight_kg, serum_creatinine, gender='male'):\n    pass",
        modelSolution: "def cockcroft_gault(age, weight_kg, serum_creatinine, gender='male'):\n    cr = ((140 - age) * weight_kg) / (72 * serum_creatinine)\n    if gender.lower() == 'female': cr *= 0.85\n    return round(cr, 2)",
        hints: ["Multiply by 0.85 if female."],
        testCases: [
            { name: "60yo male 70kg SCr 1.2", call: "cockcroft_gault(60, 70, 1.2, 'male')", expected: 64.81 }
        ]
    },
    {
        id: "adv_alligation",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Alligation Alternate Method",
        difficulty: "Advanced",
        category: "Posology & Clinical Calculations",
        summary: "Proportional solution compounding calculation for stock dilution.",
        clinicalContext: "Blending two alcohol or dextrose concentrations to compound a target strength.",
        formulaHtml: "<code>Parts High = Target - Low; Parts Low = High - Target</code>",
        starterCode: "def alligation_mix(high_conc, low_conc, target_conc, target_volume_ml):\n    pass",
        modelSolution: "def alligation_mix(high_conc, low_conc, target_conc, target_volume_ml):\n    parts_h = target_conc - low_conc\n    parts_l = high_conc - target_conc\n    tot = parts_h + parts_l\n    return (round((parts_h/tot)*target_volume_ml, 2), round((parts_l/tot)*target_volume_ml, 2))",
        hints: ["Use cross subtraction."],
        testCases: [
            { name: "40% from 70% and 20%", call: "alligation_mix(70, 20, 40, 500)", expected: [200.0, 300.0] }
        ]
    },
    {
        id: "adv_iv_drip",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "IV Infusion Drip Rate",
        difficulty: "Intermediate",
        category: "Posology & Clinical Calculations",
        summary: "Calculate gravity intravenous infusion rate in drops per minute.",
        clinicalContext: "Gravity infusion calibration using tubing drop factors (10, 15, 20, 60 gtt/mL).",
        formulaHtml: "<code>Drops/min = (Volume_mL * Drop_Factor) / (Hours * 60)</code>",
        starterCode: "def calculate_drip_rate(volume_ml, hours, drop_factor=20):\n    pass",
        modelSolution: "def calculate_drip_rate(volume_ml, hours, drop_factor=20):\n    return round((volume_ml * drop_factor) / (hours * 60))",
        hints: ["Convert hours to minutes."],
        testCases: [
            { name: "1000mL in 8hr drop factor 15", call: "calculate_drip_rate(1000, 8, drop_factor=15)", expected: 31 }
        ]
    },
    {
        id: "adv_pk_ke_thalf",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "PK: Elimination Rate (ke) & Half-Life (t1/2)",
        difficulty: "Advanced",
        category: "Pharmacokinetics & Biopharmaceutics",
        summary: "Compute first-order elimination rate constant and biological half-life.",
        clinicalContext: "Therapeutic drug monitoring parameter estimation from blood plasma samples.",
        formulaHtml: "<code>ke = [ln(C1) - ln(C2)] / (t2 - t1); t1/2 = 0.693 / ke</code>",
        starterCode: "import math\ndef calculate_pk_parameters(time1, conc1, time2, conc2):\n    pass",
        modelSolution: "import math\ndef calculate_pk_parameters(time1, conc1, time2, conc2):\n    ke = (math.log(conc1) - math.log(conc2)) / (time2 - time1)\n    return {'ke': round(ke, 4), 'half_life': round(math.log(2)/ke, 2)}",
        hints: ["Use math.log for natural log."],
        testCases: [
            { name: "10mg/L at 1h, 2.5mg/L at 5h", call: "calculate_pk_parameters(1, 10, 5, 2.5)", expected: {"ke": 0.3466, "half_life": 2.0} }
        ]
    },
    {
        id: "adv_iv_bolus_curve",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "PK: One-Compartment IV Bolus Decay",
        difficulty: "Advanced",
        category: "Pharmacokinetics & Biopharmaceutics",
        hasPlot: true,
        summary: "Calculate and plot plasma concentration decay for an IV bolus injection.",
        clinicalContext: "One-compartment open model plasma decay C(t) = C0 * exp(-ke * t).",
        formulaHtml: "<code>C(t) = (Dose / Vd) * exp(-ke * t)</code>",
        starterCode: "import math\ndef iv_bolus_concentration(dose_mg, vd_liters, ke_per_hr, time_points_hr):\n    pass",
        modelSolution: "import math\ndef iv_bolus_concentration(dose_mg, vd_liters, ke_per_hr, time_points_hr):\n    c0 = dose_mg / vd_liters\n    return [round(c0 * math.exp(-ke_per_hr * t), 3) for t in time_points_hr]",
        hints: ["Exponential decay with math.exp."],
        testCases: [
            { name: "500mg Vd 25L ke 0.1", call: "iv_bolus_concentration(500, 25, 0.1, [0, 2, 4, 8])", expected: [20.0, 16.375, 13.406, 8.987] }
        ]
    },
    {
        id: "adv_auc_trapezoidal",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "PK: Trapezoidal Area Under Curve (AUC)",
        difficulty: "Advanced",
        category: "Pharmacokinetics & Biopharmaceutics",
        summary: "Calculate total drug exposure AUC using linear trapezoidal numerical integration.",
        clinicalContext: "Bioequivalence assessment comparing generic vs innovator AUC.",
        formulaHtml: "<code>AUC = sum([(C1 + C2)/2] * (t2 - t1))</code>",
        starterCode: "def calculate_auc_trapezoidal(time_points, concentrations):\n    pass",
        modelSolution: "def calculate_auc_trapezoidal(time_points, concentrations):\n    auc = 0.0\n    for i in range(len(time_points)-1):\n        auc += ((concentrations[i] + concentrations[i+1])/2) * (time_points[i+1] - time_points[i])\n    return round(auc, 2)",
        hints: ["Sum individual trapezoids."],
        testCases: [
            { name: "5-point PK profile", call: "calculate_auc_trapezoidal([0, 1, 2, 4, 8], [20.0, 15.0, 10.0, 5.0, 1.25])", expected: 57.5 }
        ]
    },
    {
        id: "adv_steady_state",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "PK: Steady-State Concentration (Css,avg)",
        difficulty: "Intermediate",
        category: "Pharmacokinetics & Biopharmaceutics",
        summary: "Calculate average steady-state concentration under repeated dosing.",
        clinicalContext: "Dosing regimen planning: Css,avg = (F * Dose) / (Cl * tau).",
        formulaHtml: "<code>Css,avg = (F * Dose) / (Cl * tau)</code>",
        starterCode: "def steady_state_concentration(dose_mg, bioavailability, clearance_l_per_hr, dosing_interval_hr):\n    pass",
        modelSolution: "def steady_state_concentration(dose_mg, bioavailability, clearance_l_per_hr, dosing_interval_hr):\n    return round((bioavailability * dose_mg) / (clearance_l_per_hr * dosing_interval_hr), 2)",
        hints: ["Numerator is F * Dose, denominator is Cl * tau."],
        testCases: [
            { name: "250mg F 0.8 Cl 2.5 tau 8", call: "steady_state_concentration(250, 0.8, 2.5, 8)", expected: 10.0 }
        ]
    },
    {
        id: "adv_henderson_hasselbalch",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Physical Pharmacy: Henderson-Hasselbalch % Ionization",
        difficulty: "Advanced",
        category: "Physical Pharmacy & Formulation",
        summary: "Calculate drug ionization percentage at stomach vs intestinal pH.",
        clinicalContext: "pH-partition hypothesis predicting gastrointestinal passive drug absorption.",
        formulaHtml: "<code>% Ionized (Acid) = [10^(pH - pKa) / (1 + 10^(pH - pKa))] * 100</code>",
        starterCode: "def calculate_drug_ionization(pka, ph, drug_type='acid'):\n    pass",
        modelSolution: "def calculate_drug_ionization(pka, ph, drug_type='acid'):\n    if drug_type == 'acid':\n        r = 10 ** (ph - pka)\n    else:\n        r = 10 ** (pka - ph)\n    return round((r / (1 + r)) * 100, 2)",
        hints: ["For acid exponent is ph - pka, for base pka - ph."],
        testCases: [
            { name: "Aspirin pKa 3.5 at pH 1.5", call: "calculate_drug_ionization(3.5, 1.5, 'acid')", expected: 0.99 }
        ]
    },
    {
        id: "adv_beer_lambert",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Spectrophotometry: Calibration Line Regression",
        difficulty: "Advanced",
        category: "Physical Pharmacy & Formulation",
        hasPlot: true,
        summary: "Compute least-squares slope and intercept to assay unknown tablet concentration.",
        clinicalContext: "UV-Visible spectrophotometric assay calibration under Beer-Lambert law.",
        formulaHtml: "<code>y = mx + c; c_unknown = (A_sample - c) / m</code>",
        starterCode: "def uv_assay_unknown_concentration(std_concs, std_absorbances, sample_absorbance):\n    pass",
        modelSolution: "def uv_assay_unknown_concentration(std_concs, std_absorbances, sample_absorbance):\n    n = len(std_concs)\n    sx = sum(std_concs); sy = sum(std_absorbances)\n    sxy = sum(x*y for x, y in zip(std_concs, std_absorbances))\n    sx2 = sum(x**2 for x in std_concs)\n    m = (n*sxy - sx*sy) / (n*sx2 - sx**2)\n    c = (sy - m*sx) / n\n    return round((sample_absorbance - c) / m, 3)",
        hints: ["Linear least squares formulas."],
        testCases: [
            { name: "Standard linear curve", call: "uv_assay_unknown_concentration([2,4,6,8,10], [0.15,0.3,0.45,0.6,0.75], 0.525)", expected: 7.0 }
        ]
    },
    {
        id: "adv_surfactant_hlb",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Pharmaceutics: Required HLB Emulsion Blends",
        difficulty: "Intermediate",
        category: "Physical Pharmacy & Formulation",
        summary: "Calculate weights of Span and Tween surfactants needed to match required HLB.",
        clinicalContext: "Emulsion formulation technology matching oil phase required HLB.",
        formulaHtml: "<code>f_A = (Target - HLB_B) / (HLB_A - HLB_B)</code>",
        starterCode: "def calculate_surfactant_blend(hlb_a, hlb_b, target_hlb, total_weight_g):\n    pass",
        modelSolution: "def calculate_surfactant_blend(hlb_a, hlb_b, target_hlb, total_weight_g):\n    fa = (target_hlb - hlb_b) / (hlb_a - hlb_b)\n    return (round(fa * total_weight_g, 2), round((1 - fa) * total_weight_g, 2))",
        hints: ["Algebraic weight fraction balance."],
        testCases: [
            { name: "Span 80 & Tween 80 target 10", call: "calculate_surfactant_blend(4.3, 15.0, 10.0, 100)", expected: [46.73, 53.27] }
        ]
    },
    {
        id: "adv_tablet_variation",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Quality Control: 20-Tablet Weight Variation (IP/USP)",
        difficulty: "Advanced",
        category: "Quality Control & Pharmacopoeial Testing",
        summary: "Official Pharmacopoeial 20-tablet sample percentage limit test.",
        clinicalContext: "Indian Pharmacopoeia uniformity of weight limit testing on 20 individual tablets.",
        formulaHtml: "<code>Limit: >250mg: 5%; 84-250mg: 7.5%; <=84mg: 10%</code>",
        starterCode: "def tablet_weight_variation_test(weights_mg):\n    pass",
        modelSolution: "def tablet_weight_variation_test(weights_mg):\n    avg = sum(weights_mg) / len(weights_mg)\n    lim = 5.0 if avg > 250 else (7.5 if avg > 84 else 10.0)\n    devs = sum(1 for w in weights_mg if abs(w - avg)/avg * 100 > lim)\n    doubles = sum(1 for w in weights_mg if abs(w - avg)/avg * 100 > 2*lim)\n    return {'average_weight': round(avg, 2), 'passes': (devs <= 2 and doubles == 0)}",
        hints: ["Count tablets deviating past limit."],
        testCases: [
            { name: "300mg tablets within limits", call: "tablet_weight_variation_test([300]*20)", expected: {"average_weight": 300.0, "passes": true} }
        ]
    },
    {
        id: "adv_dissolution_f2",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Quality Control: Dissolution Similarity Factor (f2)",
        difficulty: "Advanced",
        category: "Quality Control & Pharmacopoeial Testing",
        hasPlot: true,
        summary: "Calculate US FDA/ICH f2 similarity factor comparing generic vs innovator curves.",
        clinicalContext: "Bioequivalence in-vitro dissolution profile equivalence testing.",
        formulaHtml: "<code>f2 = 50 * log10([1 + (1/n)sum(R - T)^2]^-0.5 * 100)</code>",
        starterCode: "import math\ndef calculate_similarity_factor_f2(reference_pct, test_pct):\n    pass",
        modelSolution: "import math\ndef calculate_similarity_factor_f2(reference_pct, test_pct):\n    n = len(reference_pct)\n    diff = sum((r - t)**2 for r, t in zip(reference_pct, test_pct)) / n\n    f2 = 50 * math.log10(((1 + diff)**-0.5) * 100)\n    return {'f2': round(f2, 2), 'is_similar': f2 >= 50.0}",
        hints: ["Use math.log10."],
        testCases: [
            { name: "Close profiles f2 > 70", call: "calculate_similarity_factor_f2([15,30,50,75,90], [14,31,48,74,92])", expected: {"f2": 76.54, "is_similar": true} }
        ]
    },
    {
        id: "adv_mol_weight",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Cheminformatics: Molecular Weight Calculator",
        difficulty: "Advanced",
        category: "Medicinal Chemistry & Cheminformatics",
        summary: "Parse chemical formulas using regular expressions and calculate molecular weights.",
        clinicalContext: "Stoichiometric molar mass calculation from molecular formula string.",
        formulaHtml: "<code>C8H9NO2 -> 8*12.011 + 9*1.008 + 14.007 + 2*15.999 = 151.16</code>",
        starterCode: "import re\ndef calculate_molecular_weight(formula_str):\n    pass",
        modelSolution: "import re\nAW = {'H': 1.008, 'C': 12.011, 'N': 14.007, 'O': 15.999, 'S': 32.06, 'Cl': 35.45, 'Na': 22.99}\ndef calculate_molecular_weight(formula_str):\n    toks = re.findall(r'([A-Z][a-z]*)(\\d*)', formula_str)\n    return round(sum(AW[el] * (int(c) if c else 1) for el, c in toks), 2)",
        hints: ["Use re.findall."],
        testCases: [
            { name: "Paracetamol C8H9NO2", call: "calculate_molecular_weight('C8H9NO2')", expected: 151.16 }
        ]
    },
    {
        id: "adv_lipinski",
        unitId: "advanced-track",
        unitNumber: "ENRICHMENT",
        title: "Medicinal Chemistry: Lipinski's Rule of 5",
        difficulty: "Advanced",
        category: "Medicinal Chemistry & Cheminformatics",
        summary: "Evaluate small molecule drug candidates for oral bioavailability.",
        clinicalContext: "Christopher Lipinski's Rule of 5: MW <= 500, LogP <= 5, HBD <= 5, HBA <= 10.",
        formulaHtml: "<code>Passes if violations <= 1</code>",
        starterCode: "def evaluate_lipinski_rule(mw, logp, hbd, hba):\n    pass",
        modelSolution: "def evaluate_lipinski_rule(mw, logp, hbd, hba):\n    v = []\n    if mw > 500: v.append('MW > 500')\n    if logp > 5: v.append('LogP > 5')\n    if hbd > 5: v.append('HBD > 5')\n    if hba > 10: v.append('HBA > 10')\n    return {'violations_count': len(v), 'passes_rule': len(v) <= 1, 'violations': v}",
        hints: ["Count violations."],
        testCases: [
            { name: "Paracetamol complies", call: "evaluate_lipinski_rule(151.16, 0.46, 2, 2)", expected: {"violations_count": 0, "passes_rule": true, "violations": []} }
        ]
    }
];

if (typeof module !== "undefined") {
    module.exports = { BP101T_LESSONS, BP101T_QUIZZES, ADVANCED_PHARM_PROBLEMS };
}
