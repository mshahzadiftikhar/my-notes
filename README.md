# React Notes - Monorepo

A monorepo setup for the React Notes application with separate frontend and backend packages.

## Project Structure

```
react-notes/
├── packages/
│   ├── frontend/          # React frontend application
│   └── backend/           # Backend API (coming soon)
├── package.json           # Root workspace configuration
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

Install all dependencies for the monorepo:

```bash
npm install
```

### Development

#### Frontend Development
```bash
# Start frontend development server
npm run dev

# Or specifically target frontend
npm run dev:frontend
```

#### Backend Development
```bash
# Complete backend setup (database + migrations + server)
npm run dev:backend

# Or run components individually:
# Start database only
npm run backend:db

# Run migrations
npm run backend:migrate

# Start development server only
npm run backend:server

# View database logs
npm run backend:logs

# Stop database
npm run backend:stop

# Reset database (removes all data)
npm run backend:reset
```

**Backend Prerequisites:**
- Docker and Docker Compose (for MySQL database)
- Create a `.env` file in `packages/backend/` (copy from `.env.example` and update values)

#### Run Both Frontend and Backend
```bash
# Build all packages
npm run build:all

# Lint all packages
npm run lint:all
```

### Available Scripts

- `npm run dev` - Start frontend development server
- `npm run build` - Build frontend for production
- `npm run dev:frontend` - Start frontend development server
- `npm run dev:backend` - Start complete backend (database + migrations + server)
- `npm run backend:db` - Start database only
- `npm run backend:migrate` - Run database migrations
- `npm run backend:server` - Start backend development server only
- `npm run backend:logs` - View database logs
- `npm run backend:stop` - Stop database
- `npm run backend:reset` - Reset database (removes all data)
- `npm run build:frontend` - Build frontend for production
- `npm run build:backend` - Build backend for production
- `npm run build:all` - Build all packages
- `npm run lint:all` - Lint all packages

## Packages

### Frontend (`packages/frontend`)
React application built with Vite, featuring:
- React 19
- Vite for fast development and building
- ESLint for code quality
- Hot Module Replacement (HMR)

### Backend (`packages/backend`)
Express.js backend API with:
- Express.js server
- MySQL database with Sequelize ORM
- Docker Compose for local development
- JWT authentication
- Redis for caching
- Database migrations
- RESTful API endpoints for notes management

See `packages/backend/README.md` for detailed setup instructions.

## Contributing

1. Make changes in the appropriate package directory
2. Run tests and linting
3. Submit a pull request

## Technology Stack

### Frontend
- React 19
- Vite
- ESLint

### Backend
- Express.js
- MySQL with Sequelize ORM
- Docker Compose
- JWT authentication
- Redis caching
