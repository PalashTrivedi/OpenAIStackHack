import os
import openai
from whisper import WhisperClient
from flask import Flask, request, jsonify
from config import *

OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'

WHISPER_API_KEY = 'YOUR_WHISPER_API_KEY'
WHISPER_RECIPIENT_ID = 'RECIPIENT_ID'

app = Flask(__name__)

@app.route('/chatbot', methods=['POST'])
def chatbot():
    message = request.json['message']

    response = openai.Completion.create(
        engine="davinci",
        prompt=message,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.5,
    )

    whisper.send_message(
        recipient=recipient_id,
        message=response.choices[0].text,
        voice=True,
    )

    return jsonify({'response': response.choices[0].text})



