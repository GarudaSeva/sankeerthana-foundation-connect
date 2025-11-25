import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
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

  const whatsappNumber = "8106143737";
  const whatsappMessage = 
    `Name: ${formData.name}%0A` +
    `Email: ${formData.email}%0A` +
    `Phone: ${formData.phone || "N/A"}%0A` +
    `Message: ${formData.message}`;

  // WhatsApp deep link
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");

  // Optional Toast
  toast({
    title: "Opening WhatsApp...",
    description: "Your message will be sent through WhatsApp.",
  });

  // Reset form
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
      content: "President: 8106143737\nVice President: 8106243737",
      link: "tel:8106143737"
    },
    {
      icon: Instagram,
      title: "Follow Us",
      content: "@sankeerthanafoundations1",
      link: "https://instagram.com/sankeerthanafoundations1"
    }
  ];

  return (
            <div id="contact" className="min-h-screen pb-4 scroll-mt-28">

    <section id="contact" className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
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
              <h3 className="text-2xl font-bold text-navy mb-6">Send us a Message</h3>
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
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-2">{info.title}</h4>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}

          

            {/* Map */}
            <Card className="border-border overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1234567890!2d78.5!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIxJzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sankeerthana Foundation Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
