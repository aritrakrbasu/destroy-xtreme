import requests
import json

response = requests.get("https://meme-api.herokuapp.com/gimme/1")
data = response.json()
url = data['memes'][0]['url']
caption = data['memes'][0]['title']
author = data['memes'][0]['author']
response = requests.post('http://xmeme-soh.herokuapp.com/memes', json = {'name':author,"caption":caption,"url":url})
print(response.text)