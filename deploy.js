#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment preparation...\n');

// Check if git is initialized
try {
  execSync('git status', { stdio: 'ignore' });
  console.log('✅ Git repository detected');
} catch (error) {
  console.log('📝 Initializing git repository...');
  execSync('git init');
  console.log('✅ Git repository initialized');
}

// Check for environment files
const backendEnvExists = fs.existsSync(path.join(__dirname, 'Backend', '.env'));
const frontendEnvExists = fs.existsSync(path.join(__dirname, 'Frontend', '.env'));

if (!backendEnvExists) {
  console.log('⚠️  Backend .env file not found. Please copy from .env.example');
}

if (!frontendEnvExists) {
  console.log('⚠️  Frontend .env file not found. Please copy from .env.example');
}

// Install dependencies
console.log('📦 Installing dependencies...');
try {
  execSync('npm run install-all', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

// Test build
console.log('🔨 Testing production build...');
try {
  execSync('cd Frontend && npm run build', { stdio: 'inherit' });
  console.log('✅ Production build successful');
} catch (error) {
  console.error('❌ Production build failed');
  process.exit(1);
}

console.log('\n🎉 Deployment preparation complete!');
console.log('\n📋 Next steps:');
console.log('1. Push to GitHub: git add . && git commit -m "Deploy ready" && git push');
console.log('2. Deploy to Render or Vercel using the configurations provided');
console.log('3. Set up environment variables on your hosting platform');
console.log('4. Configure MongoDB Atlas connection');

console.log('\n📖 See DEPLOYMENT.md for detailed instructions');