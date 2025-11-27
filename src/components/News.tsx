import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

import image1 from "@/assets/flashjj/IMG-20241222-WA0000.jpg";
import image2 from "@/assets/flashjj/IMG-20241223-WA0006.jpg";
import image3 from "@/assets/gallery1/donations4.jpg";
import image4 from "@/assets/gallery1/service1.jpg";
import image5 from "@/assets/gallery1/service3.jpg"


const News = () => {
  const newsArticles = [
    {
      title: "Calendar Launch Event",
      date: "September 2023",
      image: image1,
      category: "Event Launch",
    },
    {
      title: "Support for Differently-Abled Individuals",
      date: "August 2023",
      image: image2,
      category: "Government Support",
    },
    {
      title: "Inclusive Education & Braille Support",
      date: "Ongoing Program",
      image: image3,
      category: "Education Support",
    },
    {
      title: "Inclusive Education & Braille Support",
      date: "Ongoing Program",
      image: image4,
      category: "Education Support",
    },
    {
      title: "Inclusive Education & Braille Support",
      date: "Ongoing Program",
      image: image5,
      category: "Education Support",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === newsArticles.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const current = newsArticles[currentIndex];

  return (
    <section id="news" className="py-12 scroll-mt-28 bg-background">
      <div className="mx-auto px-2 max-w-[1200px]">
        {" "}
        {/* more width & less padding */}
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-navy">
            Flash News
          </h2>
          <p className="text-muted-foreground mt-4 text-md max-w-2xl mx-auto">  Highlights from our latest initiatives, programs, and community activities. </p>
        </div>
        {/* Auto-Sliding Banner */}
        <Card className="relative overflow-hidden rounded-3xl shadow-2xl border border-border mt-12">
          <div className="relative h-[420px] md:h-[470px] lg:h-[500px] overflow-hidden">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover brightness-90 transition-all duration-700"
            />
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {newsArticles.map((_, idx) => (
              <span
                key={idx}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? "bg-secondary w-6" : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default News;
