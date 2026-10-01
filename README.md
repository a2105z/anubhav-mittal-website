# Anubhav Mittal — Executive Website

Personal website for **Anubhav Mittal, CFA, CMA** — VP & Global Head of
Corporate Development & M&A at ADM. Built as a multi-page React + Tailwind
single-page app with smooth route transitions, intended to be presentable
in a boardroom context.

## Tech stack

- React 18 + TypeScript (Create React App)
- React Router v5
- Tailwind CSS with a custom `brand` palette (navy / bronze / ivory)
- Framer Motion for page transitions and section animations
- Firebase Hosting for deploys (config in `firebase.json`)

## Pages

| Route         | Page                                                 |
| ------------- | ---------------------------------------------------- |
| `/`           | Home — hero with headline, role, and CTAs            |
| `/about`      | Bio, Areas of Expertise, Education, Certifications   |
| `/experience` | Career timeline (ADM, Kellogg, Booz, Govt of India,  |
|               | Hindustan Unilever) with multiple roles per company  |
| `/media`      | Press & commentary placeholder                       |
| `/contact`    | Form (Name / Email / Subject / Message) + LinkedIn   |

## Local development

```bash
npm install
npm start
```

The app runs on [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

## Configuration

Two values you'll likely want to update before going live:

- **Contact form delivery** — set `FORMSPREE_ENDPOINT` in
  [`src/constants/links.ts`](src/constants/links.ts) to a Formspree (or
  similar) endpoint URL. Until configured, the form surfaces a graceful
  error and points users to LinkedIn.
- **LinkedIn URL** — `LINKEDIN_LINK` in the same file.

## Assets you can add later

The site renders cleanly without any of these — the UI uses styled
monogram fallbacks. You can drop these in at any time:

- **Headshot**: `public/images/anubhav.jpg` — see
  [`public/images/README.md`](public/images/README.md).
- **Company / institution logos**:
  `public/icons/organizations/*.png` — see
  [`public/icons/organizations/README.md`](public/icons/organizations/README.md)
  for the full list of expected filenames.

## Deployment

Firebase Hosting is wired up — see `firebase.json` and `.firebaserc`.
After `npm run build`, run `firebase deploy`.
