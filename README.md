# MERN Profile App

This repository contains a full-stack MERN profile application split into two separate folders:
- `Backend/` — Express API with MongoDB, authentication, Cloudinary image upload, and password reset flows.
- `Frontend/` — React + Vite UI with registration, login, protected profile page, and password recovery screens.

---

## Project Overview

This project provides a user profile system with:
- user registration with profile image upload to Cloudinary
- login with JWT access and refresh cookies
- protected dashboard/profile page
- password reset via OTP verification
- user profile metadata including bio, about, and skills
- modern React landing page and UI components

---

## Backend

### Location
`Backend/`

### Purpose
The backend is an Express server that manages user authentication, profile registration, password recovery, and image upload.

### Backend Dependencies
- `express`
- `mongoose`
- `bcrypt`
- `jsonwebtoken`
- `dotenv`
- `cookie-parser`
- `cors`
- `multer`
- `cloudinary`
- `nodemon`
- `crypto-js`

### Backend Scripts
- `npm start` — starts `nodemon src/index.js`
- `npm test` — placeholder script

### Important Environment Variables
The backend expects the following variables in `Backend/.env` or your environment:
- `PORT` — server port (defaults to `5000` when unset)
- `MONGO_CONN_STRING` — MongoDB connection URI
- `ACCESS_TOKEN` — JWT secret for access token
- `REFRESH_TOKEN` — JWT secret for refresh token
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

> Note: The frontend currently makes requests to `http://localhost:1100`, so use `PORT=1100` for backend if running locally without port mapping.

### Backend Structure

#### `Backend/src/index.js`
- Loads environment variables
- Connects to MongoDB
- Configures Cloudinary
- Starts the Express server

#### `Backend/src/app.js`
- Creates the Express app
- Enables JSON body parsing, URL-encoded parsing, cookies, and CORS
- Mounts the user routes at `/user`

#### `Backend/src/db/db.js`
- Connects to MongoDB using Mongoose

#### `Backend/src/model/model.js`
- Defines the `User` schema and model
- Stores user fields like `firstName`, `lastName`, `email`, `password`, `image`, `bio`, `about`, `skills`, `otp`, `role`, and `refreshToken`

#### `Backend/src/utils/cloudinary.js`
- Uploads files to Cloudinary
- Removes temporary local files after upload

#### `Backend/src/middleware/multer.Middleware.js`
- Configures Multer disk storage for file uploads
- Saves uploads to `Backend/public/temp`

#### `Backend/src/middleware/auth.Middleware.js`
- Reads JWT from `AccessToken` cookie
- Verifies token with `ACCESS_TOKEN` secret
- Attaches decoded user data to `req.user`

#### `Backend/src/routes/user.route.js`
Defines the user API endpoints:
- `POST /user/register` — register user with image upload
- `POST /user/login` — authenticate user and set cookies
- `POST /user/info` — update additional user info (protected)
- `GET /user/dashboard` — fetch authenticated user dashboard data
- `POST /user/forget-password` — generate and send OTP for reset
- `POST /user/verify-otp` — verify OTP
- `POST /user/update-password` — update password after OTP verification
- `GET /user/auth/check` — verify session/auth status

### Backend Controllers

##### `controller.js`
- Implements login logic
- Validates credentials
- Creates access and refresh tokens
- Sends cookies back to the browser

##### `userRegister.js`
- Handles registration
- Validates email uniqueness
- Hashes password
- Uploads profile image to Cloudinary
- Saves user document

##### `dashboard.js`
- Fetches authenticated user details for the profile page

##### `user.info.js`
- Attempts to append additional user information
- Uses `findByIdAndUpdate` to push a `userInfo` entry

##### `forgetPassword.js`
- Generates a one-time OTP
- Hashes OTP
- Saves OTP in user record
- Returns OTP in response

##### `updatePassword.js`
- Validates new password
- Hashes and updates user password

##### `user.check.js`
- Simple authenticated status response

### Backend Folder Listing

`Backend/`
- `.env`
- `.gitignore`
- `.vscode/`
- `package.json`
- `package-lock.json`
- `public/`
  - `temp/` — temporary upload storage for Multer
- `src/`
  - `app.js`
  - `index.js`
  - `controllers/`
    - `controller.js`
    - `dashboard.js`
    - `forgetPassword.js`
    - `updatePassword.js`
    - `user.check.js`
    - `user.info.js`
    - `userRegister.js`
  - `db/`
    - `db.js`
  - `middleware/`
    - `auth.Middleware.js`
    - `multer.Middleware.js`
  - `model/`
    - `model.js`
  - `routes/`
    - `user.route.js`
  - `utils/`
    - `cloudinary.js`

---

## Frontend

### Location
`Frontend/`

### Purpose
The frontend is a Vite-powered React application with Tailwind CSS styling, supporting:
- home landing page
- registration with image upload
- login flow
- forgot password and OTP verification
- protected profile dashboard

### Frontend Dependencies
- `react`
- `react-dom`
- `react-router-dom`
- `tailwindcss`
- `@tailwindcss/vite`
- `lucide-react`

