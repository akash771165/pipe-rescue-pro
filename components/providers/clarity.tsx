"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    // Only initialize in production
    if (process.env.NODE_ENV !== "production") return;

    // Prevent duplicate initialization
    if ((window as typeof window & { __clarityLoaded?: boolean }).__clarityLoaded)
      return;

    Clarity.init("xlrrciy1qp");

    (
      window as typeof window & {
        __clarityLoaded?: boolean;
      }
    ).__clarityLoaded = true;
  }, []);

  return null;
}