import { Card, CardContent } from "@/components/ui/card";
import { 
  Gift, 
  Utensils, 
  Backpack, 
  HeartPulse, 
  GraduationCap, 
  Home,
  Users,
  Shirt
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Gift,
      title: "Blanket Distribution",
      description: "Providing warm blankets to old age homes and underprivileged communities across Achampet, Kalvakurthy, Mysigandi, Chandravanka Vagu, and Hyderabad.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Utensils,
      title: "Food Donation",
      description: "Regular food distribution programs at hospitals, orphanages, and on the streets, especially during COVID-19 and other challenging times.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: Backpack,
      title: "School Supplies",
      description: "Distributing school bags, exam pads, stationery kits, and educational materials to orphanages and underprivileged school children.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: HeartPulse,
      title: "Health Camps",
      description: "Organizing medical checkup camps for senior citizens and children, providing free health monitoring and basic medical assistance.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: GraduationCap,
      title: "Educational Support",
      description: "Collaborating with schools and institutions to improve education quality and provide academic support to underprivileged students.",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Home,
      title: "Old Age Support",
      description: "Creating recreational facilities and providing essential support to senior citizens, ensuring they live with dignity and comfort.",
      color: "bg-teal-50 text-teal-600"
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Organizing outreach programs that bring together senior citizens and children, fostering intergenerational understanding and support.",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      icon: Shirt,
      title: "Clothing Drive",
      description: "Distributing clothes and essential items to homeless individuals and families in need across various communities.",
      color: "bg-pink-50 text-pink-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold inline-block mb-4">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Services & Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive range of social services aimed at improving the lives of senior citizens, children, and underprivileged communities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all border-border hover:-translate-y-2 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-navy to-navy-dark text-white rounded-2xl p-8 md:p-12 text-center shadow-elegant">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Want to Make a Difference?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join us in our mission to serve the community. Whether through volunteering, donations, or spreading awareness, every contribution matters.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Get Involved Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
