"use client";

import { useEffect } from "react";
import Error from "next/error";
import Link from "next/link";

import { NotFound } from "@/components/InfoBlock";
import styles from "./not-found.module.css";

const NotFoundPage = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <NotFound />;
};

export default NotFoundPage;
