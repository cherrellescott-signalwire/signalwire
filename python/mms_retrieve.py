#!/usr/bin/python3

from requests.auth import HTTPBasicAuth
import requests

space = "joshebosh"
key = "YOU_PROJECT_ID"
token = "YOU_PROJECT_ID"

creds = HTTPBasicAuth(key, token)

recordingsid = "a2566c96-ae35-4ddb-8109-fe54b36b4028"
outfile = "output.wav"

#recordingsid = "a2566c96-ae35-4ddb-8109-fe54b36b4028.mp3"
#outfile = "output.mp3"


r = requests.get(url = "https://" + space + ".signalwire.com/api/laml/2010-04-01/Accounts/" + key + "/Recordings/" + recordingsid, auth=creds)

print(r.status_code)
open(outfile, 'wb').write(r.content)
