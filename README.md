Authentication & Role-Based Access Control (RBAC) API

This project implements a secure authentication system using Node.js, Express.js, MongoDB (Atlas), and AWS. Users can log in and access APIs based on their roles (Admin, Shipper, Carrier).

Features
User authentication with JWT

Password hashing with bcryptjs

Role-Based Access Control (RBAC)

MongoDB Atlas integration

Secure API routes based on user roles

Getting Started
Prerequisites
Make sure you have the following installed:

Node.js

MongoDB Atlas

Postman (for testing API requests)

1. Clone the Repository

git clone https://github.com/Keys-digital/auth-rbac-api.git
cd auth-rbac-api 

2. Install Dependencies

npm install

This installs required packages:

express – Web framework

mongoose – MongoDB ODM

dotenv – Loads environment variables

bcryptjs – Hashing passwords

jsonwebtoken – Handling JWT tokens

cors – Cross-Origin Resource Sharing

express-validator – Validating user input

nodemon (for development mode)


3. Set Up Environment Variables

   Create a .env file in the project root and add:

ini
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_very_secret_key 4. Run the Server

For development mode (auto-restarts on changes):

npm run dev

For production mode:

npm start

The server should be running on http://localhost:5000.

API Routes

1. Authentication Routes
   Method Endpoint Description
   POST /api/auth/register Register a new user
   POST /api/auth/login Authenticate user & get JWT
   Sample User Registration Request:

json
{
"name": "John Doe",
"email": "johndoe@example.com",
"password": "password123",
"role": "Shipper"
}

Sample Login Request:

json
{
"email": "johndoe@example.com",
"password": "password123"
} 

2. Protected Routes (RBAC)
Method Endpoint Required Role
GET /api/protected/admin Admin
GET /api/protected/shipper Shipper
GET /api/protected/carrier Carrier
To access protected routes, include the JWT token in the Authorization header:

Authorization: Bearer your_jwt_token

Project Structure
/auth-rbac-api
├── models/
│ ├── User.js
├── routes/
│ ├── auth.js
│ ├── protected.js
├── middleware/
│ ├── auth.js
├── .env
├── index.js
├── package.json

Deployment

Deploy on AWS

Set environment variables on the hosting platform

Push code to GitHub:

git add .
git commit -m "Initial commit"
git push origin main
License
This project is licensed under the MIT License.

Author
Eseoghene Light Ikoyo
GitHub: Keys-digital
