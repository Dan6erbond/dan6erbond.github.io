import os
import json
from bs4 import BeautifulSoup

subFolders = True

while subFolders:
    subFolders = False
    

folders = ["."]
folders.extend([f for f in os.listdir('.') if os.path.isdir(f)])

print(folders)

files = list()

for _f in folders:
    _files = [_f + "/" + f for f in os.listdir(_f) if os.path.isfile(_f + "/" + f) and f.endswith(".html")]
    files.extend(_files)

pages = list()

for f in files:
    with open(f, encoding="utf8") as f:
        page = dict()

        soup = BeautifulSoup(f.read(), 'html.parser')

        if not hasattr(soup, "title") or not hasattr(soup.title, "string"):
            continue

        page["key"] = soup.title.string

        add = True
        for meta in soup.find_all("meta"):
            if meta.get("name") is None:
                continue

            if meta.get("name").lower() == "index" and meta.get("content").lower() == "false":
                add = False
                break

            if meta.get("name").lower() == "description":
                page["description"] = meta.get("content")
            if meta.get("name").lower() == "keywords":
                page["tags"] = [s.strip() for s in meta.get("content").split(",")]

        page["url"] = f.name

        if add: pages.append(page)

with open("pages.json", "w+", encoding="utf8") as f:
    f.write(json.dumps(pages, indent=4))
