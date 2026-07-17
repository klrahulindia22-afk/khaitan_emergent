from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="Khaitan EduOps API")
api_router = APIRouter(prefix="/api")

# Logger
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    school: Optional[str] = ""
    role: Optional[str] = ""
    message: str
    submitted_at: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    school: Optional[str] = ""
    role: Optional[str] = ""
    message: str


class DemoSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    school: str
    students: Optional[str] = ""
    date: str
    time: Optional[str] = ""
    notes: Optional[str] = ""
    submitted_at: str = Field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )


class DemoCreate(BaseModel):
    name: str
    email: EmailStr
    school: str
    students: Optional[str] = ""
    date: str
    time: Optional[str] = ""
    notes: Optional[str] = ""


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Khaitan EduOps API — operational."}


@api_router.get("/health")
async def health():
    return {"status": "ok", "service": "khaitan-eduops"}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact(payload: ContactCreate):
    if not payload.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")
    submission = ContactSubmission(**payload.model_dump())
    await db.contact_submissions.insert_one(submission.model_dump())
    logger.info(f"Contact submission received: {submission.id} · {submission.email}")
    return submission


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contacts():
    docs = await db.contact_submissions.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(1000)
    return docs


@api_router.post("/demo", response_model=DemoSubmission)
async def create_demo(payload: DemoCreate):
    submission = DemoSubmission(**payload.model_dump())
    await db.demo_submissions.insert_one(submission.model_dump())
    logger.info(f"Demo submission received: {submission.id} · {submission.email}")
    return submission


@api_router.get("/demo", response_model=List[DemoSubmission])
async def list_demos():
    docs = await db.demo_submissions.find({}, {"_id": 0}).sort("submitted_at", -1).to_list(1000)
    return docs


# ---------- App wiring ----------
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
