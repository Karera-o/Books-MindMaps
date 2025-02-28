#!/usr/bin/env python3
import os
import glob

print("Rebuilding book_list.json file...")

# Find all HTML files in the web directory (excluding index.html)
html_files = []
for root, dirs, files in os.walk("web"):
    for file in files:
        if file.endswith(".html") and file != "index.html":
            html_files.append(os.path.join(root, file))

# Start writing the JSON file
with open("web/book_list.json", "w") as f:
    f.write("[\n")
    
    for i, html_path in enumerate(sorted(html_files)):
        rel_path = html_path[4:] if html_path.startswith("web/") else html_path  # Remove "web/" prefix
        filename = os.path.basename(html_path)
        title = os.path.splitext(filename)[0]  # Remove .html extension
        
        # Determine category (directory name or "General")
        directory = os.path.dirname(html_path)
        category = os.path.basename(directory)
        if category == "web":
            category = "General"
        
        # Write book object to file
        f.write("  {\n")
        f.write(f'    "title": "{title}",\n')
        f.write(f'    "path": "{rel_path}",\n')
        f.write(f'    "category": "{category}"\n')
        
        # Add comma for all but last entry
        if i < len(html_files) - 1:
            f.write("  },\n")
        else:
            f.write("  }\n")
    
    f.write("]\n")

print(f"Successfully created book_list.json with {len(html_files)} books.")