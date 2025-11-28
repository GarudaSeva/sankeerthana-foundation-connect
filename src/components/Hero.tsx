import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, HandHeart } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-10 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-muted -z-10" />

      <div className="container mx-auto px-4 py-24">
        <div className="w-full flex justify-center mb-2 relative">
          <div className="inline-block relative mb-4">
            <h1 className="text-center text-5xl md:text-7xl font-extrabold text-secondary uppercase">
              SANKEERTHANA FOUNDATIONS
            </h1>

            <span className="absolute right-0 top-full text-sm font-semibold text-primary mt-4">
              Reg: 470 of 2021
            </span>
          </div>
        </div>
        {/* CENTER BADGE */}
        <div className="w-full flex justify-center py-8">
          <span className="px-6 py-3 bg-secondary/10 text-navy rounded-full text-md font-semibold">
            Making a Difference Since 2021
          </span>
        </div>

        <div className="mb-16 flex justify-center rounded-2xl">
          <HeroCarousel />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Empowering Lives Through
              <span className="block text-secondary mt-2">
                Care & Education
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Sankeerthana Foundations is dedicated to providing education,
              healthcare, and dignity to senior citizens and children across
              Telangana. Together, we're building a better tomorrow.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("contact")}
              >
                <HandHeart className="mr-2 h-5 w-5" />
                Support Our Cause
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-navy text-navy hover:bg-navy hover:text-white"
                onClick={() => scrollToSection("about")}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy">500+</div>
                <div className="text-sm text-muted-foreground">
                  Lives Touched
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy">50+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE – Feature Cards */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-card p-8 min-h-[200px] rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">
                Supporting schools and vocational training
              </p>
            </div>

            <div className="bg-card p-8 min-h-[200px] rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">
                Health camps and medical support
              </p>
            </div>

            <div className="bg-card p-8 min-h-[200px] rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Senior Care</h3>
              <p className="text-sm text-muted-foreground">
                Dignity and support for elderly
              </p>
            </div>

            <div className="bg-card p-8 min-h-[200px] rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HandHeart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Building bridges across generations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
