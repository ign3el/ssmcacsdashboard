import csv
import collections

INPUT_FILE = r'C:\Users\sahte\OneDrive\Desktop\AI Projects\Antigravity Projects\ACS Dashboard\database_schema.csv'
OUTPUT_FILE = r'C:\Users\sahte\.gemini\antigravity\brain\966bef14-1ed8-4e1f-9eb4-a029f5b45cfb\database_schema_map.md'

def generate_markdown():
    tables = collections.defaultdict(list)
    
    with open(INPUT_FILE, 'r', encoding='utf-16', errors='replace') as f:
        # Skip header lines if sqlcmd outputs dashes
        lines = f.readlines()
        
    # Process lines
    # valid lines look like: TableName|ColumnName|...
    # We might have header garbage at the top
    
    data_started = False
    for line in lines:
        if not line.strip(): continue
        if 'TableName' in line and 'ColumnName' in line:
            continue # Header
        if '----' in line:
            continue # Separator
            
        parts = [p.strip() for p in line.split('|')]
        if len(parts) >= 5:
            table_name = parts[0]
            col_data = {
                'Column': parts[1],
                'Type': parts[2],
                'MaxLen': parts[3],
                'Nullable': 'YES' if parts[4] == '1' else 'NO',
                'Description': parts[5] if len(parts) > 5 else ''
            }
            tables[table_name].append(col_data)

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("# Database Schema Map: cms\n\n")
        f.write(f"Total Tables: {len(tables)}\n\n")
        
        for table_name in sorted(tables.keys()):
            f.write(f"## {table_name}\n\n")
            f.write("| Column | Type | MaxLen | Nullable | Description |\n")
            f.write("| --- | --- | --- | --- | --- |\n")
            for col in tables[table_name]:
                f.write(f"| {col['Column']} | {col['Type']} | {col['MaxLen']} | {col['Nullable']} | {col['Description']} |\n")
            f.write("\n")

if __name__ == "__main__":
    generate_markdown()
