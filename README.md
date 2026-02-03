# Portfolio — Divyadharshini Y ✅

A clean, single-page **React** portfolio built with **Bootstrap**, showcasing projects, skills, and contact options. The site is a static frontend that can be deployed to **GitHub Pages** (see Deploy section).

---

## 🔍 Live demo

- Deployed GitHub Pages URL: https://DivyadharshiniYuvaraj.github.io/Portfolio

---

## Features ✨

- Responsive single-page React application using `react-router-dom` for navigation.
- Dark theme with Bootstrap styling and a custom `styles.css`.
- Projects are loaded from `frontend/src/data/projects.json` and rendered in `Projects`.
- Contact form (currently submits to a Google Form) for simple message collection.
- Resume available at `/resume.pdf` (in `frontend/public`).
- Easy deployment with `gh-pages` (`npm run deploy`).

---

## Tech stack & dependencies ⚙️

- React, React Router, Bootstrap
- Bundler / scripts: `react-scripts` (Create React App)
- Optional packages found in `package.json`: `axios`, `@emailjs/browser` (not currently used by the contact form), `gh-pages`

---

## Quick start (frontend only) 🚀

1. Install dependencies

```bash
cd frontend
npm install
```

2. Run locally (dev server)

```bash
npm start
```

3. Build for production

```bash
npm run build
```

4. Deploy to GitHub Pages

```bash
npm run deploy
```

Notes:
- The `homepage` field in `frontend/package.json` is set to the GitHub Pages URL — update that if you host under a different user/org or repo name.
- This repository currently contains the frontend only (no backend folder is included).

---

## Contact form behavior (important) ⚠️

The current `Contact` page posts form responses to a **Google Form** (see `Contact.js`). If you'd rather send emails from the client using EmailJS:

1. Replace the form in `Contact.js` to use `@emailjs/browser` and handle submissions with `emailjs.send`.
2. Add a `.env` file in `frontend/` with values like:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Restart the dev server after adding the env file.

---

## Project structure 📁

Key files/folders (frontend):

- `frontend/src/`
  - `App.js` — routes and main layout
  - `index.js` — app bootstrap (uses `HashRouter`)
  - `components/` — `Header`, `Home`, `About`, `Skills`, `Projects`, `Contact`, `Footer`
  - `data/projects.json` — projects shown on Projects page
  - `styles.css` — custom styles
- `frontend/public/resume.pdf` — downloadable resume

---

## Author & links 📬

- **Divyadharshini Y**
  - GitHub: https://github.com/DivyadharshiniYuvaraj
  - LinkedIn: https://www.linkedin.com/in/divyadharshiniy/

---

## License / Notes 📝
- This repository is provided as-is. Feel free to adapt the contact method, theme, and build/deploy flow to your needs.
- If you want me to add a backend integration, CI/CD, or EmailJS-based contact flow, open an issue or send a PR.

