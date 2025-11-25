import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Images from the parsed PDF
  const galleryImages = [
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_1.jpg",
      caption: "Blanket Distribution - Old Age Home",
      category: "Community Service"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_2.jpg",
      caption: "Supporting Senior Citizens",
      category: "Elder Care"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_3.jpg",
      caption: "Blanket Donation Drive",
      category: "Winter Relief"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_4.jpg",
      caption: "Community Outreach",
      category: "Community Service"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_5.jpg",
      caption: "Helping Hands in Action",
      category: "Volunteering"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p1_3.jpg",
      caption: "COVID Relief - Food Distribution",
      category: "Food Drive"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p1_4.jpg",
      caption: "Hospital Food Support",
      category: "Healthcare Support"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p1_5.jpg",
      caption: "Feeding the Needy",
      category: "Food Drive"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p1_6.jpg",
      caption: "Street Food Distribution",
      category: "Community Service"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p2_2.jpg",
      caption: "School Bags Distribution",
      category: "Education"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p2_4.jpg",
      caption: "Girls School Support",
      category: "Education"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p2_5.jpg",
      caption: "Educational Kit Distribution",
      category: "Education"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p2_6.jpg",
      caption: "Exam Pads & Supplies",
      category: "Education"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p2_7.jpg",
      caption: "Orphanage Support",
      category: "Child Welfare"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p3_1.jpg",
      caption: "School Supplies Program",
      category: "Education"
    },
    {
      src: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p3_3.jpg",
      caption: "Community Gathering",
      category: "Community Service"
    }
  ];

  return (
    <>
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold inline-block mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Witness the impact of our work through these moments captured during our various programs and initiatives across Telangana.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="group cursor-pointer overflow-hidden hover:shadow-elegant transition-all border-border"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-semibold mb-1">{image.caption}</p>
                      <span className="text-xs bg-secondary px-2 py-1 rounded-full">{image.category}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Follow us on Instagram for more updates and stories
            </p>
            <a 
              href="https://instagram.com/sankeerthanafoundations1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @sankeerthanafoundations1
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          <img 
            src={selectedImage || ""} 
            alt="Gallery" 
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
