import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Earnest Achayo | Data Analyst & Software Engineer",
  description:
    "Portfolio of Earnest Odhiambo Achayo — Data Analyst & Software Engineer with 4+ years experience in healthcare and tech.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
