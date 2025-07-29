E-commerce Clothing App (MERN Stack)

A full-stack e-commerce application built using MongoDB, Express, React, and Node.js.
Includes user authentication (Signup/Login), backend API, and frontend UI.

Folder Structure:

Ecommerce-Clothing-React-App/
├── server/                     # Backend (Node.js + Express)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env                    # MongoDB URI & PORT (keep secret)
│   ├── index.js                # Entry point for backend
│   └── package.json
├── src/                        # Frontend (React)
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── README.md
└── package.json               # Frontend dependencies

How to Run This Project:

1. Prerequisites
- Node.js installed (v16+)
- MongoDB (Local or Atlas)
- npm or yarn

2. Clone the Repository
$ git clone https://github.com/<your-username>/React-E-commerce--Projects.git
$ cd React-E-commerce--Projects/Ecommerce-Clothing-React-App

3. Backend Setup
$ cd server
$ npm install

Create a .env file inside server/ folder:
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce_clothing_app
PORT=5000

Start the backend server:
$ npm start
# or
$ npx nodemon index.js

Backend test route: http://localhost:5000

4. Frontend Setup (React)
$ cd ..
$ npm install
$ npm run dev

Frontend will run at: http://localhost:5173

Sample API Endpoints:
- POST /api/auth/signup → Register user
- POST /api/auth/login → Login user

Features:
- User signup & login (MongoDB)
- REST API using Express
- React frontend with Tailwind CSS
- Clean code structure (MVC)
- Environment variable support via .env

Author:
Made with ❤️ by Nitin Sahu (https://www.linkedin.com/in/nitin-sahu-164a63250)

