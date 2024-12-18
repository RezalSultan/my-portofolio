"use client";

import { useEffect, useState } from "react";
import "../../globals.css";

function ToggleDarkMode() {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
        document.documentElement.classList.add(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (theme === null) return null; // Render null sampai tema ditentukan

  return (
    <>
      <button onClick={toggleTheme} className="w-8 h-8 relative">
        <div className="w-8 h-8 top-0 left-0 bg-l-semibg dark:bg-d-semibg rounded-2xl border-2 border-solid dark:border-white border-black transition-all duration-300 ease-in-out" />
      </button>
    </>
  );
}

export default ToggleDarkMode;
