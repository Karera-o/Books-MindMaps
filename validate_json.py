#!/usr/bin/env python3
import json

print("Validating web/book_list.json...")

try:
    with open("web/book_list.json", "r") as f:
        data = json.load(f)
    
    print(f"SUCCESS: Valid JSON with {len(data)} books")
    print(f"First book: {data[0]}")
    print(f"Categories: {set(book['category'] for book in data)}")
except json.JSONDecodeError as e:
    print(f"INVALID JSON: {e}")
except Exception as e:
    print(f"ERROR: {e}")