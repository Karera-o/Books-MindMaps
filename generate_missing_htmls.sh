#!/bin/bash

# Script to find MD files without HTML equivalents and generate them

echo "Checking for missing HTML files..."

# Loop through all MD files in current directory
for md_file in *.md; do
    # Skip specific files
    if [[ "$md_file" == "README.md" || "$md_file" == "LICENSE.md" ]]; then
        continue
    fi
    
    # Get the basename without extension
    base_name="${md_file%.md}"
    html_file="web/${base_name}.html"
    
    # Check if corresponding HTML exists
    if [ ! -f "$html_file" ]; then
        echo "Found missing HTML for: $md_file"
        echo "Generating HTML using markmap..."
        markmap "$md_file"
        
        # Move the generated file to web directory if needed
        generated_html="${base_name}.html"
        if [ -f "$generated_html" ]; then
            mv "$generated_html" "web/"
            echo "✓ Created $html_file"
        else
            echo "⚠️ Failed to generate HTML for $md_file"
        fi
    fi
done

echo "Check complete!"