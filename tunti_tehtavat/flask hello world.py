from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Kirjoita montako kertaa printataan"

@app.route("/<int:maara>")
def hello(maara):
    return "<br>".join(["Hello World"] * maara)

if __name__ == "__main__":
    app.run(debug=True)