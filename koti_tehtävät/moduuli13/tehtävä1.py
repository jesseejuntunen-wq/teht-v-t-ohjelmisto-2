
from flask import Flask

app = Flask(__name__)

@app.route('/alkuluku/<int:luku>')
def alkuluku(luku):

    alkuluku = True

    if luku < 2:
        alkuluku = False
    else:
        for i in range(2, luku):
            if luku % i == 0:
                alkuluku = False

    return {
        "Number": luku,
        "isPrime": alkuluku
    }

app.run(port=3000)
