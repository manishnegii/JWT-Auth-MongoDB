# JWT AUTHENTICATION API

A backend authentication system built with Node.js, Express, MongoDB, and JWT (JSON Web Token).
It provides user registration, login, protected routes, and token-based authentication.

**🚀 Features**

User registration with encrypted passwords (bcrypt)
User login with JWT-based authentication
Access & refresh token support
Role-based authorization (optional)
MongoDB integration with Mongoose
Middleware for authentication and error handling
REST API ready for frontend integration

**⚙️ Installation & Setup**

1. Clone the repository
git clone https://github.com/yourusername/jwt-auth-mongodb.git
cd jwt-auth-mongodb

2. Install dependencies
npm install

3. Set up environment variables

Create a .env file in the root directory and configure it as follows:

PORT=4000
MONGO_URI=//YOUR DB CONNECTION URL
JWT_SECRET=your_jwt_secret

4. Run the server
npm start

or with nodemon (dev mode):
npm run dev

**🔒 Security**
Passwords are hashed with bcrypt
JWT tokens are signed with strong secrets
Refresh tokens are stored securely
Middleware ensures only authorized users can access protected routes

**🛠️ Tech Stack**
Node.js
Express
MongoDB + Mongoose
JWT
bcrypt
