# Quizo

## Overview
This project consists of two directories:
- **client**: A React application.
- **server**: A Node.js application using TypeScript.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (or yarn/pnpm)

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/thexeromin/quizo.git
cd quizo
```

### 2. Environment Variables
Create a `.env` file in both the `client` and `server` directories. Example:

#### `client/.env`
```
VITE_API=http://localhost:5000
```

#### `server/.env`
```
DATABASE_URL=postgres_database_url
```

### 3. Install Dependencies
#### Client
```sh
cd client
npm install  # or pnpm install / yarn install
```

#### Server
```sh
cd ../server
npm install  # or pnpm install / yarn install
```

### 4. Run the Applications
#### Start the Server
```sh
cd server
npm run dev  # or pnpm run dev / yarn dev
```

#### Start the Client
```sh
cd ../client
npm run dev  # or pnpm run dev / yarn dev
```

The client will be available at `http://localhost:5173` (default Vite port).

## Build for Production
#### Client
```sh
cd client
npm run build
```

#### Server
```sh
cd server
npm run build
```