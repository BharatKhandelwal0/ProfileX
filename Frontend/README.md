# Frontend - MERN Profile App

This frontend is a React + Vite application for the MERN profile app.

## Overview

The frontend includes a modern landing page, registration flow, login flow, password recovery, and a protected user profile dashboard.

## Key Features

- Home landing page with hero, about, products, and CTA sections
- User registration with image upload
- Login with cookie-based authentication
- Forgot password and OTP verification flow
- Protected profile dashboard using authenticated API calls

## Important Files

- `src/main.jsx` — React app entrypoint
- `src/App.jsx` — application routes and page components
- `src/components/home/` — landing page UI sections
- `src/components/login/` — login, forgot password, OTP, and update password pages
- `src/components/register/` — registration form and skill input components
- `src/components/profile/` — authenticated dashboard UI
- `src/components/verification/ProtectedRoute.jsx` — route protection using backend auth check

## Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Notes

- Frontend API requests target `http://localhost:1100`.
- Ensure the backend is running first to use registration, login, and profile pages.
