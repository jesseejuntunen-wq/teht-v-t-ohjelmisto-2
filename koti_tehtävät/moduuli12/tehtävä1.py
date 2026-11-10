import json
import requests

haku = "https://api.chucknorris.io/jokes/random"

try:
    vastaus = requests.get(haku)
    if vastaus.status_code==200:
        json_vastaus = vastaus.json()
        print(json.dumps(json_vastaus["value"],indent=2))
    else:
        print("ei löytynyt")
except requests.exceptions.RequestException as e:
    print ("Hakua ei voitu suorittaa.")