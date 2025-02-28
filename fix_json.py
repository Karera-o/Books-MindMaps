#!/usr/bin/env python3
import os
import json
import glob

print("Rebuilding book_list.json file...")

books = []

# Find all HTML files in the web directory (excluding index.html)
html_files = []
for root, dirs, files in os.walk("web"):
    for file in files:
        if file.endswith(".html") and file != "index.html":
            html_files.append(os.path.join(root, file))

# Create book objects
for html_path in sorted(html_files):
    rel_path = html_path[4:] if html_path.startswith("web/") else html_path  # Remove "web/" prefix
    filename = os.path.basename(html_path)
    title = os.path.splitext(filename)[0]  # Remove .html extension
    
    # Determine category (directory name or "General")
    directory = os.path.dirname(html_path)
    category = os.path.basename(directory)
    if category == "web":
        category = "General"
    
    # Add book to list
    books.append({
        "title": title,
        "path": rel_path,
        "category": category
    })

# Write to JSON file
with open("web/book_list.json", "w") as f:
    json.dump(books, f, indent=2)

print(f"Successfully created book_list.json with {len(books)} books.")