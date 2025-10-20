# AetherCrown10

A full-stack application with Express backend and React frontend.

## Project Structure

```
AetherCrown10/
├── backend/          # Express.js backend API
│   ├── index.js      # Main server file
│   ├── package.json  # Backend dependencies
│   └── .env.example  # Example environment variables
├── frontend/         # React frontend application
│   ├── package.json  # Frontend dependencies
│   └── .env.example  # Example environment variables
└── README.md         # This file
```

## Local Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/monkeymadness98/AetherCrown10.git
   cd AetherCrown10
   ```

2. **Set up Backend**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm start
   ```
   Backend will run on `http://localhost:5000`

3. **Set up Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   cp .env.example .env
   # Edit .env with your configuration
   npm start
   ```
   Frontend will run on `http://localhost:3000`

### Available Scripts

#### Backend
- `npm start` - Start the backend server
- Health check: `curl http://localhost:5000/health`

#### Frontend
- `npm start` - Start the development server
- `npm build` - Build for production
- `npm test` - Run tests

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS security (default: http://localhost:3000)

### Frontend (.env)
- `REACT_APP_API_URL` - Backend API URL (default: http://localhost:5000)

**Note:** Never commit `.env` files to the repository. Use `.env.example` as a template.

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check endpoint (returns status and uptime)

## Pull Request Workflow

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes and commit**
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create a Pull Request**
   - Go to the repository on GitHub
   - Click "Pull Requests" → "New Pull Request"
   - Select your branch
   - Add a clear description of changes
   - Request review from team members

5. **PR Guidelines**
   - Write clear, descriptive PR titles
   - Include a detailed description of changes
   - Reference any related issues
   - Ensure all tests pass
   - Wait for review before merging

## Security

- CORS is configured to only allow requests from the configured `FRONTEND_URL`
- Never commit secrets or API keys to the repository
- Use `.env` files for sensitive configuration (they are gitignored)
- Always use `.env.example` files with placeholder values for documentation

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[Specify your license here]