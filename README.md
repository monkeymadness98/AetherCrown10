# AetherCrown10 - Empire Store

A modern, full-stack e-commerce application with automated deployment pipeline.

## 🚀 Features

- **Clean Landing Page**: Responsive storefront with hero section, CTA, and product showcase
- **Backend API**: RESTful API with Express.js for transactions, leads, and product inventory
- **Auto-Deployment**: Automated CI/CD pipeline via Vercel (frontend) and Render (backend)
- **Mobile-First**: Fully responsive design optimized for all devices
- **Fast Performance**: Production build loads in under 2 seconds

## 📁 Project Structure

```
AetherCrown10/
├── frontend/          # React application
│   ├── public/       # Static assets
│   ├── src/          # React components and styles
│   │   ├── App.js    # Main landing page component
│   │   ├── App.css   # Responsive styling
│   │   └── index.js  # React root
│   └── package.json
├── backend/          # Express API server
│   ├── index.js      # Main server file
│   ├── .env.example  # Environment variables template
│   └── package.json
├── vercel.json       # Vercel deployment config
└── render.yaml       # Render deployment config
```

## 🛠️ Local Development

### Prerequisites

- Node.js 14+ and npm
- Git

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
npm install
npm start
```

The backend will run on `http://localhost:5000`

## 📦 Build for Production

### Frontend Build

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build/` directory.

### Backend Build

The backend runs directly with Node.js - no build step required.

## 🌐 Deployment

### Vercel (Frontend)

1. Connect your GitHub repository to Vercel
2. Configure the project:
   - **Framework**: Create React App
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
3. Deploy - Vercel will auto-deploy on every push to main

### Render (Backend)

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Use the `render.yaml` configuration (auto-detected)
4. Deploy - Render will auto-deploy on every push to main

## 🔧 API Endpoints

### GET `/`
Health check endpoint
```json
{ "message": "Backend running 🚀", "status": "success" }
```

### GET `/health`
Server health status
```json
{ "status": "healthy", "timestamp": "2025-10-20T05:00:00.000Z" }
```

### GET `/api/products`
Get all products
```json
{
  "products": [
    { "id": 1, "name": "Premium Product", "price": 99, "description": "High-quality premium item" }
  ],
  "total": 3
}
```

### POST `/api/leads`
Submit a lead form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Interested in products"
}
```

### POST `/api/transactions`
Process a transaction (mock)
```json
{
  "productId": 1,
  "quantity": 2,
  "customerInfo": { "name": "Jane Doe", "email": "jane@example.com" }
}
```

## 🔄 Automated Deployment Workflow

Every push to the repository triggers:

1. **Frontend**: Vercel builds and deploys the React app
2. **Backend**: Render builds and deploys the Express API
3. Both deployments complete automatically without manual intervention

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🎨 Design Features

- Modern gradient hero section
- Clean product cards with hover effects
- Smooth animations and transitions
- Mobile-friendly navigation
- Optimized images and assets

## 📊 Performance

- **Build Size**: ~1.1MB (gzipped)
- **Load Time**: < 2 seconds
- **Lighthouse Score**: Optimized for performance

## 🔒 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=production
```

## 📝 License

ISC

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📧 Support

For issues and questions, please open an issue in the GitHub repository.

---

Built with ❤️ using React and Express