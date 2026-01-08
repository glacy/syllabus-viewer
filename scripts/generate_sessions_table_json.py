#!/usr/bin/env python3
"""
Script to generate a markdown table of all sessions and their learning objectives.
Version: JSON Source (planeamiento.json)
"""
import json

# ANSI Colors
CYAN = "\033[96m"
GREEN = "\033[92m"
RED = "\033[91m"
RESET = "\033[0m"

output_file = "sessions_table_json.md"
json_file = "planeamiento.json"

print(f"{CYAN}Generando {output_file} desde JSON...{RESET}")

try:
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("## Tabla de sesiones y resultados de aprendizaje (JSON)\n\n")
        f.write("| Semana | Título | Resultados de aprendizaje |\n")
        f.write("|--------|--------|---------------------------|\n")

        with open(json_file, "r", encoding="utf-8") as jf:
            data = json.load(jf)

        # Sort data by week just in case
        data.sort(key=lambda x: x.get('week', 0))

        for entry in data:
            week = entry.get('week', '')
            # Title is not explicitly in JSON structure in the same way as frontmatter.
            # The current generator infers it or uses "Sesión X" if not found in generate_sessions.py
            # But let's look at the content first line or similar logic. 
            # In generate_sessions.py logic: title = content_lines[0]
            content = entry.get('content', [])
            title = content[0] if content else f"Sesión {week}"
            
            # Clean title (remove numbers like "1. ")
            # Simple logic to match generate_sessions.py mostly
            if isinstance(title, str) and "." in title[:3]:
                 parts = title.split(".", 1)
                 if len(parts) > 1: title = parts[1].strip()

            objectives = entry.get('objectives', [])

            if isinstance(objectives, list):
                formatted_objectives = "<ul>" + "".join([f"<li>{o}</li>" for o in objectives]) + "</ul>"
            elif objectives:
                formatted_objectives = str(objectives)
            else:
                formatted_objectives = ""

            # Escape pipes
            title = str(title).replace("|", "&#124;")
            formatted_objectives = formatted_objectives.replace("|", "&#124;")

            f.write(f"| {week} | {title} | {formatted_objectives} |\n")

    print(f"{GREEN}✔ Tabla generada en {output_file}{RESET}")

except Exception as e:
    print(f"{RED}✗ Error fatal: {e}{RESET}")
    exit(1)
