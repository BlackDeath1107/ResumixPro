import os
import openai
import sys
first =sys.argv[1]
second=first.split(",")
# Load your API key from an environment variable or secret management service
openai.api_key = "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"
responseexperience = openai.Completion.create(model="text-davinci-003", prompt="Summarize a cv description for experience "+second[5], temperature=0, max_tokens=200)
text = responseexperience['choices'][0]['text']
print(text)
responseskills = openai.Completion.create(model="text-davinci-003", prompt="Summarize a cv description for skills "+second[6], temperature=0, max_tokens=200)
text = responseskills['choices'][0]['text']
print(text)
responseaboutme = openai.Completion.create(model="text-davinci-003", prompt="Summarize a cv description for about me if  "+second[5]+second[6], temperature=0, max_tokens=200)
text = responseaboutme['choices'][0]['text']
print(text)
