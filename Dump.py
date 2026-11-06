from pathlib import Path

searched_files = [".js",".html","css"]

file = Path.cwd()
to = Path("DumpFile.txt")

Allstr = ""

for f in file.iterdir()
    if f.is_file():
        if f.suffix() in searched_files:
            print(f)
            Allstr += f"==={f}==="
            Allstr += f.reade_tect()
            
to.write_text(Allstr)