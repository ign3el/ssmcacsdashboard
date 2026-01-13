import csv
import collections
import os

SCHEMA_FILE = r'C:\Users\sahte\OneDrive\Desktop\AI Projects\Antigravity Projects\ACS Dashboard\database_schema.csv'
FK_FILE = r'C:\Users\sahte\OneDrive\Desktop\AI Projects\Antigravity Projects\ACS Dashboard\fk_constraints.csv'
OUTPUT_FILE = r'C:\Users\sahte\.gemini\antigravity\brain\966bef14-1ed8-4e1f-9eb4-a029f5b45cfb\database_relationship_map.md'

def read_csv(filepath):
    encodings = ['utf-16', 'utf-8']
    for enc in encodings:
        try:
            with open(filepath, 'r', encoding=enc) as f:
                return [l.strip() for l in f.readlines() if l.strip()]
        except UnicodeError:
            continue
    return []

def parse_schema(lines):
    tables = collections.defaultdict(list)
    for line in lines:
        if 'TableName' in line or '----' in line: continue
        parts = [p.strip() for p in line.split('|')]
        if len(parts) >= 2:
            table = parts[0]
            col = parts[1]
            tables[table].append(col)
    return tables

def parse_fks(lines):
    relationships = []
    for line in lines:
        if 'ForeignKey' in line or '----' in line: continue
        parts = [p.strip() for p in line.split('|')]
        if len(parts) >= 5:
            # ForeignKey|ParentTable|ParentColumn|ReferencedTable|ReferencedColumn
            relationships.append({
                'from_table': parts[1],
                'from_col': parts[2],
                'to_table': parts[3],
                'to_col': parts[4],
                'type': 'FK'
            })
    return relationships

def infer_relationships(tables):
    inferred = []
    # Key Inference Logic
    # 1. SbiID -> Visitor (Primary Table for persons)
    # 2. Terminal -> AC_CH_SECURITY_STATUS? No, usually terminal is a device.
    
    known_keys = {
        'SbiID': 'Visitor',
        'VisitorID': 'Visitor',
        'CardID': 'AC_CARD',
        'ClassID': 'AC_CLASS'
    }

    for table, columns in tables.items():
        for col in columns:
            # Check exact match
            if col in known_keys and table != known_keys[col]:
                inferred.append({
                    'from_table': table,
                    'from_col': col,
                    'to_table': known_keys[col],
                    'to_col': 'SbiID' if col == 'SbiID' else 'ID', # Assumption
                    'type': 'Inferred'
                })
    return inferred

def generate_markdown():
    schema_lines = read_csv(SCHEMA_FILE)
    fk_lines = read_csv(FK_FILE)
    
    tables = parse_schema(schema_lines)
    relationships = parse_fks(fk_lines)
    
    if not relationships:
        print("No FKs found. Using inference.")
        relationships = infer_relationships(tables)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("# Database Relationship Map\n\n")
        
        # 1. Mermaid Diagram (Core Tables Only to prevent crash)
        # Filter for tables with relationships
        active_tables = set()
        for r in relationships:
            active_tables.add(r['from_table'])
            active_tables.add(r['to_table'])
            
        f.write("## Core Entity Diagram\n")
        f.write("```mermaid\nerDiagram\n")
        
        # Limit diagram to top 50 connected tables to be safe
        # or grouped by prefix?
        
        count = 0
        MAX_NODES_IN_DIAGRAM = 100
        
        for r in relationships:
            if count > MAX_NODES_IN_DIAGRAM: break
            # Mermaid syntax: TABLE_A }|..|{ TABLE_B : "FK_Col"
            f.write(f'    {r["from_table"]} }}|..|| {r["to_table"]} : "{r["from_col"]}"\n')
            count += 1
            
        f.write("```\n\n")
        
        # 2. Full Relationship List
        f.write("## Full Relationship List\n\n")
        f.write("| From Table | Column | To Table | Column | Type |\n")
        f.write("| --- | --- | --- | --- | --- |\n")
        for r in relationships:
            f.write(f"| {r['from_table']} | {r['from_col']} | {r['to_table']} | {r['to_col']} | {r['type']} |\n")

if __name__ == "__main__":
    generate_markdown()
