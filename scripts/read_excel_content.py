"""
Script to read 'planeamiento_didactico.xlsx' and export content to 'planeamiento.json'.
"""

import pandas as pd
import json
import re
import os

EXCEL_FILE = 'planeamiento_didactico.xlsx'
OUTPUT_FILE = 'planeamiento.json'
SHEET_NAME = 'Planeamiento semanal'  # Exact match from generate_sessions.py

def clean_text(text):
    """
    Cleans up text by removing extra whitespace and handling NaNs.
    """
    if pd.isna(text):
        return ""
    return str(text).strip()

def extract_list_items(text):
    """
    Extracts bullet points or numbered lists from a text block.
    """
    if pd.isna(text):
        return []
    lines = text.split('\n')
    cleaned_items = []
    for line in lines:
        line = line.strip()
        # Remove leading bullets like "- ", "1. ", "a. "
        line = re.sub(r'^[-*•]\s*', '', line)
        line = re.sub(r'^\d+\.\s*', '', line)
        line = re.sub(r'^[a-z]\.\s*', '', line)
        if line:
            cleaned_items.append(line)
    return cleaned_items

def main():
    """
    Main function to parse the Excel file and generate the JSON output.
    It handles file existence checks, sheet selection, data extraction,
    and JSON serialization.
    """
    if not os.path.exists(EXCEL_FILE):
        print(f"Error: {EXCEL_FILE} not found.")
        return

    try:
        # Load the Excel file
        # We need to find the correct sheet name. generate_sessions.py used logic to find it or used a specific one.
        # Let's try to read the file and determine the sheet if not hardcoded, 
        # or just use the logic from generate_sessions.py which looked reliable.
        # Ideally we read 'Cronograma' or the first sheet if that fails.
        xl = pd.ExcelFile(EXCEL_FILE)
        sheet_name = SHEET_NAME if SHEET_NAME in xl.sheet_names else xl.sheet_names[0]
        
        df = pd.read_excel(EXCEL_FILE, sheet_name=sheet_name)
        print(f"Reading sheet: {sheet_name}")

        syllabus_data = []

        for index, row in df.iterrows():
            week_num = row.get('SEMANA')
            if pd.isna(week_num):
                continue
            
            # Content extraction
            content_raw = clean_text(row.get('Contenidos'))
            objectives_raw = clean_text(row.get('Objetivos específicos (de aprendizaje)'))
            activities_raw = clean_text(row.get('Estrategias de  Enseñanza - Actividades de Aprendizaje'))
            evaluation_raw = clean_text(row.get('Formas de Evaluación'))
            references_raw = clean_text(row.get('Unnamed: 9')) # Fallback for references column

            # Clean and structure data
            entry = {
                "week": int(week_num),
                "content": extract_list_items(content_raw), # Content is inherently a list in the cells usually
                "objectives": extract_list_items(objectives_raw),
                "activities": clean_text(activities_raw), 
                "evaluation": clean_text(evaluation_raw),
                "references": clean_text(references_raw)
            }
            syllabus_data.append(entry)

        # Write to JSON
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(syllabus_data, f, ensure_ascii=False, indent=2)
        
        print(f"Successfully exported {len(syllabus_data)} entries to {OUTPUT_FILE}")

    except Exception as e:
        print(f"Error processing file: {e}")

if __name__ == "__main__":
    main()

