import { useState, useEffect } from "react";

import img1 from "@/assets/hero/Screenshot from 2025-11-27 17-33-13.webp";
import img2 from "@/assets/hero/Screenshot from 2025-11-27 17-34-05.webp";
import img3 from "@/assets/hero/Screenshot from 2025-11-27 17-34-33.webp";
import img4 from "@/assets/hero/Screenshot from 2025-11-27 17-35-04.webp";
import img5 from "@/assets/hero/Screenshot from 2025-11-27 17-35-35.webp";
import img6 from "@/assets/hero/Screenshot from 2025-11-27 17-36-08.webp"

const images = [img1, img4, img3, img2, img5 , img6];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-56 sm:h-72 md:h-[450px] lg:h-[550px] overflow-hidden rounded-2xl">
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
