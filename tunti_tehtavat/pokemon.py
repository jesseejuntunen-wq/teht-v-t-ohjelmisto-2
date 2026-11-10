
import requests

nimi = input("Anna pokemonin nimi: ")

url = "https://pokeapi.co/api/v2/pokemon/" + nimi

vastaus = requests.get(url)

if vastaus.status_code == 200:
    data = vastaus.json()

    for tyyppi in data["types"]:
        print(tyyppi["type"]["name"])

else:
    print("Pokemonia ei löytynyt!")
