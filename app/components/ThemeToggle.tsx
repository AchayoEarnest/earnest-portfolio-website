"use client";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 shrink-0"
      style={{
        background: isDark
          ? "rgba(13,148,136,0.25)"
          : "rgba(13,148,136,0.15)",
        border: "1px solid rgba(13,148,136,0.4)",
      }}
    >
      {/* Track icons */}
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-xs pointer-events-none select-none">
        🌙
      </span>
      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-xs pointer-events-none select-none">
        ☀️
      </span>

      {/* Sliding thumb */}
      <span
        className="absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs shadow-md transition-all duration-300"
        style={{
          left: isDark ? "2px" : "calc(100% - 26px)",
          background: isDark
            ? "linear-gradient(135deg, #0d9488, #0f766e)"
            : "linear-gradient(135deg, #f59e0b, #f97316)",
        }}
      >
        {isDark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
