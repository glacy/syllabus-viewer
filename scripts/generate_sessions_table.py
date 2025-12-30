#!/usr/bin/env python3
import glob
import yaml
import re

# ANSI Colors
CYAN = "\033[96m"
GREEN = "\033[92m"
RED = "\033[91m"
RESET = "\033[0m"

output_file = "sessions_table.md"
print(f"{CYAN}Generando {output_file}...{RESET}")

try:
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("## Tabla de sesiones y resultados de aprendizaje\n\n")
        f.write("| Sesión | Título | Resultados de aprendizaje |\n")
        f.write("|--------|--------|---------------------------|\n")

        files = sorted(glob.glob("sessions/*.md"))
        for file_path in files:
            try:
                with open(file_path, "r", encoding="utf-8") as md:
                    content = md.read()

                match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
                if match:
                    fm = yaml.safe_load(match.group(1))

                    # Extract fields with safe defaults
                    number = fm.get('session', {}).get('number', '')
                    title = fm.get('title', '')

                    # Check for learning_objectives (standard) or fallback to learning_outcomes
                    objectives = fm.get('learning_objectives') or fm.get('learning_outcomes', [])

                    if isinstance(objectives, list):
                        formatted_objectives = "<ul>" + "".join([f"<li>{o}</li>" for o in objectives]) + "</ul>"
                    elif objectives:
                         formatted_objectives = str(objectives)
                    else:
                        formatted_objectives = ""

                    # Escape pipes in content to prevent breaking the table
                    title = str(title).replace("|", "&#124;")
                    formatted_objectives = formatted_objectives.replace("|", "&#124;")

                    f.write(f"| {number} | {title} | {formatted_objectives} |\n")
            except Exception as e:
                print(f"{RED}Error procesando {file_path}: {e}{RESET}")

    print(f"{GREEN}✔ Tabla generada en {output_file}{RESET}")

except Exception as e:
    print(f"{RED}✗ Error fatal: {e}{RESET}")
    exit(1)
