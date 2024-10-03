"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Light from "../../data/icons/light.svg";
import Dark from "../../data/icons/dark.svg";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className="iconButton"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Dark /> : <Light />}
    </button>
  );
};

export default ThemeButton;
