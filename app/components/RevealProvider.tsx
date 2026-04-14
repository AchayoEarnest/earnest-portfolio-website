"use client";
import { useEffect } from "react";

export default function RevealProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    const run = () => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    };

    // Run after hydration
    run();
    const t = setTimeout(run, 500);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
