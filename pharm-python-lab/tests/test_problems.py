"""
Verification and Test Suite for PharmPy Lab Problems
Ensures reference solutions match all test cases with exact pharmaceutical accuracy.
"""
import math
import re

# -------------------------------------------------------------
# Problem 1: Pediatric Dose Calculation
# -------------------------------------------------------------
def calculate_pediatric_dose(adult_dose_mg, age_years=None, weight_kg=None, rule="young"):
    if rule == "young":
        if age_years is None:
            raise ValueError("Age required for Young's rule")
        return round((age_years / (age_years + 12)) * adult_dose_mg, 2)
    elif rule == "clark":
        if weight_kg is None:
            raise ValueError("Weight required for Clark's rule")
        # Clark's rule: weight in lbs / 150 * adult dose (1 kg = 2.20462 lbs)
        weight_lbs = weight_kg * 2.20462
        return round((weight_lbs / 150) * adult_dose_mg, 2)
    elif rule == "dilling":
        if age_years is None:
            raise ValueError("Age required for Dilling's rule")
        return round((age_years / 20) * adult_dose_mg, 2)
    elif rule == "fried":
        months = age_years * 12
        return round((months / 150) * adult_dose_mg, 2)
    else:
        raise ValueError(f"Unknown rule: {rule}")

# -------------------------------------------------------------
# Problem 2: Cockcroft-Gault Equation (Creatinine Clearance)
# -------------------------------------------------------------
def cockcroft_gault(age, weight_kg, serum_creatinine, gender="male"):
    cr_cl = ((140 - age) * weight_kg) / (72 * serum_creatinine)
    if gender.lower() == "female":
        cr_cl *= 0.85
    return round(cr_cl, 2)

# -------------------------------------------------------------
# Problem 3: Alligation Alternate Method
# -------------------------------------------------------------
def alligation_mix(high_conc, low_conc, target_conc, target_volume_ml):
    if not (low_conc <= target_conc <= high_conc):
        raise ValueError("Target concentration must be between low and high concentrations")
    parts_high = target_conc - low_conc
    parts_low = high_conc - target_conc
    total_parts = parts_high + parts_low
    
    if total_parts == 0:
        return (round(target_volume_ml, 2), 0.0)
        
    vol_high = (parts_high / total_parts) * target_volume_ml
    vol_low = (parts_low / total_parts) * target_volume_ml
    return (round(vol_high, 2), round(vol_low, 2))

# -------------------------------------------------------------
# Problem 4: IV Infusion Drip Rate
# -------------------------------------------------------------
def calculate_drip_rate(volume_ml, hours, drop_factor=20):
    total_minutes = hours * 60
    drip_rate = (volume_ml * drop_factor) / total_minutes
    return round(drip_rate)

# -------------------------------------------------------------
# Problem 5: PK Elimination Rate Constant & Half-life
# -------------------------------------------------------------
def calculate_pk_parameters(time1, conc1, time2, conc2):
    ke = (math.log(conc1) - math.log(conc2)) / (time2 - time1)
    half_life = math.log(2) / ke
    return {
        "ke": round(ke, 4),
        "half_life": round(half_life, 2)
    }

# -------------------------------------------------------------
# Problem 6: One-Compartment IV Bolus Concentrations
# -------------------------------------------------------------
def iv_bolus_concentration(dose_mg, vd_liters, ke_per_hr, time_points_hr):
    c0 = dose_mg / vd_liters
    concs = [round(c0 * math.exp(-ke_per_hr * t), 3) for t in time_points_hr]
    return concs

# -------------------------------------------------------------
# Problem 7: AUC by Trapezoidal Rule
# -------------------------------------------------------------
def calculate_auc_trapezoidal(time_points, concentrations):
    auc = 0.0
    for i in range(len(time_points) - 1):
        dt = time_points[i+1] - time_points[i]
        c_avg = (concentrations[i] + concentrations[i+1]) / 2.0
        auc += c_avg * dt
    return round(auc, 2)

# -------------------------------------------------------------
# Problem 8: Steady-State Average Concentration
# -------------------------------------------------------------
def steady_state_concentration(dose_mg, bioavailability, clearance_l_per_hr, dosing_interval_hr):
    css = (bioavailability * dose_mg) / (clearance_l_per_hr * dosing_interval_hr)
    return round(css, 2)

