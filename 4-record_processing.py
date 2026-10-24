records = [
    {"id": 101, "name": "Asha", "marks": 88},
    {"id": 102, "name": "Rahul", "marks": 74},
    {"id": 103, "name": "Neha", "marks": 91},
]


def search_record(key):
    key = str(key).strip().lower()

    return [
        r for r in records
        if str(r["id"]).lower() == key
        or r["name"].lower() == key
    ]


by_name = sorted(records, key=lambda r: r["name"].lower())

by_marks = sorted(
    records,
    key=lambda r: r["marks"],
    reverse=True
)

print("Search:", search_record("asha"))
print("Sorted by name:", by_name)
print("Highest marks first:", by_marks)
