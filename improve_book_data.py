#!/usr/bin/env python3
import os
import json
import re

print("Improving book data with better categories, shortened titles, and descriptions...")

# Category mapping based on keywords in titles
category_keywords = {
    "Business": ["business", "entrepreneur", "startup", "company", "ceo", "leader", "manager", 
                "investor", "investing", "finance", "financial", "money", "wealth", "rich", 
                "million", "billionaire", "market", "strategy", "models", "job", "saa", "traction",
                "firm", "economy"],
    "Personal Development": ["habit", "self", "mind", "potential", "learn", "creative", "success", 
                            "discipline", "focus", "productivity", "goal", "master", "achieve", 
                            "performance", "excellence", "grow", "empty", "happy", "happiness", 
                            "life", "defy", "courage", "obsessed", "smashing", "unleash", "ego"],
    "Psychology & Mindset": ["psychology", "mindset", "emotional", "intelligence", "ego", "mind",
                           "think", "thought", "likable", "talk", "social", "relationship", "brain",
                           "smart", "fast", "slow", "disliked", "secret", "attitude", "mental"],
    "Design & Innovation": ["design", "thinking", "innovation", "idea", "ideation", "problem", 
                           "solving", "service", "creative", "prototype", "tool", "playbook", "lean"],
    "Leadership & Management": ["manager", "management", "leader", "leadership", "conversation", 
                              "employee", "problem", "difficult", "performance", "coaching", 
                              "feedback", "conduct", "discipline", "unleadable", "organize", 
                              "delegation", "engagement", "people"]
}

# Function to determine category based on title
def determine_category(title):
    title_lower = title.lower()
    
    # Check if it's in Managing People folder (already categorized)
    if "managing people" in title_lower:
        return "Leadership & Management"
    
    # Check for keywords in title
    for category, keywords in category_keywords.items():
        for keyword in keywords:
            if keyword.lower() in title_lower:
                return category
    
    # Default category if no matches
    return "Other"

# Function to create a shortened title (keeping first 40 chars + "...")
def shorten_title(title, max_length=40):
    if len(title) <= max_length:
        return title
    
    # Try to cut at a sensible place (space or punctuation)
    cutoff = max_length
    while cutoff > 20 and title[cutoff] not in [' ', ':', '-', '.', ',']:
        cutoff -= 1
    
    if cutoff <= 20:  # If we couldn't find a good breakpoint
        cutoff = max_length
    
    return title[:cutoff] + "..."

# Function to generate a simple description based on the title
def generate_description(title, category):
    if ":" in title:
        main_title, subtitle = title.split(":", 1)
        return f"A {category.lower()} book about {main_title.strip().lower()}, focusing on{subtitle.strip().lower()}."
    
    # Remove common phrases and clean up the title
    cleaned_title = re.sub(r'the |and |to |of |for |with |by |in |on |how |your ', '', title.lower())
    
    descriptions = {
        "Business": f"Explore strategies for business success through {cleaned_title}.",
        "Personal Development": f"Develop yourself and grow through {cleaned_title}.",
        "Psychology & Mindset": f"Understand the psychology behind {cleaned_title}.",
        "Design & Innovation": f"Learn innovative approaches to {cleaned_title}.",
        "Leadership & Management": f"Become a better leader by mastering {cleaned_title}.",
        "Other": f"Discover insights about {cleaned_title}."
    }
    
    return descriptions.get(category, f"A book about {cleaned_title}.")

# Process books
books = []

# Find all HTML files in the web directory (excluding index.html)
for root, dirs, files in os.walk("web"):
    for file in files:
        if file.endswith(".html") and file != "index.html":
            html_path = os.path.join(root, file)
            rel_path = html_path[4:] if html_path.startswith("web/") else html_path  # Remove "web/" prefix
            
            filename = os.path.basename(html_path)
            title = os.path.splitext(filename)[0]  # Remove .html extension
            
            # Determine better category
            category = determine_category(title)
            
            # Create shortened title
            short_title = shorten_title(title)
            
            # Generate description
            description = generate_description(title, category)
            
            # Add book to list
            books.append({
                "title": title,
                "shortTitle": short_title,
                "path": rel_path,
                "category": category,
                "description": description
            })

# Sort books by category and then by title
books.sort(key=lambda x: (x["category"], x["title"]))

# Get statistics on categories
categories = {}
for book in books:
    cat = book["category"]
    if cat in categories:
        categories[cat] += 1
    else:
        categories[cat] = 1

print("Category distribution:")
for cat, count in categories.items():
    print(f"  {cat}: {count} books")

# Write JavaScript data file
with open("web/assets/books-data.js", "w") as f:
    f.write("const books = ")
    json.dump(books, f, indent=2)
    f.write(";\n\n")
    
    # Also create a categories constant for use in filters
    category_list = list(categories.keys())
    category_list.sort()  # Sort alphabetically
    f.write("const categories = ")
    json.dump(category_list, f, indent=2)
    f.write(";")

print(f"Successfully created improved books-data.js with {len(books)} books across {len(categories)} categories.")