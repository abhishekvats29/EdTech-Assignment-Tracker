from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas, auth
from app.auth import get_db, get_current_user

router = APIRouter()

@router.post("/assignments", response_model=schemas.AssignmentOut)
def create_assignment(assignment: schemas.AssignmentCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    if user.role != "teacher":
        raise HTTPException(status_code=403, detail="Only teachers can create assignments")
    
    new_assignment = models.Assignment(**assignment.dict(), teacher_id=user.id)
    db.add(new_assignment)
    db.commit()
    db.refresh(new_assignment)
    return new_assignment
