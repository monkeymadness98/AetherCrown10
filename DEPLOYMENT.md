# Deployment Guide

This guide walks you through deploying the Empire Store application to Vercel (frontend) and Render (backend).

## Prerequisites

- GitHub account
- Vercel account (free tier available at [vercel.com](https://vercel.com))
- Render account (free tier available at [render.com](https://render.com))
- Repository pushed to GitHub using HTTPS

## Step 1: Prepare Repository

Ensure your repository is pushed to GitHub:

```bash
git add .
git commit -m "Initial deployment setup"
git push origin main
```

## Step 2: Deploy Frontend to Vercel

### Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository (`AetherCrown10`)
4. Configure the project:
   ```
   Framework Preset: Create React App
   Root Directory: frontend
   Build Command: npm run build
   Output Directory: build
   Install Command: npm install
   ```
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. Your frontend will be live at `https://your-project.vercel.app`

### Using Vercel CLI (Alternative)

```bash
npm install -g vercel
cd frontend
vercel
```

Follow the prompts to link your project.

### Environment Variables (if needed)

Add in Vercel Dashboard → Settings → Environment Variables:
- No environment variables required for basic setup

## Step 3: Deploy Backend to Render

### Using Render Dashboard

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   ```
   Name: aethercrown-backend
   Region: Oregon (US West) or closest to you
   Branch: main
   Root Directory: backend
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```
5. Select "Free" plan
6. Add Environment Variables:
   ```
   PORT = 10000
   NODE_ENV = production
   ```
7. Click "Create Web Service"
8. Wait for deployment (usually 2-3 minutes)
9. Your backend will be live at `https://aethercrown-backend.onrender.com`

### Using render.yaml (Alternative)

The repository includes a `render.yaml` file that Render can auto-detect:

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml`
5. Click "Apply" to create the service

## Step 4: Verify Deployment

### Test Frontend

1. Visit your Vercel URL
2. Verify the landing page loads
3. Check that all sections render correctly
4. Test on mobile device or browser dev tools

### Test Backend

Visit these endpoints on your Render URL:

```bash
# Health check
curl https://your-backend.onrender.com/health

# Get products
curl https://your-backend.onrender.com/api/products

# Test lead submission
curl -X POST https://your-backend.onrender.com/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## Step 5: Enable Auto-Deployment

Both Vercel and Render automatically deploy on git push:

### Vercel
- Automatically deploys on push to main branch
- Creates preview deployments for pull requests
- No additional configuration needed

### Render
- Automatically deploys on push to main branch
- Uses the `render.yaml` configuration
- Monitors the repository for changes

### Test Auto-Deployment

```bash
# Make a small change
echo "# Test deployment" >> README.md

# Commit and push
git add .
git commit -m "test deployment"
git push origin main
```

Watch your Vercel and Render dashboards - both should start building automatically.

## Step 6: Connect Frontend to Backend (Optional)

If you want the frontend to call the backend API:

1. Add backend URL to frontend environment:
   
   In Vercel Dashboard → Settings → Environment Variables:
   ```
   REACT_APP_API_URL = https://your-backend.onrender.com
   ```

2. Update frontend code to use the API:
   ```javascript
   const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';
   
   fetch(`${API_URL}/api/products`)
     .then(res => res.json())
     .then(data => console.log(data));
   ```

3. Redeploy frontend for changes to take effect

## Troubleshooting

### Frontend build fails
- Check that `package.json` is in the frontend directory
- Verify all dependencies are listed in `package.json`
- Check build logs in Vercel dashboard

### Backend deployment fails
- Verify `package.json` scripts include `"start": "node index.js"`
- Check that all required dependencies are installed
- Review logs in Render dashboard

### CORS errors
- Ensure backend has CORS enabled (already configured in `index.js`)
- Add frontend URL to CORS whitelist if needed

### Free tier limitations
- Vercel: Generous free tier, suitable for most projects
- Render: Free tier sleeps after 15 minutes of inactivity (first request may take 30s to wake)

## Deployment URLs

After deployment, save your URLs:

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-backend.onrender.com`

Update these in your documentation and share with stakeholders!

## Next Steps

1. Set up custom domain (optional)
2. Configure SSL certificates (automatic on both platforms)
3. Set up monitoring and analytics
4. Configure backup and disaster recovery
5. Implement CI/CD testing pipeline

## Support

- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- GitHub Issues: Open an issue in your repository

---

🎉 Congratulations! Your application is now deployed with automatic CI/CD pipeline!
