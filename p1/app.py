from flask import Flask, render_template

app = Flask(__name__)

creator = {
    "name": "Molly Jhamb",
    "country": "India",
    "verification": "Verified",
    "creator_type": "UGC Creator"
}

@app.route("/")
def home():
    return render_template("index.html", creator=creator)

if __name__ == "__main__":
    app.run(debug=True)