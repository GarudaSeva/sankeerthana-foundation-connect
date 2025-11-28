import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Navigation } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import instagramQR from "@/assets/instagram-qr.png";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const cleanPhone = formData.phone.replace(/\D/g, ""); // remove non digits

  const message = encodeURIComponent(
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${cleanPhone}\n` +
    `Message: ${formData.message}`
  );

  const whatsappUrl = `https://wa.me/918106143737?text=${message}`;
  window.open(whatsappUrl, "_blank");

  toast({
    title: "Opening WhatsApp...",
    description: "Your message will be sent through WhatsApp.",
  });

  setFormData({ name: "", email: "", phone: "", message: "" });
};


  const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    content: "H.No 10-3-48/A/1, Kameswar Rao Colony, Lingojiguda, Saroor Nagar, Telangana - 500035",
    link: "https://maps.google.com/?q=H.No+10-3-48/A/1+Kameswar+Rao+Colony+Lingojiguda+Saroor+Nagar+Telangana+500035"
  },
  {
    icon: Phone,
    title: "Call Us",
      content: "Official Number: 9959189407\nPresident: 8106143737\nVice President: 8106243737",
      link: "tel:8106143737"
  },
  {
    title: "Follow Us",
    socials: [
      { icon: Instagram, link: "https://instagram.com/sankeerthanafoundations1" },
      { icon: Facebook, link: "https://facebook.com/sankeerthanafoundation" },
      { icon: Youtube, link: "https://youtube.com/@sankeerthanafoundation" }
    ]
  }
];



  return (
            <div  className="pb-0 scroll-mt-24">

    <section className="bg-background pt-28 pb-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Reach out and let's work together to make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border shadow-card">
            <CardContent className="p-8">
              {/* <h3 className="text-2xl font-bold text-navy mb-6">Send us a Message</h3> */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    required
                    placeholder="Tell us how you'd like to help or any questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="border-input"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
         {contactInfo.map((info, index) => (
  <Card key={index} className="border-border hover:shadow-card transition-all group">
    <CardContent className="p-6">
      <div className="flex gap-4">

        {/* Show icon only for first 2 cards */}
        {info.icon && (
          <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
            <info.icon className="h-6 w-6 text-secondary" />
          </div>
        )}

        <div className="flex-1">
          <h4 className="font-semibold text-navy mb-2">{info.title}</h4>

          {/* Show content only for cards that have content */}
          {info.content && (
            <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
          )}

          {/* Social icons only below Follow Us title */}
          {info.socials && (
            <div className="flex gap-4 mt-3">
              {info.socials.map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-secondary" />
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </CardContent>
  </Card>
))}


  <Button
    size="lg"
    className="bg-navy hover:bg-secondary/90 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
    onClick={() =>
      window.open(
        "https://www.google.com/maps?q=H.No+10-3-48%2FA%2F1+Kameswar+Rao+Colony+Lingojiguda+Saroor+Nagar+Telangana+500035",
        "_blank"
      )
    }
  >
    <Navigation className="w-5 h-5 mr-2" />
    Get Location
  </Button>

          
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
