from fastapi import FastAPI
from .database import Base, engine
from routers import users, assignments, submissions

# Create all tables in the database
Base.metadata.create_all(bind=engine)

# FastAPI app instance
app = FastAPI(title="EdTech Assignment Tracker")

# Include route modules
app.include_router(users.router)
app.include_router(assignments.router)
app.include_router(submissions.router)
