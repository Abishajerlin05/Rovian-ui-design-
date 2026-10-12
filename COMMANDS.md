# 🛠️ ROVIAN Project - Commands Guide

A quick reference guide for running, building, linting, and managing the ROVIAN project and GitHub integration.

---

## 📦 1. Installation

Install all project dependencies using **npm** or **bun**:

```bash
# Using npm
npm install

# Or using bun (faster)
bun install
```

---

## ⚡ 2. Development

Start the local development server with hot-module replacement (HMR):

```bash
# Start local dev server
npm run dev
# (or: bun dev)
```

- Default URL: `http://localhost:3000` (or `http://localhost:5173`)

---

## 🏗️ 3. Building & Production

```bash
# Build for production
npm run build

# Build with development mode flags (useful for debugging builds)
npm run build:dev

# Preview the production build locally
npm run preview
```

---

## 🧹 4. Code Quality (Lint & Format)

```bash
# Check code with ESLint
npm run lint

# Format all files using Prettier
npm run format
```

---

## 🐙 5. Git & GitHub Commands

### A. Initial Setup (First time pushing to GitHub)

```bash
# 1. Initialize Git repository
git init -b main

# 2. Stage all project files (.gitignore will exclude node_modules, .env, etc.)
git add .

# 3. Create your first commit
git commit -m "feat: initial ROVIAN landing page codebase"

# 4. Link your remote GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 5. Push code to main branch
git push -u origin main
```

### B. Daily Workflow (Saving & Pushing Changes)

```bash
# Check changed files
git status

# Stage all modified files
git add .

# Commit with a descriptive message
git commit -m "feat: updated hero section and mockups"

# Push changes to GitHub
git push
```

### C. Pulling Latest Changes

```bash
# Pull changes from GitHub
git pull origin main
```

---

## 🔧 6. Troubleshooting & Clean Cache

If you ever encounter build cache or lock issues:

```bash
# Remove build caches & node_modules (PowerShell)
Remove-Item -Recurse -Force node_modules, dist, .output, .vinxi, .tanstack, .nitro

# Reinstall dependencies
npm install
```

---

## 📋 Summary of package.json Scripts

| Command             | Action                                          |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Starts Vite + TanStack Start development server |
| `npm run build`     | Compiles production assets                      |
| `npm run build:dev` | Compiles assets with development mode enabled   |
| `npm run preview`   | Runs a local server to test production build    |
| `npm run lint`      | Runs ESLint checks across the codebase          |
| `npm run format`    | Formats all files according to Prettier rules   |
