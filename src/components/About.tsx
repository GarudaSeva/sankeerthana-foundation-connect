import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Users, BookOpen, Stethoscope, Building } from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: BookOpen,
      title: "Educational Excellence",
      description: "To provide and spread primary, secondary and higher education by establishing or collaborating with schools, colleges, institutions, libraries, and research in the education field."
    },
    {
      icon: Stethoscope,
      title: "Healthcare Initiatives",
      description: "To work towards the healthy golden years of senior citizens and children by organizing health camps at various places to monitor and improve their wellbeing."
    },
    {
      icon: Users,
      title: "Vocational Training",
      description: "To address educational needs by providing academic education, training and job-oriented vocational training to specific age groups, empowering them for better futures."
    },
    {
      icon: Building,
      title: "Intergenerational Synergy",
      description: "To build a place that brings about synergies between senior citizens and children, fostering understanding and mutual support across generations."
    },
    {
      icon: Heart,
      title: "Dignity for Elderly",
      description: "To organize outreach programs focused on providing dignity, care and security to the elderly through volunteer efforts and compassionate service."
    },
    {
      icon: Target,
      title: "Recreational Facilities",
      description: "To provide club and recreational facilities to senior citizens so they can spend their time in a constructive, engaging and fulfilling manner."
    }
  ];

  const certifications = [
    "Certified non-profit organization with no commercial activities",
    "All office bearers serve without payment from the association",
    "Non-political organization focused solely on social welfare",
    "Verified and genuine office bearer signatures on record"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold inline-block mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sankeerthana Foundation (Reg: 470/2021) is dedicated to creating a compassionate society where education, healthcare, and dignity are accessible to all, especially senior citizens and children.
          </p>
        </div>

        {/* Aims & Objectives */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy mb-8 text-center">Our Aims & Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all border-border hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <obj.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-3">{obj.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{obj.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Our Commitment to Transparency</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                </div>
                <p className="text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-cream rounded-xl p-6 border border-border">
            <h4 className="font-semibold text-navy mb-2">Our Location</h4>
            <p className="text-muted-foreground">
              H.No 10-3-48/A/1, Kameswar Rao Colony<br />
              Lingojiguda, Saroor Nagar<br />
              Telangana - 500035
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
