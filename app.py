from crypt import methods
import sys
from flask import Flask, jsonify, request
from flask_cors import CORS
from simple_steganography import encode, decode

app = Flask(__name__)
app_config = {"host": "0.0.0.0", "port": sys.argv[1]}

"""
---------------------- DEVELOPER MODE CONFIG -----------------------
"""
# Developer mode uses app.py
if "app.py" in sys.argv[0]:
  # Update app config
  app_config["debug"] = True

  # CORS settings
  cors = CORS(
    app,
    resources={r"/*": {"origins": "http://localhost*"}},
  )

  # xCORS headers
#  app.config["CORS_HEADERS"] = "Content-Type"


"""
--------------------------- REST CALLS -----------------------------
"""
# Remove and replace with your own
@app.route("/loaded", methods=["GET"])
def example():
  return jsonify("App has loaded")

# Route of encoding
@app.route("/encode", methods=["POST"])
def encode_endpoint():
  requestJson = request.json
  print(requestJson)
  return encode(
    str(requestJson["inputPath"]),
    requestJson["textToEncode"],
    requestJson["inputPath"],
  )

# Route for decoding
@app.route("/decode", methods=["POST"])
def decode_endpoint():
  requestJson = request.json
  return jsonify(
    decode(requestJson["inputPath"])
  )

"""
-------------------------- APP SERVICES ----------------------------
"""
# Quits Flask on Electron exit
@app.route("/quit")
def quit():
  sys.exit(0)

if __name__ == "__main__":
  app.run(**app_config)
