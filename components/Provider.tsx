"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import siteMetadata from "@/data/siteMetadata";

interface IProviderProps {
  children: React.ReactNode;
}

const Provider = (props: IProviderProps) => {
  const { children } = props;
  return <ThemeProvider defaultTheme={"light"}>{children}</ThemeProvider>;
};

export default Provider;
