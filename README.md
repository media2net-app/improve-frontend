# Frontend (Publieke website)

Dit project bevat de publieke website van Foodeo/Improve. De backend (dashboard/admin) is gescheiden en bevindt zich in de map `../dashboard`.

## Structuur
- **frontend/**: Publieke website, marketing, info, contact, etc.
- **dashboard/**: Beheeromgeving, alleen voor ingelogde gebruikers (apart project)

## Lokale installatie

1. Installeer dependencies:
   ```sh
   npm install
   ```
2. Start de development server:
   ```sh
   npm run dev
   ```
3. De site is bereikbaar op [http://localhost:3000](http://localhost:3000)

## Deployment
- Deploy dit project naar je hoofd-domein (bijv. `www.domeinnaam.com` of `domeinnaam.com`).
- Gebruik Vercel, Netlify of een andere Next.js host.
- Koppel het dashboard project aan een subdomein (bijv. `dashboard.domeinnaam.com`).

## Let op
- Dit project bevat alleen publieke pagina's. Voor het dashboard, zie de map `../dashboard`.
- Assets en componenten kunnen gedeeld zijn, maar houd de codebases gescheiden voor overzicht en veiligheid.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
