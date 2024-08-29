"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

interface IProviderProps {
  children: React.ReactNode;
}

const Provider = (props: IProviderProps) => {
  const { children } = props;
  return <ThemeProvider defaultTheme={"light"}>{children}</ThemeProvider>;
};

export default Provider;
