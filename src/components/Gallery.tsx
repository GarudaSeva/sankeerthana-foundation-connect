import { useState } from "react";

// Import all images
import image1 from "@/assets/gallery1/donation1.jpg";
import image2 from "@/assets/gallery1/image.png";
import image3 from "@/assets/gallery1/donations3.jpg";
import image4 from "@/assets/gallery1/donations4.jpg";
import image5 from "@/assets/gallery1/service.jpg";
import image6 from "@/assets/gallery1/service1.jpg";
import image7 from "@/assets/gallery1/service3.jpg";
import image8 from "@/assets/gallery1/service4.jpg";
import image9 from "@/assets/gallery1/service6.jpg";
import image10 from "@/assets/gallery1/service8.jpg";
import image11 from "@/assets/gallery1/blanket-deonations.jpg";
import image12 from "@/assets/gallery1/blanket-donation3.jpg";
import image13 from "@/assets/gallery1/blanketdonation2.jpg";
import image14 from "@/assets/gallery1/food donations.jpg";
import image15 from "@/assets/gallery1/food-donation7.jpg";
import image16 from "@/assets/gallery1/food.jpg";
import image17 from "@/assets/gallery1/fruit-distrubtions.jpg";

import image18 from "@/assets/news/calender.jpeg";
import image19 from "@/assets/news/andula support.jpeg";
import image20 from "@/assets/news/diwyanga.jpeg"
import { Instagram } from "lucide-react";

interface GalleryItem {
  src: string;
  caption: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Donations", "Services", "News"];

  const galleryImages: GalleryItem[] = [
    { src: image1, caption: "Money Donation", category: "Donations" },
    { src: image2, caption: "Food Donation", category: "Donations" },
    { src: image3, caption: "School Children Donate Money", category: "Donations" },
    { src: image4, caption: "School Chindren Donate Money", category: "Donations" },
    { src: image5, caption: "Helping Hands", category: "Services" },
    { src: image6, caption: "Motivate Students to Donate", category: "Services" },
    { src: image7, caption: "Donate Water Dispenser", category: "Services" },
    { src: image8, caption: "Donate Water Dispenser", category: "Services" },
    { src: image9, caption: "Handicapped children birthday celebration", category: "Services" },
    { src: image10, caption: "Vacational Training in Handicapped schools", category: "Services" },


    { src: image11, caption: "Blanket Donations", category: "Donations" },
    { src: image12, caption: "Blanket Donations", category: "Donations" },
    { src: image13, caption: "Blanket Donations", category: "Donations" },

    { src: image14, caption: "Street Food Distribution", category: "Services" },
    { src: image15, caption: "Food Distribution in Hospitals", category: "Services" },
    { src: image16, caption: "Food Distribution", category: "Donations" },
    { src: image17, caption: "Fruit Distribution", category: "Donations" },

    { src: image18, caption: "Calender Launch", category: "News" },
    { src: image19, caption: "Government support Handicapped people", category: "News" },
    { src: image20, caption: "Government Support Handicapped People", category: "News" },

  ];

  const filteredImages =
  activeCategory === "All"
    ? [...galleryImages].sort(() => Math.random() - 0.5).slice(0, 9)
    : galleryImages.filter((img) => img.category === activeCategory).slice(0, 9);

  return (
    <section id="gallery" className="py-12 scroll-mt-28">
  <div className="mx-auto px-1 max-w-[1400px]">   {/* Wider container & minimal side padding */}

    {/* Title */}
    <div className="text-center mb-6">
      <h2 className="text-4xl md:text-5xl font-bold text-navy mb-2">
        Gallery
      </h2>
      <p className="text-muted-foreground text-md max-w-2xl mx-auto">
        Explore our activities and captured moments
      </p>
    </div>

    {/* Category Tabs */}
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-5 py-1.5 rounded-full text-lg font-medium transition-all ${
            activeCategory === cat
              ? "bg-secondary text-white shadow"
              : "bg-muted text-muted-foreground hover:bg-muted/70"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Gallery Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {filteredImages.map((image, index) => (
        <div
  key={index}
  onClick={() => setSelectedImage(image.src)}
  className="group relative h-56 rounded-xl overflow-hidden bg-muted shadow-sm hover:shadow-xl cursor-pointer transition-all"
>
  <img
    src={image.src}
    alt={image.caption}
    className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  
  <div className="absolute bottom-0 left-0 right-0 p-2 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
    <p className="text-white text-xs text-center font-medium">
      {image.caption}
    </p>
  </div>
</div>

      ))}
    </div>

    {/* Instagram CTA */}
    <div className="text-center mt-12 flex flex-col items-center">
  <p className="text-navy text-2xl md:text-2xl font-extrabold mb-3">
    See more on Instagram
  </p>

  <a
    href="https://instagram.com/sankeerthanafoundations1"
    target="_blank"
    className="flex items-center gap-3 b"
  >
    <Instagram className="w-8 h-8 text-secondary" />

    <span className="text-secondary font-bold text-2xl md:text-3xl">
      @sankeerthanafoundations1
    </span>
  </a>
</div>
  </div>
</section>

  );
};

export default Gallery;
