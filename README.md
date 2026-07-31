# 🚀 FailSense AI — Frontend

> **An AI-powered dashboard for analyzing, visualizing, and understanding CI/CD pipeline failures.**  
> FailSense transforms complex GitHub Actions failures into actionable insights, helping developers identify root causes faster and reduce debugging time.



<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-black)
![Recharts](https://img.shields.io/badge/Recharts-Analytics-orange)
![License](https://img.shields.io/badge/License-MIT-green)

</p>

---

# 📖 Overview

Modern CI/CD pipelines generate thousands of log lines whenever a workflow fails. Locating the actual error often requires manually scrolling through logs, identifying stack traces, and correlating failures across multiple jobs.

**FailSense AI** provides a modern interface that visualizes workflow executions, displays failure analytics, and presents AI-generated explanations for failed pipeline runs. Instead of reading raw logs, developers receive concise summaries, possible root causes, and recommended fixes.

This repository contains the **React frontend** responsible for rendering dashboards, workflow history, AI insights, analytics, and downloadable reports.

---

# ❓ Problem Statement

CI/CD failures are difficult to debug because:

- Workflow logs are extremely verbose.
- Root causes are buried beneath thousands of log lines.
- Developers spend significant time identifying the actual failure.
- Teams lack centralized visualization of workflow health.
- Existing GitHub UI focuses on logs rather than insights.

FailSense AI solves these challenges through intelligent visualization and AI-assisted failure analysis.

---

# ✨ Features

## 📊 Dashboard

- Workflow health overview
- Failure statistics
- Interactive charts
- Recent failed runs
- Repository summary
- Quick navigation

---

## 🤖 AI Insights

- AI-generated failure explanation
- Root cause identification
- Suggested fixes
- Human-readable summaries
- Developer-friendly recommendations

---

## 📈 Analytics

- Failure trends
- Success vs Failure visualization
- Repository activity
- Workflow execution history
- Performance overview

---

## 📄 Report Export

Generate downloadable PDF reports containing:

- Workflow information
- Failure details
- AI analysis
- Suggested resolution
- Execution timeline

---

## 🎨 Modern UI

- Responsive layout
- Framer Motion animations
- Interactive cards
- Clean developer experience
- Mobile-friendly interface

---

# 🏗 System Architecture

```text
                GitHub Repository
                        │
                        ▼
                 GitHub Actions
                        │
                        ▼
                 Workflow Failure
                        │
                        ▼
                Backend API Server
                        │
        AI Analysis + Log Processing
                        │
                        ▼
                REST API Responses
                        │
                        ▼
             React + TypeScript Frontend
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
   Dashboard       Workflow Runs     AI Insights
```

---

# 🔄 Application Flow

```text
Developer Pushes Code
          │
          ▼
GitHub Actions Executes
          │
          ▼
Workflow Succeeds / Fails
          │
          ▼
Backend Processes Logs
          │
          ▼
AI Generates Failure Analysis
          │
          ▼
Frontend Displays

• Dashboard
• Charts
• Failure Timeline
• AI Suggestions
• Downloadable Report
```

---

# 🛠 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React 19 |
| Language | TypeScript |
| Build Tool | Vite |
| Routing | React Router |
| Styling | CSS |
| Animation | Framer Motion |
| Charts | Recharts |
| HTTP Client | Axios |
| PDF Export | jsPDF |

---

# 📂 Project Structure

```text
src
│
├── assets
│
├── components
│   ├── dashboard
│   ├── details
│   ├── Hero
│   ├── Navbar
│   ├── CTA
│   └── Workflow
│
├── pages
│   ├── LandingPage
│   ├── Dashboard
│   ├── WorkflowRuns
│   ├── RunDetails
│   └── Insights
│
├── router
│
├── services
│   └── api.ts
│
├── utils
│   └── downloadReport.ts
│
└── main.tsx
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js 18+
- npm

---

## Installation

```bash
git clone https://github.com/akshatchitransh/CI-CD-Automation-Frontend.git

cd CI-CD-Automation-Frontend

npm install
```

---

## Environment Variables

Create a `.env` file.

```env
VITE_API_BASE_URL=cicd-automation-back.onrender.com
```

Update the backend URL according to your deployment.

---

## Run Development Server

```bash
npm run dev
```

---

## Production Build

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

# 📱 Pages

### Landing Page

Introduces the platform, explains the workflow, and highlights key features.

### Dashboard

Displays repository health, workflow statistics, charts, and recent failures.

### Workflow Runs

Lists workflow executions with filtering and navigation.

### Run Details

Shows execution logs, AI-generated insights, timeline, and downloadable reports.

### AI Insights

Dedicated interface for reviewing AI explanations and debugging recommendations.

---

# 📊 Core Components

- Dashboard Sidebar
- Statistics Cards
- Failure Charts
- Recent Failures
- AI Insight Panel
- Interactive Timeline
- Terminal Viewer
- Report Generator

---

# ⚡ Performance Optimizations

- Component-based architecture
- Lazy page rendering
- Optimized chart rendering
- Efficient API communication using Axios
- Fast bundling with Vite
- Responsive layouts for different screen sizes

---

# 🔮 Future Improvements

- GitHub OAuth authentication
- Multi-repository dashboard
- Real-time workflow monitoring
- Live notifications
- Dark/Light theme switch
- Team collaboration
- Historical analytics
- AI chat assistant for debugging
- Advanced filtering
- Repository comparison

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

# 📜 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Akshat Chitransh**

- GitHub: https://github.com/akshatchitransh

---

## ⭐ Support

If you found this project helpful, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future development.
