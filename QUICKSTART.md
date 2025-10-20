# Quick Start Guide

## 🚀 Empire Store - AetherCrown10

This repository contains a complete full-stack e-commerce application ready for deployment.

## What's Included

✅ **Frontend** - React application with responsive landing page  
✅ **Backend** - Express.js REST API  
✅ **Deployment Configs** - Vercel (frontend) + Render (backend)  
✅ **CI/CD Pipeline** - GitHub Actions for automated testing  
✅ **Documentation** - Complete setup and deployment guides  

## Fastest Way to Deploy

### Option 1: One-Click Deploy (Recommended)

**Frontend (Vercel)**
1. Go to [vercel.com](https://vercel.com)
2. Import this repository
3. Set root directory to `frontend`
4. Click Deploy ✨

**Backend (Render)**
1. Go to [render.com](https://render.com)
2. Import this repository as a Blueprint
3. It will auto-detect `render.yaml`
4. Click Apply ✨

### Option 2: Manual Setup

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Local Development

```bash
# Frontend
cd frontend
npm install
npm start

# Backend (in another terminal)
cd backend
npm install
npm start
```

## Test the Application

**Frontend**: http://localhost:3000  
**Backend**: http://localhost:5000

## Key Features

- 🎨 Modern, responsive design
- ⚡ Fast load times (< 2 seconds)
- 📱 Mobile-first approach
- 🔄 Auto-deployment on git push
- 🛡️ CORS-enabled API
- 📊 Ready for payment integration

## Architecture

```
┌─────────────┐         ┌─────────────┐
│   Vercel    │         │   Render    │
│  (Frontend) │ ◄─────► │  (Backend)  │
└─────────────┘         └─────────────┘
      │                       │
      └───────────────────────┘
              │
        ┌─────▼─────┐
        │  GitHub   │
        │  (Source) │
        └───────────┘
```

## API Endpoints

- `GET /` - Health check
- `GET /health` - Server status
- `GET /api/products` - List products
- `POST /api/leads` - Submit lead form
- `POST /api/transactions` - Process transaction

## Next Steps After Deployment

1. ✅ Get your deployment URLs
2. ✅ Update frontend to call backend API
3. ✅ Set up custom domain (optional)
4. ✅ Configure payment gateway
5. ✅ Add monitoring and analytics

## Support

- 📖 Full docs: [README.md](./README.md)
- 🚀 Deployment: [DEPLOYMENT.md](./DEPLOYMENT.md)
- 🐛 Issues: Open a GitHub issue

---

**Built with**: React 19, Express 5, Node.js 18+

**Deploy Time**: ~5 minutes total 🚀
