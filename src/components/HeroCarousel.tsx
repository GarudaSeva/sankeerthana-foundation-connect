import { useState, useEffect } from "react";

const images = [
  "src/assets/hero/Screenshot from 2025-11-27 17-33-13.png",
  "src/assets/hero/Screenshot from 2025-11-27 17-34-05.png",
  "src/assets/hero/Screenshot from 2025-11-27 17-34-33.png",
  "src/assets/hero/Screenshot from 2025-11-27 17-35-35.png",
  "src/assets/hero/Screenshot from 2025-11-27 17-36-08.png",
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[550px] overflow-hidden">
      <img
        key={current}
        src={images[current]}
        alt="carousel"
        className="w-full h-full object-cover transition-opacity duration-700"
      />
    </div>
  );
};

export default HeroCarousel;
