from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# User
class UserCreate(BaseModel):
    name: str
    email: str
    password: str
    role: str  # student or teacher

class UserOut(BaseModel):
    id: int
    name: str
    email: str
    role: str
    class Config:
        orm_mode = True

# Token
class Token(BaseModel):
    access_token: str
    token_type: str

# Assignment
class AssignmentCreate(BaseModel):
    title: str
    description: str
    due_date: str

class AssignmentOut(BaseModel):
    id: int
    title: str
    description: str
    due_date: str
    teacher_id: int
    class Config:
        orm_mode = True

# Submission
class SubmissionCreate(BaseModel):
    content: str

class SubmissionOut(BaseModel):
    id: int
    content: str
    timestamp: datetime
    student_id: int
    class Config:
        orm_mode = True
