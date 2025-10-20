# AetherCrown10 🚀

A production-ready full-stack web application with automated testing, CI/CD, structured logging, and comprehensive monitoring capabilities.

## Features

- ✅ Production-ready backend with Express.js
- ✅ API versioning (v1) for future compatibility
- ✅ Comprehensive testing with Jest & Supertest
- ✅ Automated CI/CD with GitHub Actions
- ✅ Code quality enforcement (ESLint & Prettier)
- ✅ Pre-commit hooks with Husky & lint-staged
- ✅ Structured logging with Winston & Morgan
- ✅ Environment validation with Envalid
- ✅ Health check endpoints for monitoring
- ✅ CORS configuration for security
- ✅ Frontend with Next.js and status dashboard
- ✅ Graceful shutdown handling

## Project Structure

```
AetherCrown10/
├── backend/
│   ├── src/
│   │   ├── app.js                 # Express app configuration
│   │   ├── routes/
│   │   │   ├── status.js          # API v1 status endpoint
│   │   │   └── health.js          # Health check endpoint
│   │   ├── middleware/
│   │   │   ├── notFound.js        # 404 handler
│   │   │   └── errorHandler.js   # Global error handler
│   │   └── utils/
│   │       ├── logger.js          # Winston logger
│   │       └── env.js             # Environment validation
│   ├── __tests__/
│   │   └── status.test.js         # API tests
│   ├── index.js                   # Application entry point
│   ├── package.json
│   ├── .env.example               # Environment template
│   ├── .eslintrc.js               # ESLint config
│   └── .prettierrc                # Prettier config
├── frontend/
│   ├── pages/
│   │   ├── index.js               # Home page
│   │   ├── status.js              # Status dashboard
│   │   └── _app.js                # Next.js app wrapper
│   ├── package.json
│   └── .env.example               # Frontend env template
├── .github/
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI
├── .husky/
│   └── pre-commit                 # Pre-commit hook
├── .gitignore
└── README.md

```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Edit `.env` with your configuration:**
   ```env
   NODE_ENV=development
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   LOG_LEVEL=info
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

   The backend will be available at `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env.local
   ```

4. **Edit `.env.local` with your backend URL:**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:3000`

## Available Scripts

