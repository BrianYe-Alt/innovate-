"""
Coca-Cola Recycle & Rewards - Web app
Run: python website.py
Open: http://127.0.0.1:5000
"""
from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    # host="0.0.0.0" lets others on your network access via your IP (e.g. http://192.168.1.x:5000)
    app.run(debug=True, host="0.0.0.0", port=5000)
