

from flask import Flask
import mysql.connector

app = Flask(__name__)

@app.route('/kenttä/<icao>')
def kentta(icao):

    yhteys = mysql.connector.connect(
        host="127.0.0.1",
        port=3306,
        database="flight_game",
        user="jesse",
        password="Jesse0802"
    )

    kursori = yhteys.cursor()

    kursori.execute(
        "SELECT name, municipality FROM airport WHERE ident = %s",
        (icao,)
    )

    tulos = kursori.fetchone()

    kursori.close()
    yhteys.close()

    if tulos:
        return {
            "ICAO": icao,
            "Name": tulos[0],
            "Municipality": tulos[1]
        }

    return {"error": "Lentokenttää ei löytynyt"}


app.run(port=3000)
