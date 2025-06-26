import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* this means that navbar will be showed at all pages */}
      <Navbar />
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
    </div>
  );
}
  