# VanLife - Full Stack Van Rental Application

A complete van rental platform built with React frontend and Django REST API backend, deployed on AWS Lambda with API Gateway.

## Features

- **Van Browsing**: Filter and search available vans by type
- **User Authentication**: Secure login/logout with token-based auth
- **Host Dashboard**: Manage your van listings and bookings
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Dynamic content with modern React patterns

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Custom Hooks** for data fetching

### Backend
- **Django 5.2** with Django REST Framework
- **PostgreSQL** database
- **Token Authentication** 
- **AWS Lambda** deployment with Mangum
- **API Gateway** for HTTP routing

### Infrastructure
- **AWS Lambda** - Serverless backend hosting
- **API Gateway** - REST API management
- **GitHub Actions** - CI/CD pipeline
- **CloudFormation** - Infrastructure as Code

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.9+
- AWS CLI configured
- PostgreSQL database

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vanlife
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd backend/Vanlife
   pip install -r ../requirements.txt
   python manage.py migrate
   python manage.py runserver
   ```

### Environment Variables

**Backend (.env)**
```env
DB_NAME=vanlife
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:8000/api
```

## Deployment

### AWS Infrastructure Setup

1. **Configure GitHub Secrets**:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - Database credentials

2. **Deploy Infrastructure**:
   - Go to Actions → "Setup AWS Infrastructure" → Run workflow

3. **Automatic Deployment**:
   - Push to `main` branch triggers deployment

### API Endpoints

- `GET /api/vans` - List all vans
- `GET /api/vans/:id` - Get van details
- `POST /api/login/` - User authentication
- `GET /api/host/vans` - Host's van listings (protected)

## Project Structure

```
vanlife/
├── frontend/                 # React TypeScript application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   └── api.ts           # API client functions
├── backend/                 # Django REST API
│   ├── Vanlife/
│   │   ├── VanlifeApi/      # Main API app
│   │   └── lambda_handler.py # AWS Lambda entry point
├── infrastructure/          # CloudFormation templates
├── .github/workflows/       # CI/CD pipelines
└── README.md               # This file
```

## Development Workflow

1. **Feature Development**: Create feature branch
2. **Local Testing**: Test frontend and backend locally
3. **Pull Request**: Submit PR for review
4. **Deployment**: Merge to main triggers auto-deployment