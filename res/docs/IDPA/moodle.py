import requests
import json
import sys
import urllib.request
import pathlib
import os
import errno
import getpass
import time
import base64

password_correct = False

if os.path.exists("config.json"):
    file = open("config.json")
    try:
        config = json.loads(file.read())

        if "username" in config:
            username = config["username"]
        if "password" in config:
            password = base64.b64decode(config["password"].encode("ascii")).decode("ascii")

        if "username" in config and "password" in config:
            url = f"https://moodle.bbbaden.ch/login/token.php?username={username}&password={password}&service=moodle_mobile_app"
            response = requests.get(url).json()

            if "token" in response:
                token = response["token"]
                password_correct = True
    except:
        pass

while not password_correct:
    username = input("Username: ").lower()
    password = getpass.getpass("Password: ")
    print("")

    url = f"https://moodle.bbbaden.ch/login/token.php?username={username}&password={password}&service=moodle_mobile_app"
    response = requests.get(url).json()
    if "token" in response:
        token = response["token"]
        password_correct = True

        with open("config.json", "w+") as f:
            config = {
                "username": username,
                "password": base64.b64encode(password.encode("ascii")).decode("ascii")
                }
            f.write(json.dumps(config))
    else:
        print("Incorrect password or username!\n")

url = f"https://moodle.bbbaden.ch/webservice/rest/server.php?wstoken={token}&moodlewsrestformat=json&wsfunction=core_webservice_get_site_info"
site_info = requests.get(url).json()

uid = site_info["userid"]

url = f"https://moodle.bbbaden.ch/webservice/rest/server.php?wstoken={token}&moodlewsrestformat=json&wsfunction=core_enrol_get_users_courses&userid={uid}"
courses = requests.get(url).json()

for i in range(len(courses)):
    print(f"[{i}] " + courses[i]["fullname"].replace(": ", " - ").strip().replace("Modul ", "M"))

ask_course = True
while ask_course:
    try:
        cnum = int(input("\nFor which course would you like to download the files? "))

        if cnum >= len(courses):
            print("\nInvalid input!")
        else:
            ask_course = False
    except:
        print("\nInvalid input!")

print("\nDownloading files...")

course = courses[cnum]
cid = course["id"]
cname = course["fullname"].replace(": ", " - ").strip().replace("Modul ", "M")

url = f"https://moodle.bbbaden.ch/webservice/rest/server.php?wstoken={token}&moodlewsrestformat=json&wsfunction=core_course_get_contents&courseid={cid}"
course = requests.get(url).json()

links = list()

if not os.path.exists(cname):
    os.makedirs(cname)

for category in course:
    files = 0
    
    category_name = category["name"].replace(":", "").replace("  ", " ")
    dirpath = cname + "/" + category_name
    if not os.path.exists(dirpath):
        os.makedirs(dirpath)
    
    for module in category["modules"]:
        if "contents" in module:
            for file in module["contents"]:
                if file["type"] == "file":
                    filepath = dirpath + "/" + file["filename"].replace(":", "").replace("  ", " ")
                    filepath = os.path.realpath(filepath)

                    if os.path.isfile(filepath) and os.path.getsize(filepath) > 1000:
                        continue

                    if os.path.isfile(filepath) and os.path.getsize(filepath) < 1000:
                        print("Overwriting {} due to corruption...".format(filepath))

                    fileurl = file["fileurl"] + "&token=" + token
    
                    try:
                        urllib.request.urlretrieve(fileurl, filepath)
                    except Exception as e:
                        print(e)
                else:
                    links.append("{}:\n{}".format(file["filename"], file["fileurl"]))

print("\nDone downloading the files to {}!".format(cname))

if len(links) > 0:
    print("There were URLs we could not download! They have been added to links.txt")
    with open(cname + "/links.txt", "w+") as f:
        f.write("\n\n".join(links))

time.sleep(1.5)
os.startfile(cname)