### Frontend Dev Dependencies
- `vite`
- `@vitejs/plugin-react`
- `eslint`
- `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `globals`
- `@types/react`
- `@types/react-dom`

### Frontend Scripts
- `npm run dev` — start development server
- `npm run build` — build production bundle
- `npm run preview` — preview production build
- `npm run lint` — run ESLint

### Frontend Structure

#### `Frontend/src/main.jsx`
- Mounts React app into DOM
- Imports global styles from `index.css`

#### `Frontend/src/App.jsx`
- Defines application routes with `react-router-dom`
- Pages:
  - `/` — `Home`
  - `/login` — `LoginPage`
  - `/register` — `BasicInfo`
  - `/forget-password` — `ForgetPassword`
  - `/enterOtp` — `EnterOtp`
  - `/update-password` — `UpdatePassword`
  - `/profile` — protected `Main` page

#### `Frontend/src/components/verification/ProtectedRoute.jsx`
- Verifies auth status by calling backend `/user/auth/check`
- Redirects unauthenticated users to `/login`

#### `Frontend/src/components/login/`
- `LoginPage.jsx` — login form and authentication request
- `ForgetPassword.jsx` — request OTP by email
- `EnterOtp.jsx` — submit OTP for verification
- `UpdatePassword.jsx` — enter and confirm a new password

#### `Frontend/src/components/register/`
- `BasicInfo.jsx` — registration form container
- `LeftInfo.jsx` — first name, last name, email, password, profile image
- `RightInfo.jsx` — bio, about, skills input and submit button

#### `Frontend/src/components/profile/`
- `Main.jsx` — profile dashboard page
- `Header.jsx` — profile image and bio section
- `Middle.jsx` — about and skills cards
- `Footer.jsx` — social link footer

#### `Frontend/src/components/home/`
- `Navbar.jsx` — navigation and login/register links
- `Hero.jsx` — landing hero section
- `About.jsx` — about section
- `Products.jsx` — sample products section
- `CTA.jsx` — call-to-action section
- `Footer.jsx` — site footer links
- `Home.jsx` — homepage layout that composes all above sections

### Frontend Root Files
- `index.html` — app entry HTML
- `eslint.config.js` — ESLint configuration
- `vite.config.js` — Vite configuration with React plugin
- `eslint.config.js` — linting rules
- `README.md` — frontend subproject readme (existing)

### Frontend Assets
- `Frontend/src/assets/` — image assets used by UI components
- `Frontend/overview/profileImage.png` — additional static image asset

---

## Running the Project

### Backend
1. Open `Backend/`
2. Install packages:
   ```bash
   npm install
   ```
3. Add or update `.env` with required keys.
4. Start backend server:
   ```bash
   npm start
   ```

### Frontend
1. Open `Frontend/`
2. Install packages:
   ```bash
   npm install
   ```
3. Start the frontend app:
   ```bash
   npm run dev
   ```

### Notes
- The frontend uses `http://localhost:1100` for API calls. If the backend is not running on that exact port, update either the backend `PORT` or the frontend fetch URLs.
- The backend relies on cookie-based auth cookies named `AccessToken` and `RefreshToken`.
- Image uploads during registration are handled by Multer and Cloudinary.

---

## API Summary

### Auth & User
- `POST /user/register` — register new user with profile image upload
- `POST /user/login` — login and set auth cookies
- `GET /user/auth/check` — check authentication status
- `GET /user/dashboard` — get authenticated user profile details

### Password Recovery
- `POST /user/forget-password` — generate OTP for password reset
- `POST /user/verify-otp` — verify OTP
- `POST /user/update-password` — update password after OTP verification

### User Info
- `POST /user/info` — add additional user info (protected route)

---

## File Summary by Folder

### `Backend/src/controllers/`
- `controller.js` — login handler
- `dashboard.js` — dashboard profile response
- `forgetPassword.js` — OTP generation and verification
- `updatePassword.js` — password reset
- `user.check.js` — auth session check
- `user.info.js` — update profile info
- `userRegister.js` — registration with Cloudinary upload

### `Backend/src/middleware/`
- `auth.Middleware.js` — JWT cookie validation
- `multer.Middleware.js` — file upload storage config

### `Frontend/src/components/login/`
- `LoginPage.jsx`
- `ForgetPassword.jsx`
- `EnterOtp.jsx`
- `UpdatePassword.jsx`

### `Frontend/src/components/register/`
- `BasicInfo.jsx`
- `LeftInfo.jsx`
- `RightInfo.jsx`

### `Frontend/src/components/profile/`
- `Header.jsx`
- `Main.jsx`
- `Middle.jsx`
- `Footer.jsx`

### `Frontend/src/components/home/`
- `Navbar.jsx`
- `Hero.jsx`
- `About.jsx`
- `Products.jsx`
- `CTA.jsx`
- `Footer.jsx`
- `Home.jsx`

---

## Recommendations
- Keep backend and frontend running in separate terminals.
- Verify `Backend/.env` secrets before starting.
- Use the same backend port referenced by the frontend.
