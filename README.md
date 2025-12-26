# Ping

A lightweight web application built with **Svelte**, **TypeScript**, and **Vite**, designed to provide a fast, modern interface for testing connectivity or responsiveness (ping-like functionality) in the browser.

> 🚀 Deployed on Vercel: [https://ping-rho-vert.vercel.app](https://ping-rho-vert.vercel.app)

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction

**Ping** is a small, modern web application built using **Svelte + TypeScript** and bundled with **Vite**.
It focuses on simplicity, speed, and clean UI, making it suitable for experimenting with frontend performance, connectivity checks, or as a base for real-time interaction tools.

---

## Features

- ⚡ Fast development and build times with Vite
- 🧩 Component-based architecture using Svelte
- 🛠 Written in TypeScript for type safety
- 🌐 Browser-based, no backend required
- 🚀 Ready for deployment on Vercel

---

## Tech Stack

- **Framework:** Svelte
- **Language:** TypeScript
- **Bundler:** Vite
- **Styling:** CSS
- **Deployment:** Vercel

---

## Installation

### Prerequisites

- **Node.js** (v18 or later recommended)
- **npm** or **pnpm**

### Clone the repository

```bash
git clone https://github.com/synakr/ping.git
cd ping
```

### Install dependencies

```bash
npm install
```

---

## Usage

### Start the development server

```bash
npm run dev
```

Then open your browser at:

```
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

---

## Project Structure

```text
ping/
├── src/
│   ├── lib/           # Reusable components / utilities
│   ├── routes/        # Application routes (Svelte)
│   ├── app.html       # Main HTML template
│   └── main.ts        # App entry point
├── static/            # Static assets
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md
```

---

## Configuration

Most configuration is handled through:

- `vite.config.ts` – Vite and plugin configuration
- `tsconfig.json` – TypeScript compiler options

Environment variables (if needed) can be added using:

```bash
.env
```

---

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |

---

## Deployment

This project is compatible with **Vercel** out of the box.

To deploy:

1. Push the repository to GitHub
2. Import it into Vercel
3. Use the default build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

---

## Troubleshooting

**Port already in use**

```bash
npm run dev -- --port 3000
```

**Dependency issues**

```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**

- Ensure your Node.js version matches the recommended version
- Run `npm run build` to surface detailed errors

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## License

This project is licensed under the **MIT License**.
See the `LICENSE` file for details.