### Backend

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload (nodemon)
- `npm test` - Run all tests with coverage
- `npm run test:watch` - Run tests in watch mode
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run check:lint` - Check for linting errors
- `npm run check:format` - Check code formatting

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run Next.js linting

## API Endpoints

### Root Endpoint
- **GET /** - Backend status with version info
  ```json
  {
    "message": "Backend is live 🚀",
    "version": "1.0.0",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

### Health Check
- **GET /health** - Health status for monitoring
  ```json
  {
    "status": "ok",
    "uptime": 123.456,
    "version": "1.0.0",
    "environment": "development",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

### API v1
- **GET /api/v1/status** - API operational status
  ```json
  {
    "success": true,
    "message": "API is operational",
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
  ```

## Testing

### Running Tests Locally

```bash
cd backend
npm test
```

This will:
- Run all test suites
- Generate coverage reports
- Display test results in the console

### Test Coverage

The project aims for >80% test coverage. Current coverage includes:
- API endpoint tests
- Health check tests
- Error handling tests
- 404 route handling

### Watch Mode

For development, use watch mode:
```bash
npm run test:watch
```

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and deployment testing.

### Workflow Triggers

The CI pipeline runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

### CI Jobs

1. **Backend Tests & Linting**
   - Installs dependencies
   - Runs ESLint checks
   - Runs Prettier formatting checks
   - Executes all tests with coverage

2. **Frontend Build**
   - Installs dependencies
   - Builds the frontend application
   - Verifies successful compilation

### Viewing CI Results

- Go to the "Actions" tab in GitHub
- Click on a workflow run to see detailed results
- Failed jobs will show error details and logs

## Code Quality

### Pre-commit Hooks

The project uses Husky and lint-staged to enforce code quality before commits:

- Automatically formats code with Prettier
- Runs ESLint to catch errors
- Only processes staged files for efficiency

### Manual Checks

Run quality checks manually:
```bash
cd backend
npm run check:lint    # Check for linting errors
npm run check:format  # Check formatting
npm run lint:fix      # Auto-fix linting issues
npm run format        # Auto-format code
```

## Logging

### Development Logging

In development mode, logs are colorized and output to the console:
```
2024-01-01 12:00:00 [info]: Backend running on port 5000
2024-01-01 12:00:01 [info]: GET / 200 2.337 ms - 91
```

### Production Logging

In production, logs are:
- Written to `logs/combined.log` (all logs)
- Written to `logs/error.log` (errors only)
- Formatted as structured JSON for parsing

### Log Levels

Configure via `LOG_LEVEL` environment variable:
- `error` - Only errors
- `warn` - Warnings and errors
- `info` - General info (default)
- `debug` - Detailed debugging info

## Deployment

### Backend Deployment (Render)

1. **Create a new Web Service on Render**
2. **Connect your GitHub repository**
3. **Configure the service:**
   - **Name:** aethercrown10-backend
   - **Environment:** Node
   - **Region:** Choose nearest to your users
   - **Branch:** main
   - **Root Directory:** backend
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`

4. **Set environment variables:**
   ```
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=https://your-frontend.vercel.app
   LOG_LEVEL=info
   ```

5. **Deploy**

The backend will be available at `https://your-backend.onrender.com`

### Frontend Deployment (Vercel)

1. **Install Vercel CLI (optional):**
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset:** Next.js
     - **Root Directory:** frontend
     - **Build Command:** `npm run build`
     - **Output Directory:** `.next`

3. **Set environment variables:**
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
   ```

4. **Deploy**

The frontend will be available at `https://your-project.vercel.app`

### Post-Deployment

1. **Update backend FRONTEND_URL** to match your Vercel deployment URL
2. **Test health endpoint:** `https://your-backend.onrender.com/health`
3. **Test API endpoint:** `https://your-backend.onrender.com/api/v1/status`
4. **Visit status dashboard:** `https://your-project.vercel.app/status`

## Monitoring

### Health Checks

The `/health` endpoint is designed for monitoring tools:
- Load balancers (health check probes)
- Uptime monitors (UptimeRobot, Pingdom, etc.)
- Application monitoring (Datadog, New Relic, etc.)

Configure your monitoring tool to check:
```
GET https://your-backend.onrender.com/health
```

Expected response: `200 OK` with JSON body containing status.

### Logs

**Local Development:**
- Logs appear in the console
- View with: `npm run dev`

**Production:**
- Render: View logs in Render Dashboard → Service → Logs
- Vercel: View logs in Vercel Dashboard → Project → Logs

## Troubleshooting

### Backend won't start

1. **Check environment variables:**
   ```bash
   cd backend
   cat .env
   ```
   Ensure all required variables are set.

2. **Check Node version:**
   ```bash
   node --version  # Should be 18.x or higher
   ```

3. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Tests failing

1. **Clear Jest cache:**
   ```bash
   cd backend
   npm test -- --clearCache
   ```

2. **Check for port conflicts:**
   - Ensure no other service is using port 5000
   - Kill existing processes: `lsof -ti:5000 | xargs kill -9`

### Frontend can't connect to backend

1. **Verify backend is running:**
   ```bash
   curl http://localhost:5000/health
   ```

2. **Check CORS configuration:**
   - Ensure `FRONTEND_URL` in backend `.env` matches frontend URL
   - In development, CORS should allow all origins

3. **Verify environment variable:**
   ```bash
   cd frontend
   cat .env.local
   ```
   Ensure `NEXT_PUBLIC_API_URL` is set correctly.

### CI/CD pipeline failing

1. **Check GitHub Actions logs:**
   - Go to Actions tab
   - Click on failed workflow
   - Review job logs for error details

2. **Run CI checks locally:**
   ```bash
   cd backend
   npm run check:lint
   npm run check:format
   npm test
   ```

3. **Common issues:**
   - Missing dependencies (run `npm install`)
   - Linting errors (run `npm run lint:fix`)
   - Formatting issues (run `npm run format`)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linting: `npm run lint`
6. Commit changes (pre-commit hooks will run automatically)
7. Push to your fork: `git push origin feature/my-feature`
8. Create a Pull Request

## License

This project is private and proprietary.

## Support

For issues or questions:
- Open an issue on GitHub
- Check existing documentation
- Review logs for error details