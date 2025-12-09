from flask import Flask, request, jsonify, render_template
import pandas as pd
import joblib

app = Flask(__name__, template_folder="templates")

# تحميل النموذج
model = joblib.load("model.pkl")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

@app.route("/matrix")
def matrix():
    return render_template("matrix.html")

@app.route("/check")
def check():
    return render_template("check.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route('/tree')
def tree():
    return render_template('tree.html')

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["file"]
    df = pd.read_csv(file)
    
    preds = model.predict(df)
    result = "✔️ تحليل طبيعي" if preds[0] == 1 else "❌ تهديد سيبراني"
    
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True, port=5050)
