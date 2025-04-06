"use client";

import { useEffect, useRef } from "react";

export function useScrollToHashOnLoad(delay = 0) {
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (hasScrolled.current) return;
    hasScrolled.current = true;

    const hash = window.location.hash;
    if (!hash) return;

    const scrollToTarget = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (delay > 0) {
      setTimeout(scrollToTarget, delay);
    } else {
      scrollToTarget();
    }
  }, [delay]);
}
