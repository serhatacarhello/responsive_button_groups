import React, { useEffect, useState } from "react";

export default function useMedia(width = 1024) {
  const [status, setStatus] = useState(
    window.matchMedia(`(max-width: ${width}px)`).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${width}px)`);

    const handleChange = (e) => {
      setStatus(e.matches);
    };

    // Add the event listener using addEventListener
    mediaQuery.addEventListener("change", handleChange);

    // Initial check when the component mounts
    setStatus(mediaQuery.matches);

    // Cleanup the event listener on component unmount
    return () => {
      // Remove the event listener using removeEventListener
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [width]);

  return status;
}
