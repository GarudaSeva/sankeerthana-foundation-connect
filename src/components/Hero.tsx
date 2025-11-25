import { Button } from "@/components/ui/button";
import { Heart, Users, GraduationCap, HandHeart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-background to-muted -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
                Making a Difference Since 2021
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Empowering Lives Through
              <span className="block text-secondary mt-2">
                Care & Education
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Sankeerthana Foundation is dedicated to providing education, healthcare, and dignity to senior citizens and children across Telangana. Together, we're building a better tomorrow.
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
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy">500+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
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

          {/* Feature Cards */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">Supporting schools and vocational training</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1 mt-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Healthcare</h3>
              <p className="text-sm text-muted-foreground">Health camps and medical support</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Senior Care</h3>
              <p className="text-sm text-muted-foreground">Dignity and support for elderly</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all border border-border group hover:-translate-y-1 mt-8">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HandHeart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-navy mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">Building bridges across generations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
