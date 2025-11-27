import logo from "@/assets/logo.png";
import { Instagram, Phone, MapPin, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Sankeerthana Foundation" className="h-12 w-auto" />
              <div>
                <h3 className="font-bold text-lg">Sankeerthana</h3>
                <p className="text-sm text-white/70">Foundations</p>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Reg: 470/2021 - A non-profit organization dedicated to serving senior citizens and children with compassion and dignity.
            </p>

            <div className="flex gap-3">
              <a
                href="https://instagram.com/sankeerthanafoundations1"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://facebook.com/sankeerthanafoundation"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://youtube.com/@sankeerthanafoundation"
                target="_blank"
                className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Goals", "Services", "Gallery", "News", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-white/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>Educational Support</li>
              <li>Healthcare Camps</li>
              <li>Food Distribution</li>
              <li>Senior Citizen Care</li>
              <li>Blanket Distribution</li>
              <li>Vocational Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-white/70">
                  H.No 10-3-48/A/1, Kameswar Rao Colony, Lingojiguda, Saroor Nagar, Telangana - 500035
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:9959189407" className="text-white/70 hover:text-secondary transition-colors">
                  Official Number : 9959189407
                </a>
              </li>

              <li className="flex gap-2 items-center">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:8106143737" className="text-white/70 hover:text-secondary transition-colors">
                  President : 8106143737
                </a>
              </li>

              <li className="flex gap-2 items-center">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                <a href="tel:8106243737" className="text-white/70 hover:text-secondary transition-colors">
                  Vice President : 8106243737
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-white/70 text-sm text-center">
            © 2024 Sankeerthana Foundations. All rights reserved.
            <br className="md:hidden" />
            | Developed by <span className="text-secondary font-semibold">Build Your Vision</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
