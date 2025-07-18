
# MERN Stack Application

## Overview
This is a full-stack MERN (MongoDB, Express.js, React, Node.js) application built as part of Week 7 of a coding bootcamp. The application allows users to register, log in, create posts, and view post details, with JWT-based authentication. The frontend is built with React and Vite, styled with Tailwind CSS, and deployed on Vercel. The backend uses Express.js and MongoDB, deployed on Render. The project includes a CI/CD pipeline with GitHub Actions, linting with ESLint, and monitoring with UptimeRobot and Sentry.

## URLs
- **Frontend (Production)**: https://mern-week-7-project.vercel.app


## CI/CD

**Pipeline**: Configured using GitHub Actions to automate linting, testing, and building for both frontend and backend.  
**Workflow**: [Link to GitHub Actions workflow]  
  

**Details**:
- **Linting**: ESLint for JavaScript files in `client/` and `server/`.
- **Testing**: Jest for unit tests (configured to pass with no tests for initial setup).
- **Build**: Vite build for frontend (`pnpm run build`) and backend validation.
- **Trigger**: Runs on push to `main` and `staging` branches.

## Monitoring

- **Uptime Monitoring**: UptimeRobot monitors the frontend (`https://your-app.vercel.app`) and backend health endpoint (`https://mern-week-7.onrender.com/health`) every 5 minutes.
- **Error Tracking**: Sentry is integrated for both frontend (`client/src/index.js`) and backend (`server/index.js`) to capture runtime errors and performance issues.
- **Performance**: Lighthouse reports generated via Chrome DevTools, combined with Sentry performance monitoring.
- **Screenshots**: [Insert or link to UptimeRobot and Sentry dashboards]

## Deployment

### Clone the Repository:
```bash
git clone [your-repo-url]
cd mern-week-7
```

### Backend (Render):
- **Directory**: `server/`
- **Install dependencies**: `pnpm install`
- **Environment variables** (in Render dashboard or `server/.env`):
  ```env
  PORT=5000
  MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/<dbname>
  NODE_ENV=production
  JWT_SECRET=your-secret-key
  ```
- **Start**: `node index.js`
- **Deploy**: Push to `main` or `staging` branch with auto-deploy enabled in Render.

### Frontend (Vercel):
- **Directory**: `client/`
- **Install dependencies**: `pnpm install`
- **Environment variables** (in Vercel dashboard or `client/.env.production`):
  ```env
  REACT_APP_API_URL=https://mern-week-7.onrender.com/api
  ```
- **Build**: `pnpm run build`
- **Output**: `dist/`
- **Deploy**: Push to `main` or `staging` branch with auto-deploy enabled in Vercel.

## Rollback

- **Revert Changes**: If a deployment fails, revert to the previous commit:
  ```bash
  git revert <commit-hash>
  git push origin main
  ```
- **Redeploy Previous Build**: In Vercel or Render, select a previous successful build from the Deployments tab and redeploy.
- **Backup**: MongoDB Atlas backups are enabled for data recovery.

## Maintenance

- **Weekly Updates**:
  ```bash
  cd client
  pnpm update
  cd ../server
  pnpm update
  ```
- **Backups**: Daily automated backups configured in MongoDB Atlas (Atlas > Cluster > Backups).
- **Monitoring**: Regularly check UptimeRobot for uptime alerts and Sentry for error reports.
- **Performance**: Run Lighthouse audits weekly to ensure optimal frontend performance.

## Local Development

### Backend:
```bash
cd server
pnpm install
node index.js
```
Ensure MongoDB is running locally or use MongoDB Atlas.

### Frontend:
```bash
cd client
pnpm install
pnpm run dev
```
Access at `http://localhost:5173`.

