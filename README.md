# ⚛️ React Practical 1 – Student Portfolio

A simple Student Portfolio built using **React** and **Vite** to understand the basics of component-based development.

## 🚀 Features

- Reusable React Components
- Component-Based Architecture
- Props for Data Passing
- Built with React + Vite

## 📂 Components

| Component | Description |
|-----------|-------------|
| 🧭 NavBar | Sticky navigation bar with anchor links |
| 🏠 Header | Displays name with `name` and `themeColor` props |
| 👤 About | Brief introduction section |
| 💻 Skills | Renders skills from `skillList` prop |
| 📁 Projects | Hardcoded list of 3 projects |
| 📞 Footer | Copyright and contact info |

## 🛠️ Run Locally

```bash
npm install
npm run dev
```

Open: [http://localhost:5173](http://localhost:5173)

## 📚 Concepts Covered

- JSX
- Functional Components
- Props
- Component Composition

## 👨‍💻 Author

**Ansh Sojitra** (24CS095) | B.Tech CSE | CHARUSAT

---

## Practical 2 – State Management and Routing in React

### Objective

Practical 2 extends the existing Practical 1 portfolio application with **React Router** for client-side routing and **React state management** using `useState`. The portfolio now supports multiple pages, a controlled contact form, dark/light mode toggling, and a 404 Not Found page — all without full page reloads.

### Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Displays the original portfolio content (Header, About, Skills) |
| `/projects` | ProjectsPage | Displays project cards reused from Practical 1 |
| `/contact` | Contact | Controlled contact form with live preview and help toggle |
| `*` | NotFound | 404 page with a link back to Home |

### State Management

Three `useState` hooks demonstrate React state management:

| State Variable | Purpose |
|----------------|---------|
| `message` | Controlled textarea input in the Contact form — value is displayed in real time |
| `showHelp` | Boolean toggle that shows/hides a help section on the Contact page |
| `darkMode` | Boolean toggle that switches between light and dark themes across the app |

#### Features

- **Controlled Contact Form** — The message textarea is bound to React state via `value` and `onChange`
- **Live Character Count** — Displays `message.length` below the textarea, updating as the user types
- **UI Visibility Toggle** — A "Show Help / Hide Help" button conditionally renders a help box
- **Dark / Light Mode** — A toggle button in the NavBar switches the app's CSS class between light and dark themes

### React Router

Client-side routing is implemented with `react-router-dom`:

- `BrowserRouter` wraps the app in `main.jsx`
- `Routes` and `Route` are configured in `App.jsx`
- `NavLink` is used in the NavBar for navigation without full page reloads
- Active route receives visual styling via the `.active` class

### Technologies

- React 19
- Vite 8
- React Router DOM (react-router-dom)
- Vanilla CSS with CSS custom properties
- ESLint
