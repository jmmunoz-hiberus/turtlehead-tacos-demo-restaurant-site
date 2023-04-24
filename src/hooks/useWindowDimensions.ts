// src/hooks/useWindowDimensions.ts

import { useState, useEffect } from "react";
import { getRuntime } from "@yext/pages/util";

function getWindowDimensions() {
  const isBrowser = typeof window !== "undefined";
  if (!getRuntime().isServerSide && isBrowser){
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  } else {
    return;
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}