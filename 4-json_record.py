import json
from pathlib import Path

FILE = Path("students.json")


def save_records(records):
    with FILE.open("w", encoding="utf-8") as f:
        json.dump(records, f, indent=4)


def load_records():
    if not FILE.exists():
        return []

    try:
        with FILE.open("r", encoding="utf-8") as f:
            data = json.load(f)

        if not isinstance(data, list):
            raise ValueError("The JSON file must contain a list")

        return data

    except (json.JSONDecodeError, OSError, ValueError) as error:
        print("Could not load records:", error)
        return []


sample_records = [
    {"id": 201, "name": "Meera", "marks": 85},
    {"id": 202, "name": "Arjun", "marks": 79}
]

save_records(sample_records)

loaded_records = load_records()
print(loaded_records)
