import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load .env
load_dotenv()

# Configure Gemini API
genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

# Gemini Model
model = genai.GenerativeModel(
    "gemini-2.5-flash"
)


def generate_ai_reasoning(incident):
    try:
        prompt = f"""
You are a senior incident response expert.

Analyze the following incident:

{incident}

Provide:

1. Risk Assessment
2. Recommended Actions
3. Executive Summary

Keep the response concise, professional, and actionable.
"""

        response = model.generate_content(prompt)

        return response.text

    except Exception as e:
        return f"Gemini Error: {str(e)}"