# -------------------------------------------------------------
# Problem 9: Henderson-Hasselbalch % Ionization
# -------------------------------------------------------------
def calculate_drug_ionization(pka, ph, drug_type="acid"):
    if drug_type.lower() == "acid":
        ratio = 10 ** (ph - pka)
        pct_ionized = (ratio / (1 + ratio)) * 100
    elif drug_type.lower() == "base":
        ratio = 10 ** (pka - ph)
        pct_ionized = (ratio / (1 + ratio)) * 100
    else:
        raise ValueError("drug_type must be 'acid' or 'base'")
    return round(pct_ionized, 2)

# -------------------------------------------------------------
# Problem 10: Beer-Lambert Law Calibration Curve
# -------------------------------------------------------------
def uv_assay_unknown_concentration(std_concs, std_absorbances, sample_absorbance):
    n = len(std_concs)
    sum_x = sum(std_concs)
    sum_y = sum(std_absorbances)
    sum_xy = sum(x * y for x, y in zip(std_concs, std_absorbances))
    sum_x2 = sum(x ** 2 for x in std_concs)
    
    slope = (n * sum_xy - sum_x * sum_y) / (n * sum_x2 - sum_x ** 2)
    intercept = (sum_y - slope * sum_x) / n
    
    unknown_conc = (sample_absorbance - intercept) / slope
    return round(unknown_conc, 3)

# -------------------------------------------------------------
# Problem 11: Surfactant Blend for Required HLB
# -------------------------------------------------------------
def calculate_surfactant_blend(hlb_a, hlb_b, target_hlb, total_weight_g):
    fraction_a = (target_hlb - hlb_b) / (hlb_a - hlb_b)
    fraction_b = 1.0 - fraction_a
    weight_a = fraction_a * total_weight_g
    weight_b = fraction_b * total_weight_g
    return (round(weight_a, 2), round(weight_b, 2))

# -------------------------------------------------------------
# Problem 12: Tablet Weight Variation Test (IP/USP)
# -------------------------------------------------------------
def tablet_weight_variation_test(weights_mg):
    n = len(weights_mg)
    avg_weight = sum(weights_mg) / n
    
    if avg_weight <= 84:
        limit_pct = 10.0
    elif avg_weight <= 250:
        limit_pct = 7.5
    else:
        limit_pct = 5.0
        
    dev_count = 0
    double_dev_count = 0
    
    for w in weights_mg:
        pct_diff = abs(w - avg_weight) / avg_weight * 100
        if pct_diff > limit_pct:
            dev_count += 1
        if pct_diff > (2 * limit_pct):
            double_dev_count += 1
            
    passes = (dev_count <= 2) and (double_dev_count == 0)
    return {
        "average_weight": round(avg_weight, 2),
        "limit_percent": limit_pct,
        "deviating_tablets": dev_count,
        "double_deviating_tablets": double_dev_count,
        "passes": passes
    }

# -------------------------------------------------------------
# Problem 13: Dissolution Similarity Factor (f2)
# -------------------------------------------------------------
def calculate_similarity_factor_f2(reference_pct, test_pct):
    n = len(reference_pct)
    sum_sq_diff = sum((r - t) ** 2 for r, t in zip(reference_pct, test_pct))
    term = 1 + (sum_sq_diff / n)
    f2 = 50 * math.log10((term ** -0.5) * 100)
    return {
        "f2": round(f2, 2),
        "is_similar": f2 >= 50.0
    }

# -------------------------------------------------------------
# Problem 14: Molecular Weight Calculator
# -------------------------------------------------------------
ATOMIC_WEIGHTS = {
    "H": 1.008, "C": 12.011, "N": 14.007, "O": 15.999,
    "S": 32.06, "Cl": 35.45, "Br": 79.904, "F": 18.998,
    "Na": 22.990, "K": 39.098, "P": 30.974
}

def calculate_molecular_weight(formula_str):
    tokens = re.findall(r'([A-Z][a-z]*)(\d*)', formula_str)
    total_mw = 0.0
    for element, count in tokens:
        count = int(count) if count else 1
        if element not in ATOMIC_WEIGHTS:
            raise ValueError(f"Unknown element: {element}")
        total_mw += ATOMIC_WEIGHTS[element] * count
    return round(total_mw, 2)

