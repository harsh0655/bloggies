import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-100 via-white to-slate-200">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
        <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "#111827",
              fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
            }}>
            Bloggies Viral Engine
          </Typography>

        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl">
          A modern, AI-powered content system demonstrating Ecosystem API integration, user credit logic, mock Stripe checkout, and admin analytics — built for the Alatree Ventures internship.
        </p>
      </main>

      <footer className="bg-gray-900 py-6 text-center text-gray-100 text-sm">
        &copy; 2025 Bloggies • Built by Harsh Gupta
      </footer>
    </div>
  );
}
