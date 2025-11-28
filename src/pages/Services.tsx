import { Card, CardContent } from "@/components/ui/card";
import blanketImg from "@/assets/services/blanket-distribution.png";
import foodImg from "@/assets/services/food-donation.jpg";
import schoolImg from "@/assets/services/school-supplies.jpg";
import healthImg from "@/assets/services/health-camps.jpg";
import educationImg from "@/assets/services/education-support.jpg";
import oldageImg from "@/assets/services/old-age-home.jpg";
import communityImg from "@/assets/services/community-programs.jpg";
import clothesImg from "@/assets/services/clothing-drive.jpg";

const Services = () => {
  const services = [
    { title: "Blanket Distribution", description: "Providing warm blankets to old age homes and underprivileged communities across Achampet, Kalvakurthy, Mysigandi, Chandravanka Vagu, and Hyderabad.", img: blanketImg },
    { title: "Food Donation", description: "Regular food distribution programs at hospitals, orphanages, and on the streets, especially during COVID-19 and other times of crisis.", img: foodImg },
    { title: "School Supplies", description: "Distributing school bags, exam pads, stationery kits, and educational materials to orphanages and underprivileged school children.", img: schoolImg },
    { title: "Health Camps", description: "Organizing medical checkup camps for senior citizens and children, providing free health monitoring and basic medical assistance.", img: healthImg },
    { title: "Educational Support", description: "Collaborating with schools and institutions to improve education quality and provide academic support to underprivileged students.", img: educationImg },
    { title: "Old Age Support", description: "Creating recreational facilities and providing essential support to senior citizens, ensuring they live with dignity and comfort.", img: oldageImg },
    { title: "Community Programs", description: "Bringing together senior citizens and children to promote understanding, emotional bonding and stronger communities.", img: communityImg },
    { title: "Clothing Drive", description: "Distributing clothes and essential items to homeless individuals and families in need across various communities.", img: clothesImg },
  ];

  return (
    <div  className="min-h-screen pb-4 scroll-mt-28">
      <section className="py-12 bg-background pt-28 mb-8">
        <div className="container mx-auto px-4">

          {/* Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
              Our Services & Programs
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Making a real difference in communities through dedicated service
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl border border-gray-200 hover:-translate-y-2 cursor-pointer"
              >
                <div className="p-4">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-44 object-cover rounded-2xl"
                  />
                </div>

                <CardContent className="px-6 pb-6 pt-0">
                  <h3 className="text-xl font-bold text-navy mb-3 text-center">
                    {service.title}
                  </h3>
                  <h5 className="text-muted-foreground text-sm leading-relaxed text-justify">
                    {service.description}
                  </h5>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;