# -------------------------------------------------------------
# Problem 15: Lipinski's Rule of 5
# -------------------------------------------------------------
def evaluate_lipinski_rule(mw, logp, hbd, hba):
    violations = []
    if mw > 500:
        violations.append(f"MW {mw} > 500 Da")
    if logp > 5:
        violations.append(f"LogP {logp} > 5")
    if hbd > 5:
        violations.append(f"H-Bond Donors {hbd} > 5")
    if hba > 10:
        violations.append(f"H-Bond Acceptors {hba} > 10")
        
    num_violations = len(violations)
    passes = (num_violations <= 1)
    return {
        "violations_count": num_violations,
        "passes_rule": passes,
        "violations": violations
    }

# -------------------------------------------------------------
# Run Unit Tests
# -------------------------------------------------------------
def run_all_tests():
    print("Testing Problem 1: calculate_pediatric_dose...")
    assert calculate_pediatric_dose(500, age_years=6, rule="young") == 166.67
    assert calculate_pediatric_dose(500, weight_kg=20, rule="clark") == 146.97
    
    print("Testing Problem 2: cockcroft_gault...")
    assert cockcroft_gault(60, 70, 1.2, "male") == 64.81
    assert cockcroft_gault(60, 70, 1.2, "female") == 55.09

    print("Testing Problem 3: alligation_mix...")
    assert alligation_mix(70, 20, 40, 500) == (200.0, 300.0)

    print("Testing Problem 4: calculate_drip_rate...")
    assert calculate_drip_rate(1000, 8, drop_factor=15) == 31

    print("Testing Problem 5: calculate_pk_parameters...")
    res_pk = calculate_pk_parameters(1, 10, 5, 2.5)
    assert res_pk["ke"] == 0.3466
    assert res_pk["half_life"] == 2.0

    print("Testing Problem 6: iv_bolus_concentration...")
    concs = iv_bolus_concentration(500, 25, 0.1, [0, 2, 4, 8])
    assert concs[0] == 20.0
    assert concs[1] == 16.375

    print("Testing Problem 7: calculate_auc_trapezoidal...")
    t = [0, 1, 2, 4, 8]
    c = [20.0, 15.0, 10.0, 5.0, 1.25]
    assert calculate_auc_trapezoidal(t, c) == 57.5

    print("Testing Problem 8: steady_state_concentration...")
    assert steady_state_concentration(250, 0.8, 2.5, 8) == 10.0

    print("Testing Problem 9: calculate_drug_ionization...")
    assert calculate_drug_ionization(3.5, 1.5, "acid") == 0.99
    assert calculate_drug_ionization(8.0, 6.0, "base") == 99.01

    print("Testing Problem 10: uv_assay_unknown_concentration...")
    std_x = [2.0, 4.0, 6.0, 8.0, 10.0]
    std_y = [0.15, 0.30, 0.45, 0.60, 0.75]
    assert uv_assay_unknown_concentration(std_x, std_y, 0.525) == 7.0

    print("Testing Problem 11: calculate_surfactant_blend...")
    w_a, w_b = calculate_surfactant_blend(4.3, 15.0, 10.0, 100)
    assert w_a == 46.73 and w_b == 53.27

    print("Testing Problem 12: tablet_weight_variation_test...")
    sample_pass = [300 + (i % 5 - 2) * 2 for i in range(20)]
    res_tab = tablet_weight_variation_test(sample_pass)
    assert res_tab["passes"] is True
    assert res_tab["limit_percent"] == 5.0

    print("Testing Problem 13: calculate_similarity_factor_f2...")
    r = [15.0, 30.0, 50.0, 75.0, 90.0]
    t_test = [14.0, 31.0, 48.0, 74.0, 92.0]
    res_f2 = calculate_similarity_factor_f2(r, t_test)
    assert res_f2["is_similar"] is True
    assert res_f2["f2"] > 70.0

    print("Testing Problem 14: calculate_molecular_weight...")
    assert calculate_molecular_weight("C8H9NO2") == 151.16
    assert calculate_molecular_weight("C9H8O4") == 180.16

    print("Testing Problem 15: evaluate_lipinski_rule...")
    res_lip1 = evaluate_lipinski_rule(558.64, 5.7, 4, 7)
    assert res_lip1["passes_rule"] is False
    assert res_lip1["violations_count"] == 2
    res_lip2 = evaluate_lipinski_rule(151.16, 0.46, 2, 2)
    assert res_lip2["passes_rule"] is True
    assert res_lip2["violations_count"] == 0

    print("\nALL 15 PHARMACEUTICAL REFERENCE IMPLEMENTATIONS PASSED 100% OF TESTS!")

if __name__ == "__main__":
    run_all_tests()
