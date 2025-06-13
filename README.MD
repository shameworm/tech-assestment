

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=4000
API_BASE_URL=https://www.themealdb.com/api/json/v1/1
```

Start backend server:

```bash
npm run dev
```

The backend will be available at `http://localhost:4000`

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:4000/api
```

Start frontend server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

---

## Environment Variables

### Backend (`backend/.env`)

| Variable       | Description                              |
| -------------- | ---------------------------------------- |
| `PORT`         | Port to run the Express server on        |
| `API_BASE_URL` | URL for the MealDB API (public endpoint) |

### Frontend (`frontend/.env`)

| Variable            | Description                   |
| ------------------- | ----------------------------- |
| `VITE_API_BASE_URL` | URL of the backend API server |

---

## Scripts

### Backend

```bash
npm run dev      # Run server in dev mode (ts-node-dev)
npm run build    # Build TypeScript
npm start        # Run compiled JS
```

### Frontend

```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build
```
