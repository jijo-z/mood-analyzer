from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze_mood():
    data = request.get_json()
    text = data.get('text', '')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    blob = TextBlob(text)
    polarity = blob.sentiment.polarity

    # Debug print
    print(f"Input: '{text}' | Polarity: {polarity}")

    if polarity > 0.1:
        mood = "positive"
    elif polarity < -0.1:
        mood = "negative"
    else:
        mood = "neutral"

    return jsonify({'mood': mood})


if __name__ == '__main__':
    app.run(debug=True)
