import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef<string>("");

  useEffect(() => {
    // Check if language switcher is changing language (don't scroll to top in that case)
    if ((window as any).__suppressScrollToTop) {
      return;
    }

    // Only scroll if pathname actually changed (not just re-render)
    if (prevPathnameRef.current === pathname) {
      return;
    }

    prevPathnameRef.current = pathname;

    // Scroll to top instantly when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto", // instant scroll
    });
  }, [pathname]);

  return null;
};
