import requests
import json
paikkakunta = input("anna paikkakunta: ")
API_KEY = "c2888687c1b23f10e08b31c8745a0d46"

haku = f"https://api.openweathermap.org/data/2.5/weather?q={paikkakunta}&APPID={API_KEY}"


try:
    vastaus = requests.get(haku)
    if vastaus.status_code==200:
        json_vastaus = vastaus.json()
        Sää = print(json.dumps(json_vastaus["weather"][0]["description"],indent=2))
        Asteet = float(json.dumps(json_vastaus["main"]["temp"],indent=2))
        Celsius = Asteet - 273.15
        print(Celsius)
except requests.exceptions.RequestException as e:
    print ("Hakua ei voitu suorittaa.")

    #["main"]["temp"] ["weather"]["main"]