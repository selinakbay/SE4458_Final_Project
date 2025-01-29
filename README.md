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


# 1. System Design & Architecture

The Doctor Appointment System follows a client-server architecture, with concerns separated between the front end, back end, and database.

# Tech Stack:

Frontend: React.js (Vercel Deployment)

Backend: Node.js, Express.js (Render Deployment)

Database: MongoDB (Atlas Cloud)

Authentication: Google OAuth & JWT

Queue Processing: RabbitMQ (for notifications)

Deployment: Docker, Render, Vercel

# High-Level Flow:

User Authentication

Patients and doctors log in using Google OAuth.

JWT tokens are issued for session management.

Doctor & Patient Management

Doctors register their profiles and availability.

Patients search for doctors based on specialty and book appointments.

Appointments & Notifications

Patients schedule appointments, which are stored in MongoDB.

RabbitMQ is used to queue notifications (e.g., reminders for pending appointments).

Doctor Reviews & Ratings

After an appointment, patients can leave a review.

Reviews are filtered for inappropriate language before storage.

# 2. Assumptions Made

Doctor Approval:

An admin manually approves doctors before they appear in search results.

Appointment Restrictions:

Patients cannot book overlapping appointments.

Doctors cannot double-book a time slot.

Data Storage:

MongoDB is used due to its flexibility in handling semi-structured doctor profiles and appointment records.

Security Measures:

All API requests require authentication.

Role-based access ensures patients cannot modify doctor records.

# 3. Challenges & Issues Faced

Dependency Conflicts in Frontend

The react-google-login package does not support React 18.

Solution: Replaced with Google Identity Services SDK.

Handling Notifications Efficiently

Sending thousands of appointment reminders required an async queue.

Solution: Implemented RabbitMQ for queued notifications.

Deploying MongoDB in a Secure Way

MongoDB Atlas blocks external connections by default.

Solution: Allowed access from whitelisted IPs & used environment variables for credentials.

# 4. Conclusion

This system ensures an efficient and secure appointment booking process for doctors and patients. It is scalable and cloud-ready, allowing future enhancements such as telemedicine features or payment integrations.

# Contributors

Selin Akbay
