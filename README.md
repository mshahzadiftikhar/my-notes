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

#### Backend Development (Coming Soon)
```bash
# Start backend development server
npm run dev:backend
```

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
- `npm run dev:backend` - Start backend development server
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
Backend API package (implementation coming soon)
