import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToElement = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Delay to ensure DOM is rendered
    setTimeout(scrollToElement, 100);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHashElement;
