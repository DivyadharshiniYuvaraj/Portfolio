# Portfolio (Scaffold)

This repository contains a scaffold for a personal portfolio:

- Frontend: React + Bootstrap (dark theme)
- Backend: Spring Boot (Java) + MySQL (optional/local only)
- Database: MySQL schema and seed (optional)

## Quick start

1. Frontend
   - cd frontend
   - npm install
   - Create a `.env` file in `frontend/` with your EmailJS keys (recommended):
     - REACT_APP_EMAILJS_SERVICE_ID=your_service_id
     - REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
     - REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   - npm start
   - npm run build
   - npm run deploy (deploys to GitHub Pages)

2. Backend (optional, local only)
   - cd backend
   - ./mvnw spring-boot:run
   - Import `db/schema.sql` if you want the database locally

### Notes
- Docker configuration removed per user request. This repository is set up for a static frontend hosted on GitHub Pages.
- Contact form uses EmailJS (client-side). Set your EmailJS service/template/public key in the `frontend/.env` or replace placeholders in `Contact.js`.
- Backend can be deployed to Heroku. Set Heroku Config Vars:
  - SPRING_DATASOURCE_URL = jdbc:mysql://<host>:<port>/<database>?useSSL=false&serverTimezone=UTC
  - SPRING_DATASOURCE_USERNAME = <db-username>
  - SPRING_DATASOURCE_PASSWORD = <db-password>

  If you use a Heroku MySQL add-on (e.g., JawsDB), copy the JDBC URL into `SPRING_DATASOURCE_URL` (convert the add-on URL to JDBC format if necessary).

  Basic steps to deploy backend to Heroku:
  1. Create a Heroku app: `heroku create your-app-name`.
  2. Add a MySQL add-on (JawsDB) or provision a managed MySQL and set config vars.
  3. Push: `git push heroku main` (or `git push heroku master` depending on branch).
  4. Heroku will build the Spring Boot app and run the `Procfile` to start it.

- Frontend deploy URL: `https://DivyadharshiniYuvaraj.github.io/portfolio` (update if repo name differs)
