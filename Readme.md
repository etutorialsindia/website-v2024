# LMS (Learning Management System)
## Overview
This is a Learning Management System (LMS) built with Express.js for the backend and React for the frontend. The system allows admins to manage users and courses, instructors to create and manage courses, and students to enroll in and complete courses. The LMS supports features like user authentication, role-based access control, course content management, and progress tracking.

## Table of Contents
1. [Features](#features)
1. [Tech Stack](#tech-stack)
1. [Project Structure](#project-structure)
1. [Installation](#installation)
1. [Modules](#modules)
    1. Authentication
    1. User Management
    1. Course Management
    1. Lesson & Quiz Management
    1. Enrollment & Progress Tracking
    1. File Uploads
    1. Email Notifications
1. Testing
1. Deployment
1. Future Enhancements
## Features <a name="features"></a>
* User authentication and authorization with JWT.
* Role-based access control (Admin, Instructor, Student).
* Course creation and management by instructors.
* Lesson and quiz management within courses.
* Student enrollment and progress tracking.
* File uploads for course content.
* Email notifications for user actions (e.g., enrollments).
* Responsive design with a user-friendly interface.
## Tech Stack <a name="tech-stack"></a>
* **Frontend:** React, Redux, Axios, React Router DOM
* **Backend:** Express.js, Mongoose, JWT, Bcryptjs, Multer, Nodemailer
* **Database:** MongoDB (MongoDB Atlas)
* **Deployment:** Docker Container (VPS Hosted)
## Project Structure <a name="project-structure"></a>
### Backend (Express.js)
```bash
/backend
│   ├── config/             # Configuration files (e.g., database connection)
│   ├── controllers/        # Express route controllers for handling requests
│   ├── models/             # Mongoose models for MongoDB collections
│   ├── routes/             # Express route definitions
│   ├── middlewares/        # Custom middleware for handling auth, etc.
│   ├── utils/              # Utility functions (e.g., email sending)
│   ├── index.js            # Entry point of the Express server
│   └── .env                # Environment variables
```
### Frontend (React)
```bash
/frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Reusable components (e.g., forms, buttons)
│   │   ├── pages/          # Pages (e.g., Login, Dashboard, CourseDetail)
│   │   ├── redux/          # Redux actions, reducers, and store setup
│   │   ├── utils/          # Utility functions (e.g., API requests)
│   │   ├── App.js          # Main React component
│   │   ├── index.js        # Entry point of the React application
│   └── .env                # Environment variables
```
## Installation <a name="installation"></a>
```bash
# Run publish script on server
./publish.sh
```
## Modules <a name="modules"></a>
### Authentication
* **Description:** Handles user registration, login, and authentication using JWT.
* **Roles:** Admin, Instructor, Student.
* **Routes:**
    * POST /api/auth/register
    * POST /api/auth/login
    * GET /api/auth/me (Get logged-in user info)
### User Management
* **Description:** Allows admins to manage users (CRUD operations).
* **Roles:** Admin.
* **Routes:**
    * GET /api/users (List all users)
    * PUT /api/users/:id (Update user role)
### Course Management
* **Description:** Enables instructors to create, update, and delete courses.
* **Roles:** Instructor, Admin.
* **Routes:**
    * POST /api/courses (Create a new course)
    * GET /api/courses (List all courses)
    * PUT /api/courses/:id (Update course details)
    * DELETE /api/courses/:id (Delete a course)
### Lesson & Quiz Management
* **Description:** Allows instructors to add lessons and quizzes to courses.
* **Roles:** Instructor.
* **Routes:**
    * POST /api/courses/:courseId/lessons (Add a lesson to a course)
    * POST /api/courses/:courseId/quizzes (Add a quiz to a course)
    * GET /api/courses/:courseId/lessons (List all lessons in a course)
### Enrollment & Progress Tracking
* **Description:** Manages student enrollment in courses and tracks their progress.
* **Roles:** Student.
* **Routes:**
    * POST /api/courses/:courseId/enroll (Enroll in a course)
    * GET /api/courses/:courseId/progress (Get student’s progress in a course)
### File Uploads
* **Description:** Handles file uploads for course materials using Multer.
* **Roles:** Instructor.
* **Routes:**
    * POST /api/upload (Upload course files)
### Email Notifications
* **Description:** Sends email notifications for actions like course enrollment.
* **Utility:** Nodemailer is used to send emails.
* **Examples:**
    * Course enrollment confirmation
    * Quiz results notification
## Testing
* **Backend:** Mocha, Chai.
* **Frontend:** Jest, React Testing Library.
* **Commands:**
    * **Backend:** 
        ``` 
        npm test 
        ```
    * **Frontend:**
        ``` 
        npm test 
        ```
## Deployment
Build and upload on server using publish script
```bash
./publish.sh
```
## Future Enhancements
* **Real-Time Chat:** Implement chat functionality between students and instructors.
* **Payment Integration:** Add Stripe or PayPal integration for paid courses.
* **Analytics Dashboard:** Provide detailed analytics for course performance and user engagement.