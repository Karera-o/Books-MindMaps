#!/usr/bin/env python3
import os
import json
import glob

print("Creating properly formatted books-data.js...")

books = []

# Find all HTML files in the web directory (excluding index.html)
for root, dirs, files in os.walk("web"):
    for file in files:
        if file.endswith(".html") and file != "index.html":
            html_path = os.path.join(root, file)
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

# Sort books by title
books.sort(key=lambda x: x["title"])

# Write JavaScript data file
with open("web/assets/books-data.js", "w") as f:
    f.write("const books = ")
    json.dump(books, f, indent=2)
    f.write(";")

print(f"Successfully created books-data.js with {len(books)} books.")