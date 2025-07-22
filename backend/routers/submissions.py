from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import models, schemas, auth
from app.auth import get_db, get_current_user

router = APIRouter()

@router.post("/assignments/{assignment_id}/submit", response_model=schemas.SubmissionOut)
def submit_assignment(assignment_id: int, submission: schemas.SubmissionCreate, db: Session = Depends(get_db), user=Depends(get_current_user)):
    if user.role != "student":
        raise HTTPException(status_code=403, detail="Only students can submit assignments")

    existing = db.query(models.Submission).filter_by(student_id=user.id, assignment_id=assignment_id).first()
    if existing:
        raise HTTPException(status_code=400, detail="Already submitted")

    new_submission = models.Submission(**submission.dict(), assignment_id=assignment_id, student_id=user.id)
    db.add(new_submission)
    db.commit()
    db.refresh(new_submission)
    return new_submission

@router.get("/assignments/{assignment_id}/submissions", response_model=list[schemas.SubmissionOut])
def get_submissions(assignment_id: int, db: Session = Depends(get_db), user=Depends(get_current_user)):
    assignment = db.query(models.Assignment).filter(models.Assignment.id == assignment_id).first()
    if not assignment or assignment.teacher_id != user.id:
        raise HTTPException(status_code=403, detail="Only the teacher can view submissions")

    return db.query(models.Submission).filter_by(assignment_id=assignment_id).all()
