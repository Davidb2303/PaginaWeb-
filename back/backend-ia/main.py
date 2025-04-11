from fastapi import FastAPI, Request
import requests
import os

app = FastAPI()

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://ollama:11434/api/generate")
MODEL = "llama3"

@app.post("/recommend")
async def recommend_clothes(request: Request):
    body = await request.json()
    history = body.get("history", [])

    prompt = f"""
    Eres un asistente de moda. Con base en este historial de compras: {history},
    sugiere 5 productos de ropa que podrían interesarle al usuario.
    Responde en formato JSON: [{{"name": "...", "category": "...", "color": "...", "price": ...}}]
    """

    payload = {
        "model": MODEL,
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(OLLAMA_URL, json=payload)
    result = response.json()

    return {"recommendations": result["response"]}
