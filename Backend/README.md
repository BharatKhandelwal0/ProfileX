# Backend - MERN Profile App

This backend is the Express / MongoDB API for the MERN profile application.

## Overview

The backend provides user authentication, registration, profile management, password reset via OTP, and image upload support using Cloudinary.

## Key Features

- User registration with profile image upload
- Login with JWT access and refresh tokens stored in cookies
- Protected routes for authenticated user data
- Dashboard data retrieval
- Password reset with OTP verification
- MongoDB user model with role, bio, about, skills, and refresh token storage

## Important Files

- `src/index.js` — application entry point, database connection, Cloudinary setup, server startup
- `src/app.js` — Express app configuration, CORS, body parsing, route mounting
- `src/db/db.js` — Mongoose database connection
- `src/model/model.js` — Mongoose `User` schema definition
- `src/routes/user.route.js` — user API routes
- `src/middleware/auth.Middleware.js` — JWT cookie-based authentication middleware
- `src/middleware/multer.Middleware.js` — file upload configuration with Multer
- `src/utils/cloudinary.js` — Cloudinary file upload helper
- `src/controllers/` — authentication, registration, dashboard, password reset, and profile info controllers

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with required values:
   ```env
   PORT=1100
   MONGO_CONN_STRING=<your-mongo-uri>
   ACCESS_TOKEN=<your-access-token-secret>
   REFRESH_TOKEN=<your-refresh-token-secret>
   CLOUDINARY_CLOUD_NAME=<cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<cloudinary-api-key>
   CLOUDINARY_API_SECRET=<cloudinary-api-secret>
   ```
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /user/register`
- `POST /user/login`
- `GET /user/dashboard`
- `POST /user/info`
- `POST /user/forget-password`
- `POST /user/verify-otp`
- `POST /user/update-password`
- `GET /user/auth/check`

## Notes

The frontend expects the backend at `http://localhost:1100`.
`Backend/public/temp` is used as temporary storage for uploaded images before Cloudinary upload.
