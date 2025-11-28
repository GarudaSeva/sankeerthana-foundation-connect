import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Label } from "recharts";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Goals", id: "goals"},
    { label: "Services", id: "services" },
    { label: "Gallery", id: "gallery" },
    { label: "Team", id: "team" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Sankeerthana Foundation" className="h-14 w-auto" />
            <div>
              <h1 className="text-2xl font-bold text-navy">Sankeerthana Foundations
              </h1>
              <p className="text-xs text-muted-foreground">Caring Hands for living Hearts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-secondary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button variant="default" className="bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection("donate")}>
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button variant="default" className="w-full bg-secondary hover:bg-secondary/90" onClick={() => scrollToSection("donate")}>
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
