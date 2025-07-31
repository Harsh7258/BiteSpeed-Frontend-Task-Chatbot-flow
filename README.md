# BiteSpeed Chatbot flow builder

This is a frontend assignment project built as part of the selection process for a Frontend Engineer role at **Bitespeed**.

The application allows users to create and connect chatbot conversation flows visually using draggable nodes. Built using **React.js + Vite**, it features modern UI using **Tailwind CSS v4**, interactive canvas using **React Flow**, and toast notifications via **React Hot Toast**.

## Tech Stack

- **React.js + Vite** – Fast development environment and component-based UI
- **Tailwind CSS v4** – for styling (with custom CSS class extensions)
- **React Flow v12.8.0** – Interactive node-based flow editor
- **React Router DOM** – Routing setup for component separation
- **React Hot Toast** – Notification system for UX feedback and setting alerts for flow
- **Zustand** - (installed, created store, but **not used currently** for state optimization)

## Features Implemented

- [x] Drag-and-drop message nodes on the board
- [x] Add and connect nodes via edges and handles
- [x] Click to edit the message text in the settings panel
- [x] Show toast when invalid edge is added (e.g., duplicate)
- [x] Dropdown for node type selection (currently disabled)
- [x] Designed to easily support additional node types in future
- [x] Clear layout with `NavBar`, `Chatbot` and `Board` separation
- [x] Clean and modular React components

### 1. Clone the Repository

```bash
> 1. Clone the repo
git clone https://github.com/Harsh7258/BiteSpeed-Frontend-Task-Chatbot-flow.git
cd chatbot-flow-builder

> 2. Install Dependencies
npm install

> 3. Run the Project Locally
npm run dev
Visit http://localhost:5173 in your browser.
```

### This my project for BiteSpeed frontend assignment

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
