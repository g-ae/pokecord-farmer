import requests
import json

if (__name__ == "__main__"):
    # open both json files
    with open('./config.json') as jsonConfigFile:
        with open('./messagecontent.json') as jsonMessageContentFile:
            # load files
            config = json.load(jsonConfigFile)
            messagecontent = json.load(jsonMessageContentFile)

            headers = {
                'Authorization': config["tokenUser"]
            }
            
            requests.post(messagecontent["url"], data={'content': messagecontent["content"]}, headers=headers)
else:
    exit(1)