"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    if ((window as typeof window & { __clarityLoaded?: boolean }).__clarityLoaded)
      return;

    const timer = window.setTimeout(() => {
      Clarity.init("xlrrciy1qp");

      (
        window as typeof window & {
          __clarityLoaded?: boolean;
        }
      ).__clarityLoaded = true;
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}