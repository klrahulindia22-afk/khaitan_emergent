"""Backend API tests for Khaitan EduOps."""
import os
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://eduops-platform-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


# ---------- Health ----------
def test_health():
    r = requests.get(f"{API}/health", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert data == {"status": "ok", "service": "khaitan-eduops"}


def test_root():
    r = requests.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    assert "operational" in r.json().get("message", "").lower()


# ---------- Contact ----------
def test_contact_create_valid_and_persist():
    payload = {
        "name": "TEST_Reviewer",
        "email": "test_reviewer@example.com",
        "school": "TEST School",
        "role": "Principal",
        "message": "Please contact me for a demo.",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
    assert "submitted_at" in data
    assert data["email"] == payload["email"]
    assert data["name"] == payload["name"]
    assert data["message"] == payload["message"]

    # verify persistence via GET
    g = requests.get(f"{API}/contact", timeout=15)
    assert g.status_code == 200
    lst = g.json()
    assert any(x.get("id") == data["id"] for x in lst)


def test_contact_empty_message_400():
    payload = {
        "name": "TEST_x",
        "email": "test_x@example.com",
        "school": "S",
        "role": "R",
        "message": "   ",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 400
    assert r.json().get("detail") == "Message cannot be empty."


def test_contact_invalid_email_422():
    payload = {
        "name": "TEST_x",
        "email": "not-an-email",
        "school": "S",
        "role": "R",
        "message": "hi",
    }
    r = requests.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 422


def test_contact_list_sorted_desc():
    r = requests.get(f"{API}/contact", timeout=15)
    assert r.status_code == 200
    lst = r.json()
    assert isinstance(lst, list)
    ts = [x["submitted_at"] for x in lst if "submitted_at" in x]
    assert ts == sorted(ts, reverse=True)


# ---------- Demo ----------
def test_demo_create_valid_and_persist():
    payload = {
        "name": "TEST_Demo",
        "email": "test_demo@example.com",
        "school": "TEST School",
        "students": "500",
        "date": "2026-02-15",
        "time": "10:00",
        "notes": "Please demo KOSMOS ERP",
    }
    r = requests.post(f"{API}/demo", json=payload, timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "id" in data and len(data["id"]) > 0
    assert "submitted_at" in data
    assert data["school"] == payload["school"]
    assert data["date"] == payload["date"]

    g = requests.get(f"{API}/demo", timeout=15)
    assert g.status_code == 200
    lst = g.json()
    assert any(x.get("id") == data["id"] for x in lst)


def test_demo_invalid_email_422():
    payload = {
        "name": "TEST_x",
        "email": "bad@",
        "school": "S",
        "students": "10",
        "date": "2026-02-15",
        "time": "10:00",
        "notes": "",
    }
    r = requests.post(f"{API}/demo", json=payload, timeout=15)
    assert r.status_code == 422


def test_demo_list():
    r = requests.get(f"{API}/demo", timeout=15)
    assert r.status_code == 200
    assert isinstance(r.json(), list)
