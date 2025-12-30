#!/usr/bin/env python3
import glob
import sys
import yaml
import re

# ANSI Colors
CYAN = "\033[96m"
GREEN = "\033[92m"
RED = "\033[91m"
RESET = "\033[0m"

print(f"{CYAN}Validación estricta de frontmatter (YAML)...{RESET}")

required_fields = [
    "title",
    "session.number",
    "learning_objectives",
    "keywords",
    "subtitle"
]

status = 0

def get_nested(data, path):
    keys = path.split('.')
    val = data
    for key in keys:
        if isinstance(val, dict) and key in val:
            val = val[key]
        else:
            return None
    return val

files = sorted(glob.glob("sessions/*.md"))

for file_path in files:
    print(f"→ {file_path}")

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
        if not match:
            print(f"  {RED}✗ Sin frontmatter{RESET}")
            status = 1
            continue

        frontmatter_str = match.group(1)
        try:
            frontmatter = yaml.safe_load(frontmatter_str)
        except yaml.YAMLError as e:
            print(f"  {RED}✗ YAML inválido: {e}{RESET}")
            status = 1
            continue

        if not isinstance(frontmatter, dict):
            print(f"  {RED}✗ Frontmatter no es un diccionario{RESET}")
            status = 1
            continue

        # Validar campos requeridos
        for field in required_fields:
            # Eximir session.number para anexos
            if field == "session.number" and ("anexo-" in file_path or frontmatter.get("type") == "reference"):
                continue

            if get_nested(frontmatter, field) is None:
                print(f"  {RED}✗ Falta campo obligatorio: .{field}{RESET}")
                status = 1

    except Exception as e:
        print(f"  {RED}✗ Error leyendo archivo: {e}{RESET}")
        status = 1

if status == 0:
    print(f"{GREEN}✔ Frontmatter válido en todas las sesiones{RESET}")
    sys.exit(0)
else:
    print(f"{RED}✗ Errores detectados en el frontmatter{RESET}")
    sys.exit(1)
