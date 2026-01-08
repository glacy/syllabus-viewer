"""
Script to update the Table of Contents in 'myst.yml'.

This script automatically synchronizes the 'toc' section in 'myst.yml' with the actual
session files present in the 'sessions/' directory. It ensures that any new session
added is reflected in the site navigation under the 'project' configuration.
"""

import yaml
import glob
import re
import os

MYST_FILE = 'myst.yml'
SESSIONS_DIR = 'sessions'

def get_title(filepath):
    """
    Extracts the 'title' from the YAML frontmatter of a markdown file.
    
    Args:
        filepath (str): Path to the markdown file.
        
    Returns:
        str: The title string, or basename if not found.
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    match = re.search(r'^title:\s*(.*)', content, re.MULTILINE)
    if match:
        title = match.group(1).strip()
        # Remove quotes if present
        if (title.startswith('"') and title.endswith('"')) or (title.startswith("'") and title.endswith("'")):
            title = title[1:-1]
        return title.strip()
    return os.path.basename(filepath)

def main():
    with open(MYST_FILE, 'r', encoding='utf-8') as f:
        data = yaml.safe_load(f)

    # Preserve the first item if it's not a session (e.g. 'programa.md') in project.toc
    current_toc = data.get('project', {}).get('toc', [])
    new_toc = []
    
    # Check if there's a preserved query/file at start (like 'programa.md')
    if current_toc and isinstance(current_toc[0], dict) and 'file' in current_toc[0]:
         if 'sessions/' not in current_toc[0]['file']:
             new_toc.append(current_toc[0])
    
    session_files = sorted(glob.glob(os.path.join(SESSIONS_DIR, '[0-9]*.md')))
    
    for filepath in session_files:
        title = get_title(filepath)
        entry = {
            'title': title,
            'children': [
                {'file': filepath}
            ]
        }
        new_toc.append(entry)

    # Assign to project.toc
    if 'project' not in data:
        data['project'] = {}
    data['project']['toc'] = new_toc
    
    # Remove root-level toc if I accidentally created it before
    if 'toc' in data:
        del data['toc']

    with open(MYST_FILE, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, allow_unicode=True, sort_keys=False, default_flow_style=False)
    
    print(f"Updated {MYST_FILE} with {len(session_files)} sessions.")

if __name__ == "__main__":
    main()
