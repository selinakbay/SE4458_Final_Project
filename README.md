# Doctor Appointment System

# Overview

This project is a Doctor Appointment Booking System that allows patients to search for doctors, book appointments, and leave reviews. Doctors can manage their schedules and approve patient appointments.

# Tech Stack:

Backend: Node.js, Express, MongoDB

Frontend: React.js

Authentication: Google OAuth & JWT

Queue Processing: RabbitMQ for email notifications

Deployment: Docker, Cloud-ready

Features

✅ Backend (Node.js & Express)

Google OAuth & JWT Authentication

Role-based Access Control (Doctors & Patients)

RESTful API with secure endpoints

MongoDB database integration

RabbitMQ for processing notifications

# Frontend (React.js)

User-friendly UI for booking appointments

Google Login authentication

Doctor search & profile pages

Appointment booking & cancellation

# Database (MongoDB)

Optimized schema for doctors, patients, and appointments

Indexed queries for fast searching

# Deployment (Docker & Cloud)

Dockerfile & Docker Compose included

Ready for deployment on AWS, Azure, Render

# API Endpoints

Authentication

POST /login → JWT login

GET /auth/google → Google OAuth Login

Doctors

GET /doctors → List all doctors

POST /doctors → Register a new doctor

Appointments

GET /appointments → Get all appointments

POST /appointments → Book an appointment

DELETE /appointments/:id → Cancel appointment

# Contributors

Selin Akbay
