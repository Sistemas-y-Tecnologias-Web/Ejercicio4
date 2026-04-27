# OvWiki — Overwatch Heroes Wiki

A single-page application built with React and Vite that lets users browse and explore detailed information about Overwatch heroes, pulling live data from the [Overfast API](https://overfast-api.tekrop.fr).

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
  - [Docker](#docker)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Pages & Routes](#pages--routes)
- [API](#api)
- [Theming](#theming)

---

## Features

- Browse the full Overwatch hero roster
- Search heroes by name and filter by role (Tank, Damage, Support)
- View detailed hero pages: portrait, description, abilities with video demos, hitpoints breakdown, and story
- Interactive ability tabs (desktop) and flip-cards (mobile)
- Dark / Light theme toggle with localStorage persistence
- Random hero selection from the home page
- Fully responsive layout with a hamburger menu for mobile
- 404 "Mission Failed" error page
- Docker-ready for containerised development

---

## Tech Stack

| Category | Tool |
|---|---|
| UI library | React 19 |
| Routing | React Router DOM 7 |
| Build tool | Vite 8 |
| Styling | Custom CSS with CSS variables |
| State management | React Context API + custom hooks |
| Prop validation | PropTypes |
| Linting | ESLint |
| Containerisation | Docker + Docker Compose |
| External API | Overfast API |

---

## Project Structure

```
ejercicio4/
├── public/
│   ├── fonts/                  # big_noodle_titling (Overwatch font)
│   ├── img/                    # Logo and video assets
│   ├── icons.svg
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── HeroCard            # Grid card (portrait, name, role)
│   │   ├── NavBar              # Top nav with theme toggle
│   │   ├── Tab                 # Single ability tab
│   │   ├── TabContainer        # Ability tabs (desktop) / flip-cards (mobile)
│   │   └── LoadingSpinner      # Animated loading indicator
│   │
│   ├── context/
│   │   ├── ThemeContext        # Dark/light theme provider
│   │   └── HeroesContext       # Heroes data context
│   │
│   ├── hooks/
│   │   └── useHeroes           # Fetch all heroes with loading/error states
│   │
│   ├── pages/
│   │   ├── Home                # Landing page with random hero button
│   │   ├── Heroes              # Searchable, filterable hero grid
│   │   ├── HeroDetail          # Full hero detail view
│   │   └── NotFound            # 404 page
│   │
│   ├── services/
│   │   └── heroesService       # API fetch functions
│   │
│   ├── App.jsx                 # Root component with route definitions
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and CSS custom properties
│
├── Dockerfile
├── docker-compose.yml.example
├── .env.example
├── vite.config.js
└── eslint.config.js
```

---

## Getting Started

### Prerequisites

- Node.js 18+ (Node 22 recommended)
- npm 9+

### Local Development

```bash
# 1. Clone the repository
git clone <repository-url>
cd ejercicio4

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Docker

```bash
# Copy and edit the compose file
cp docker-compose.yml.example docker-compose.yml

# Build and start the container
docker-compose up
```

The app will be available at `http://localhost:5173`.

The app is live at: `https://overwatch-wiki.vercel.app/`
---

## Environment Variables

Copy `.env.example` to `.env` and adjust as needed.

| Variable | Default | Description |
|---|---|---|
| `API_BASE_URL` | `https://overfast-api.tekrop.fr` | Base URL for the Overfast API |

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Build for production (`dist/`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the source files |

---

## Pages & Routes

| Path | Page | Description |
|---|---|---|
| `/` | Home | Landing page with "View all heroes" and "Random hero" buttons |
| `/heroes` | Heroes | Searchable and filterable grid of all heroes |
| `/heroes/:key` | HeroDetail | Full detail page for a single hero |
| `*` | NotFound | 404 "Mission Failed" page |

---

## API

Data is fetched from the [Overfast API](https://overfast-api.tekrop.fr), an unofficial community API for Overwatch game data.

| Function | Endpoint | Description |
|---|---|---|
| `fetchHeroes()` | `GET /heroes` | Returns the full list of heroes |
| `fetchHeroDataByKey(key)` | `GET /heroes/{key}` | Returns detailed data for a single hero |

---

## Theming

The app supports **dark** (default) and **light** themes, toggled via the button in the navigation bar. The selected theme is persisted to `localStorage` under the key `ow-theme`.

Styles are driven entirely by CSS custom properties defined in `src/index.css`:

- `--ow-bg`, `--ow-surface`, `--ow-text`, `--ow-muted` — general layout colours
- `--ow-tank`, `--ow-damage`, `--ow-support` — role-specific accent colours
- `--ow-orange`, `--ow-blue` — Overwatch brand colours
