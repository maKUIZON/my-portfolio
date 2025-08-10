import React, { useEffect, useRef, useState } from "react";

const techLogos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://vitejs.dev/logo.svg",
  "https://www.vectorlogo.zone/logos/dotnet/dotnet-tile.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://vitejs.dev/logo.svg",
  "https://www.vectorlogo.zone/logos/dotnet/dotnet-tile.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
];

const SlidingImages = ({ images = techLogos, speed = 50 }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    const step = (timestamp) => {
      if (lastTimestampRef.current == null) lastTimestampRef.current = timestamp;

      const delta = timestamp - lastTimestampRef.current;
      lastTimestampRef.current = timestamp;

      if (!isPaused && container) {
        container.scrollLeft += (delta / 1000) * speed;

        // Loop back when half scrolled
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationRef.current);
  }, [speed, isPaused]);

  const scrollingImages = [...images, ...images]; 

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="w-full overflow-hidden whitespace-nowrap scrollbar-none py-4"
      style={{ scrollBehavior: "auto", cursor: "pointer" }}
    >
      {scrollingImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`tech-${i}`}
          className="inline-block w-[50px] h-[50px] object-contain mx-4 grayscale hover:grayscale-0 transition duration-300"
          draggable={false}
        />
      ))}
    </div>
  );
};

export default SlidingImages;
