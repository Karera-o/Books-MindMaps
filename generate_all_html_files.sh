#!/bin/bash

# Script to recursively find all MD files, generate HTML files using markmap, and move them to web directory
# Logs actions and errors for verification

LOG_FILE="markmap_generation.log"
WEB_DIR="web"
echo "Starting HTML generation at $(date)" > "$LOG_FILE"
echo "=======================================" >> "$LOG_FILE"

# Create files list for website indexing
HTML_FILES_LIST="${WEB_DIR}/book_list.json"
echo "[" > "$HTML_FILES_LIST"

# Counter for statistics
total_md=0
already_exists=0
success=0
failed=0
first_entry=true

# Function to process markdown files in a directory
process_directory() {
    local dir="$1"
    local rel_path="${dir#./}"
    echo "Processing directory: $dir" >> "$LOG_FILE"
    
    # Create corresponding directory in web if needed
    if [ "$dir" != "." ]; then
        mkdir -p "${WEB_DIR}/${rel_path}"
    fi
    
    # Find all markdown files in current directory (not recursive)
    for md_file in "$dir"/*.md; do
        # Skip if wildcard didn't match anything
        [ -f "$md_file" ] || continue
        
        # Skip README and LICENSE files
        if [[ "$(basename "$md_file")" == "README.md" || "$(basename "$md_file")" == "LICENSE.md" ]]; then
            echo "  Skipping: $md_file (README/LICENSE)" >> "$LOG_FILE"
            continue
        fi
        
        ((total_md++))
        
        # Get base name and file information
        base_name="${md_file%.md}"
        file_basename=$(basename "$base_name")
        target_dir="${WEB_DIR}"
        if [ "$dir" != "." ]; then
            target_dir="${WEB_DIR}/${rel_path}"
        fi
        
        # Generate HTML using markmap
        echo "  Generating HTML for: $md_file" >> "$LOG_FILE"
        markmap "$md_file" --no-open
        
        # Check if generation was successful
        if [ -f "${base_name}.html" ]; then
            # Move to web directory
            mv "${base_name}.html" "${target_dir}/"
            echo "  ✓ Successfully moved to: ${target_dir}/${file_basename}.html" >> "$LOG_FILE"
            
            # Add to book list JSON (with category from directory)
            category=$(basename "$dir")
            if [ "$category" == "." ]; then
                category="General"
            fi
            
            # Add comma for all but first entry
            if [ "$first_entry" = true ]; then
                first_entry=false
            else
                echo "," >> "$HTML_FILES_LIST"
            fi
            
            # Write JSON entry for this book
            relative_path="${rel_path}/${file_basename}.html"
            if [ "$dir" == "." ]; then
                relative_path="${file_basename}.html"
            fi
            
            echo "  {" >> "$HTML_FILES_LIST"
            echo "    \"title\": \"${file_basename}\"," >> "$HTML_FILES_LIST"
            echo "    \"path\": \"${relative_path}\"," >> "$HTML_FILES_LIST"
            echo "    \"category\": \"${category}\"" >> "$HTML_FILES_LIST"
            echo "  }" >> "$HTML_FILES_LIST"
            
            ((success++))
        else
            echo "  ✗ Failed to generate HTML for: $md_file" >> "$LOG_FILE"
            ((failed++))
        fi
    done
    
    # Process subdirectories
    for subdir in "$dir"/*/; do
        # Skip if no subdirectories exist
        [ -d "$subdir" ] || continue
        
        # Skip .git and other hidden directories
        [[ $(basename "$subdir") == .* ]] && continue
        
        process_directory "$subdir"
    done
}

# Start processing from current directory
process_directory "."

# Close JSON array
echo "" >> "$HTML_FILES_LIST"
echo "]" >> "$HTML_FILES_LIST"

# Print summary
echo "=======================================" >> "$LOG_FILE"
echo "Generation completed at $(date)" >> "$LOG_FILE"
echo "Total markdown files found: $total_md" >> "$LOG_FILE"
echo "Files already having HTML: $already_exists" >> "$LOG_FILE"
echo "Successfully generated: $success" >> "$LOG_FILE"
echo "Failed to generate: $failed" >> "$LOG_FILE"

# Create index.html and assets for the website
echo "Creating website interface..." >> "$LOG_FILE"

# Print summary to console as well
echo "HTML Generation Summary:"
echo "Total markdown files found: $total_md"
echo "Files already having HTML: $already_exists"
echo "Successfully generated: $success"
echo "Failed to generate: $failed"
echo "See $LOG_FILE for details"
echo "Website available at: ${WEB_DIR}/index.html"