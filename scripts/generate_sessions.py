#!/usr/bin/env python3
"""
Script to generate markdown session files from planeamiento.json.

This script reads 'planeamiento.json', extracting content for each week,
and generates structured Markdown files with YAML frontmatter in the 'sessions/' directory.
"""

import json
import os
import yaml
import re

# Configuration
JSON_FILE = 'planeamiento.json'
OUTPUT_DIR = 'sessions'

def generate_filename(week_num, title):
    """
    Generates a web-safe filename from the week number and title.
    
    Args:
        week_num (int): The week/session number.
        title (str): The session title.
        
    Returns:
        str: Filename like '01-session-title.md'.
    """
    # Sanitize title for filename
    safe_title = re.sub(r'[^\w\s-]', '', title).strip().lower()
    safe_title = re.sub(r'[-\s]+', '-', safe_title)
    return f"{int(week_num):02d}-{safe_title}.md"

import argparse

# ... existing imports ...

# ... existing constants and functions ...

def main():
    parser = argparse.ArgumentParser(description='Generate markdown session files from planeamiento.json.')
    parser.add_argument('--week', type=int, help='Specific week number to generate (e.g., 1)')
    args = parser.parse_args()

    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        print(f"Created directory: {OUTPUT_DIR}")

    print(f"Reading {JSON_FILE}...")
    try:
        with open(JSON_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except Exception as e:
        print(f"Error reading JSON file: {e}")
        return

    # Filter data if week argument is provided
    if args.week:
        print(f"Filtering for week {args.week}...")
        data = [entry for entry in data if entry.get('week') == args.week]
        if not data:
            print(f"No data found for week {args.week}")
            return

    for entry in data:
        try:
            week_num = entry.get('week')
            if not week_num:
                continue
            
            # Content extraction
            content_list = entry.get('content', [])
            objectives = entry.get('objectives', [])
            activities = entry.get('activities', "")
            evaluation_list = entry.get('evaluation', [])
            references_list = entry.get('references', [])

            # Process Title (First item of content or generic)
            title = content_list[0] if content_list else f"Sesión {int(week_num)}"
            # Remove numbering from title if present (though JSON usually doesn't have it)
            title = re.sub(r'^\d+\.\s*', '', title)

            # Process Keywords (simple extraction from title)
            keywords = [word for word in title.split() if len(word) > 4]

            # Construct Frontmatter
            frontmatter = {
                'title': title,
                'subtitle': f"Semana {int(week_num)}",
                'subject': f"Semana {int(week_num)}",
                'session': {
                    'number': int(week_num),
                    'duration': "TBD",
                    'modality': "Presencial"
                },
                'course': "Física para Biotecnología",
                'authors': [{'name': "Gerardo Lacy Mora"}],
                'keywords': keywords,
                'learning_objectives': objectives,
                'activities': activities,
                'evaluation': evaluation_list,
                'references': references_list
            }

            # YAML formatting
            yaml_frontmatter = yaml.dump(frontmatter, allow_unicode=True, sort_keys=False)
            
            # Construct Markdown Body
            md_content = f"---\n{yaml_frontmatter}---\n\n"
            
            # Add Objectives Block
            if objectives:
                md_content += ":::{note} Objetivos\n"
                md_content += "Al completar esta lección, serás capaz de:\n"
                for i, obj in enumerate(objectives, 1):
                    md_content += f"{i}. {obj}\n"
                md_content += ":::\n\n"
            
            if content_list:
                md_content += "## Contenidos\n\n"
                for item in content_list:
                     md_content += f"- {item}\n"
                md_content += "\n"
            
            if activities:
                md_content += "## Actividades\n\n"
                md_content += f"{activities}\n\n"
            
            if evaluation_list:
                md_content += "## Evaluación\n\n"
                for eval_item in evaluation_list:
                    etype = eval_item.get('type', 'Evaluación')
                    desc = eval_item.get('description', '')
                    md_content += f"- **{etype}**: {desc}\n"
                md_content += "\n"
            
            if references_list:
                md_content += "## Referencias\n\n"
                for ref in references_list:
                    text = ref.get('text', '')
                    pages = ref.get('pages', '')
                    ref_str = f"{text}"
                    if pages:
                        ref_str += f", {pages}"
                    md_content += f"- {ref_str}\n"
                md_content += "\n"

            # Write file
            filename = generate_filename(week_num, title)
            filepath = os.path.join(OUTPUT_DIR, filename)
            
            # Check for duplicates and append counter
            if os.path.exists(filepath):
                base_name, ext = os.path.splitext(filename)
                counter = 1
                while os.path.exists(filepath):
                    filename = f"{base_name}_{counter}{ext}"
                    filepath = os.path.join(OUTPUT_DIR, filename)
                    counter += 1
            
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(md_content)
            
            print(f"Generated: {filepath}")

        except Exception as e:
            print(f"Error processing week {entry.get('week')}: {e}")

if __name__ == "__main__":
    main()
