import { Card, CardContent } from "@/components/ui/card";
import povertyImg from "@/assets/initiatives/no-poverty.jpg";
import hungerImg from "@/assets/initiatives/zero-hunger.jpg";
import healthImg from "@/assets/initiatives/good-health.jpg";
import educationImg from "@/assets/initiatives/education.jpg";
import waterImg from "@/assets/initiatives/water.jpg";
import inequalityImg from "@/assets/initiatives/inequality.jpg";
import landImg from "@/assets/initiatives/land-earth.jpg";
import partnershipImg from "@/assets/initiatives/patnerships.jpg";

const initiatives = [
  {
    title: "No Poverty",
    text: "We work to eradicate poverty by providing access to education, healthcare, and economic opportunities for marginalized communities.",
    img: povertyImg,
  },
  {
    title: "Zero Hunger",
    text: "Through our agricultural programs and food security initiatives, we aim to eliminate hunger and ensure access to nutritious food for all.",
    img: hungerImg,
  },
  {
    title: "Good Health",
    text: "We promote healthcare access and disease prevention, striving to improve the health and well-being of individuals and communities.",
    img: healthImg,
  },
  {
    title: "Quality Education",
    text: "Education is at the core of our mission. Every child deserves access to quality education, regardless of their circumstances.",
    img: educationImg,
  },
  {
    title: "Clean Water",
    text: "We support initiatives to ensure access to clean water and sanitation facilities, promoting hygiene and better living.",
    img: waterImg,
  },
  {
    title: "Reduce Inequality",
    text: "We work to empower marginalized groups, promoting fairness and equal access to resources and opportunities.",
    img: inequalityImg,
  },
  {
    title: "Life On Land",
    text: "We work to conserve natural resources, protect wildlife habitats, and promote sustainable land use.",
    img: landImg,
  },
  {
    title: "Partnerships",
    text: "We collaborate with organizations and communities to build strong and sustainable development solutions.",
    img: partnershipImg,
  },
];

const Initiatives = () => {
  return (
    <div className="min-h-screen pb-4 scroll-mt-28">
    <section  className="container mx-auto px-4 mt-28" >
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-5xl font-bold text-navy mb-4">
          Our Goals & Initiatives
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Address a wide range of global challenges to create sustainable change.
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {initiatives.map((item, index) => (
          <Card
  key={index}
  className="bg-white/90 hover:bg-white shadow-md hover:shadow-2xl transition-all duration-300 rounded-3xl border border-white/40 w-full h-[330px] flex flex-col items-center justify-start"
>
  <div className="p-3 flex justify-center">
    <img
      src={item.img}
      alt={item.title}
      className="w-36 h-36 object-cover rounded-2xl mx-auto"
    />
  </div>

  <CardContent className="px-4 pb-4 pt-0 flex flex-col items-center text-center">
    <h3 className="text-xl font-bold text-primary mb-2">
      {item.title}
    </h3>
    <p className="text-muted-foreground text-sm text-justify leading-relaxed max-w-[230px]">
      {item.text}
    </p>
  </CardContent>
</Card>


        ))}
      </div>
    </section>
    </div>
  );
};

export default Initiatives;
