import os
import json
from bs4 import BeautifulSoup

pages = list()

files = [f for f in os.listdir('.') if os.path.isfile(f)]
for f in files:
    if f.endswith(".html"):
        with open(f, encoding="utf8") as f:
            page = dict()

            soup = BeautifulSoup(f.read(), 'html.parser')

            if not hasattr(soup, "title") or not hasattr(soup.title, "string"):
                continue

            page["key"] = soup.title.string

            for meta in soup.find_all("meta"):
                if meta.get("name") is None:
                    continue

                if meta.get("name").lower() == "description":
                    page["description"] = meta.get("content")
                if meta.get("name").lower() == "keywords":
                    page["tags"] = [s.strip() for s in meta.get("content").split(",")]

            page["url"] = f.name

            pages.append(page)

with open("pages.json", "w+", encoding="utf8") as f:
    f.write(json.dumps(pages, indent=4))
