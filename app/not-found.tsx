"use client";

import { useEffect } from "react";
import Error from "next/error";
import Link from "next/link";
import styles from "./not-found.module.css";
import { NotFound } from "@/components/InfoBlock";

const NotFoundPage = ({ error }: { error: Error & { digest?: string } }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <NotFound />;
};

export default NotFoundPage;
