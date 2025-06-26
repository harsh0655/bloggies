# Bloggies Viral Engine 

Internship Project for **Alatree Ventures**

## Deployment
This project is deployed on Vercel:
🔗 [https://bloggies-credit.vercel.app](https://bloggies-credit.vercel.app/)

Bloggies is a modern, AI-inspired content ecosystem built with **Next.js**, featuring:

-  Ecosystem API integration
-  User signup with credit awarding
-  Stripe-powered mock checkout for premium packs
-  Admin dashboard with user stats
-  Credit deduction on user opt-out

---

##  Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Material UI (MUI)**
- **Stripe API**
- **Axios for HTTP requests**

---

##  Features

-  Award credits when users sign up
-  Checkout via Stripe (mock integration)
-  Opt-out deducts credits
-  Admin dashboard shows all users with credits and raffle entries


## Folder Structure
/components       → Navbar
/pages            → All routes and UI pages
/pages/api        → Backend logic via API Routes
/pages/lib/store  → Temporary mock credit & raffle stores
/utils            → Utility functions for calling APIs

## Stripe Test Details
Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
ZIP: Any 5 digits


## Environment Variables
Create a .env.local file in the root of your project with the following content:

.env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key_here
STRIPE_SECRET_KEY=your_secret_key_here

Important:
Do not upload or commit your .env.local file to GitHub or any public repository.
It contains sensitive API keys and must be kept private.
Make sure .env, .env.local are listed in your .gitignore file.
---

##  Getting Started (Development)

First, install dependencies and start the dev server:

```bash
npm install
npm run dev



