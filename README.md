# 🎓 Student Management System (MERN Stack)

A full-stack Student Management System built using the MERN Stack. This application allows users to register, log in, and manage student records with complete CRUD functionality.

---

## 🚀 Features

- User Registration
- User Login (Authentication)
- Add Student
- View All Students
- Update Student Details
- Delete Student
- Responsive User Interface
- RESTful API
- MongoDB Database Integration

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- dotenv
- CORS

---

## 📂 Project Structure

```
Student-Management-System/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Student-Management-System.git
```

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder.

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server.

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file.

```env
VITE_API_URL=http://localhost:5000/api/students
```

Run the frontend.

```bash
npm run dev
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /register | Register User |
| POST | /login | Login User |
| GET | /students | Get All Students |
| GET | /students/:id | Get Single Student |
| POST | /students | Add Student |
| PUT | /students/:id | Update Student |
| DELETE | /students/:id | Delete Student |

---

## 📸 Screenshots

You can add screenshots of:

- Registration Page
- Login Page
- Dashboard
- Add Student
- Update Student

---

## 👨‍💻 Author

**Aswah Rani**

GitHub: https://github.com/Aswah-Rani

LinkedIn: https://www.linkedin.com/in/aswah-rani-7a764b402

---

## 📄 License

This project is developed for learning purposes.
