# Deployment Guide

## 🚀 Quick Deployment Steps

### 1. GitHub Setup
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Render Deployment

#### Backend Service
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `quiz-portal-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd Backend && npm install`
   - **Start Command**: `cd Backend && npm start`
   - **Instance Type**: Free

#### Frontend Service
1. Click "New" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `quiz-portal-frontend`
   - **Build Command**: `cd Frontend && npm install && npm run build`
   - **Publish Directory**: `Frontend/build`

#### Environment Variables (Backend)
```
NODE_ENV=production
MONGODB_URI=<your-mongodb-atlas-uri>
JWT_SECRET=<your-jwt-secret>
CORS_ORIGIN=<your-frontend-url>
```

### 3. Vercel Deployment

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`
4. Set environment variables in Vercel dashboard

### 4. MongoDB Atlas Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create new cluster
3. Create database user
4. Whitelist IP addresses (0.0.0.0/0 for all)
5. Get connection string
6. Update MONGODB_URI in environment variables

## 🔧 Production Checklist

- [ ] Environment variables configured
- [ ] MongoDB Atlas cluster created
- [ ] CORS origins updated
- [ ] API URLs updated in frontend
- [ ] Build process tested locally
- [ ] All dependencies installed
- [ ] .env files not committed to git

## 🐛 Common Issues

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are listed in package.json
- Ensure build commands are correct

### Database Connection
- Verify MongoDB URI format
- Check network access settings in Atlas
- Confirm database user permissions

### CORS Issues
- Update CORS_ORIGIN environment variable
- Check frontend API URL configuration