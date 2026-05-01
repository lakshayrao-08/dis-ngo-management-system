import sys

def calculate_co2(food_type, weight_kg):
    # Simple logic: 1kg of food waste ≈ 2.5kg of CO2
    co2_saved = weight_kg * 2.5
    return co2_saved

if __name__ == "__main__":
    # Java can call this script and pass arguments
    weight = float(sys.argv[1])
    print(calculate_co2("general", weight))