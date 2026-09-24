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

---

## Practical 3 – API Integration and Data Rendering in React

### Objective

Practical 3 extends the portfolio project with **API Integration and Dynamic Data Rendering** using the public GitHub REST API and native `fetch()`. The Projects page now dynamically fetches, manages, and renders repositories with full loading states, error handling with retry capability, and real-time search filtering.

### GitHub REST API & Endpoint

- **API**: Public GitHub REST API v3
- **Endpoint**: `https://api.github.com/users/AnshSojitra/repos`
- **Method**: Native `fetch()` API (no third-party HTTP libraries required)

### Implementation Details

#### 1. Data Fetching with `useEffect()` and `fetch()`
Repositories are fetched asynchronously upon component mount within a `useEffect` hook using an empty dependency array (`[]`), ensuring the API request is not executed in the component render body:

```jsx
const [repos, setRepos] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  // Asynchronous API call on mount
  ...
}, []);
```

#### 2. Loading State (`Spinner` Component)
- While the HTTP request is pending, a visible animated spinner and the message `Loading repositories...` are displayed.
- Handled via `loading` state (`true` on initial fetch and retries; `false` once response arrives).
- The spinner disappears immediately when data arrives or an error occurs.

#### 3. Error State (`ErrorMessage` Component) & Retry Button
- If network issues occur or the API returns an error status (e.g. 404, rate limit):
  - An error message (`Unable to load repositories.`) is displayed without crashing or leaving a blank page.
  - A **Retry** button triggers `fetchRepos()`, transitioning through:
    ```text
    Retry → loading → API request → success OR error
    ```

#### 4. Repository Rendering (`RepositoryCard` Component)
Each repository is rendered dynamically from the API response with:
- **Repository Name**: `repo.name`
- **Star Count**: `repo.stargazers_count` (displayed with a star icon `★`)
- **Repository URL**: `repo.html_url` opened in a new browser tab via `<a href={repo.html_url} target="_blank" rel="noopener noreferrer">`
- Additional metadata: `repo.description` and `repo.language` badge

#### 5. Real-Time Search / Filter
A controlled text input above the repository list allows filtering repositories by name in real time:
- State variable: `const [searchTerm, setSearchTerm] = useState('')`
- Case-insensitive filtering:
  ```jsx
  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  ```
- If no repository matches the query, a friendly fallback message displays:
  ```text
  No repositories found.
  ```

### Reusable Components Added

| Component | File Path | Purpose |
|-----------|-----------|---------|
| `Spinner` | `src/components/Spinner.jsx` | Accessible loading indicator with spinning CSS animation |
| `ErrorMessage` | `src/components/ErrorMessage.jsx` | User-friendly alert box with interactive Retry button |
| `RepositoryCard` | `src/components/RepositoryCard.jsx` | Card component displaying repo name, stars, URL, description |

### Setup & Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production
npm run build

# 4. Run ESLint checks
npm run lint
```

