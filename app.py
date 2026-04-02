import random
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/wait-times", methods=["GET"])
def wait_times():
    patient_count = random.randint(1, 15)
    wait_time = (patient_count * 2 ) +random.randint(0, 30)
    return jsonify({"waitTime": wait_time, "patientCount": patient_count})

if __name__ == "__main__":
    #curl "http://127.0.0.1:5000/api/wait-times"
    app.run(debug=True)