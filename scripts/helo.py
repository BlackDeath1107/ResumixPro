import os
import json
from pyresparser import ResumeParser

data = ResumeParser('ResumixPro/output.pdf').get_extracted_data()

with open("skill.json", "w") as outfile:
    json.dump(data, outfile)
print(json.dumps(data))
