"use client";

import { useEffect, useState } from "react";
import "./globals.css";

function MyToggle() {
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
    <div>
      <button onClick={toggleTheme} className="text-black dark:text-white">
        Toggle Theme
      </button>
    </div>
  );
}

export default MyToggle;
