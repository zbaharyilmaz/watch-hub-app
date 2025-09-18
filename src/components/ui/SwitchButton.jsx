"use client";
import React, { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode, MdComputer } from "react-icons/md";
import { useTheme } from "next-themes";

export default function SwitchButton() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  const themes = [
    { key: "light", label: "Light", icon: MdLightMode },
    { key: "dark", label: "Dark", icon: MdDarkMode },
    { key: "system", label: "System", icon: MdComputer },
  ];

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-200 dark:border-gray-600"
        aria-label="Toggle theme"
      >
        {currentTheme === "dark" ? (
          <MdDarkMode className="text-lg text-gray-700 dark:text-gray-300" />
        ) : currentTheme === "light" ? (
          <MdLightMode className="text-lg text-gray-700 dark:text-gray-300" />
        ) : (
          <MdComputer className="text-lg text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {showMenu && (
        <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 py-2 min-w-[120px] z-50">
          {themes.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => {
                setTheme(key);
                setShowMenu(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                theme === key
                  ? "text-amber-500 dark:text-amber-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <Icon className="text-base" />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close menu when clicking outside */}
      {showMenu && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowMenu(false)}
        />
      )}
    </div>
  );
}
