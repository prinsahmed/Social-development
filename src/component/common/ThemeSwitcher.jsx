import { useState, useEffect } from "react";

const ThemeSwitcher = () => {
   const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <div className="w-11 mr-1 h-6 bg-gray-200 rounded-full peer peer-checked:bg-gray-800 transition-all"></div>
      <span className="mr-3 text-sm">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </label>
  );
};

export default ThemeSwitcher;