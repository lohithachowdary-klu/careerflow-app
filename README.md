# CareerFlow

A clean job-search tracker built with React + Vite. It starts directly at the login page (no marketing/landing page).

## Features
- Sign in and create account (local demo authentication)
- Dashboard overview and application pipeline
- Add, edit, search, filter and delete job applications
- Interview schedule and preparation notes
- Follow-up reminders
- Analytics calculated from your saved applications
- Company-wise application overview
- Responsive layout and browser localStorage persistence

## Run locally
1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open Terminal and run `npm install`.
4. Run `npm run dev`.
5. Open the localhost address shown in the terminal.

## Important authentication note
This starter uses browser localStorage for demonstration. It is not secure production authentication and data stays in the current browser. For a real multi-user app, connect Supabase, Firebase, or a backend with secure password hashing and access rules.

## Deploy
Run `npm run build`, then deploy the `dist` folder using GitHub Pages (instructions in the project handoff) or connect the repository to Vercel/Netlify.
"# careerflow-app" 
