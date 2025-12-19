# Quiz Portal - MERN Stack Application

A full-stack quiz application built with MongoDB, Express.js, React, and Node.js.

## 🚀 Features

- User authentication and authorization
- Interactive quiz system
- Real-time leaderboard
- Admin panel for quiz management
- Responsive design
- Feedback system

## 📁 Project Structure

```
MernQuiz/
├── Backend/                 # Node.js/Express API
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js          # Entry point
├── Frontend/              # React application
│   ├── public/           # Static files
│   ├── src/              # React components
│   └── package.json      # Frontend dependencies
└── package.json          # Root package.json
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd MernQuiz
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   # Backend
   cp Backend/.env.example Backend/.env
   # Frontend
   cp Frontend/.env.example Frontend/.env
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Backend server on http://localhost:5000
   - Frontend server on http://localhost:3000

## 🚀 Deployment

### Deploy to Render

1. **Backend Service**
   - Build Command: `cd Backend && npm install`
   - Start Command: `cd Backend && npm start`
   - Environment: Node

2. **Frontend Service**
   - Build Command: `cd Frontend && npm install && npm run build`
   - Publish Directory: `Frontend/build`
   - Environment: Static Site

### Deploy to Vercel

1. **Connect your GitHub repository to Vercel**
2. **The `vercel.json` configuration will handle the deployment**
3. **Set environment variables in Vercel dashboard**

### Environment Variables

#### Backend (.env)
```
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=your_frontend_url
```

#### Frontend (.env)
```
REACT_APP_API_URL=your_backend_api_url
REACT_APP_ENVIRONMENT=production
```

## 📝 Available Scripts

### Root Level
- `npm run install-all` - Install all dependencies
- `npm run dev` - Start both frontend and backend in development
- `npm run start` - Start backend server
- `npm run build` - Build frontend for production

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Quiz
- `GET /api/quiz/all` - Get all quizzes
- `POST /api/quiz/submit` - Submit quiz answers
- `GET /api/quiz/results` - Get quiz results

### System
- `GET /api/status` - Check system status

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Issues

If you encounter any issues, please create an issue on GitHub with detailed information about the problem.