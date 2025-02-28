#!/bin/bash

# Script to fix the JSON structure in book_list.json

echo "Fixing JSON structure in web/book_list.json..."

# Create a list of all HTML files in the web directory (recursive)
find web -name "*.html" | grep -v "index.html" | sort > all_html_files.txt

# Create proper JSON file
echo "[" > web/book_list.json
first=true

while IFS= read -r html_file; do
    # Extract relative path to web directory
    rel_path=${html_file#web/}
    
    # Extract title (filename without extension)
    filename=$(basename "$html_file")
    title="${filename%.html}"
    
    # Determine category (directory name or "General")
    dir=$(dirname "$html_file")
    category=$(basename "$dir")
    if [ "$category" = "web" ]; then
        category="General"
    fi
    
    # Add comma for all but first entry
    if [ "$first" = true ]; then
        first=false
    else
        echo "," >> web/book_list.json
    fi
    
    # Write JSON object
    cat >> web/book_list.json << EOF
  {
    "title": "${title}",
    "path": "${rel_path}",
    "category": "${category}"
  }
EOF
done < all_html_files.txt

# Close JSON array
echo "" >> web/book_list.json
echo "]" >> web/book_list.json

echo "JSON file fixed successfully!"