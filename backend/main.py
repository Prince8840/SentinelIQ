from fastapi import FastAPI
from routes.incident import router as incident_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="SentinelIQ")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    incident_router,
    prefix="/incident",
    tags=["Incident"]
)

@app.get("/")
def home():
    return {
        "project": "SentinelIQ",
        "status": "running"
    }