import { CheckCircle, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import volunteersImage from "@/assets/mission.png";
import missionImg from "@/assets/gallery/image10.jpeg";
import valuesImg from "@/assets/values.png";

const About = () => {
  const missionVisionValues = [
    {
      title: "Our Mission",
      text: `Making Food, Shelter, Medical and Education affordable to 
             everyone  for an equal world with personalized campaign 
             solutions for personal & social causes. We are continuously
            impacting the lives of needy people through fundraising 
            activities, and campaigns.`,
      img: missionImg,
      reverse: false,
    },
    {
      title: "Our Vision",
      text: `By fostering collaboration, resilience, and access to opportunities, 
      we envision a world where every individual has the tools and resources 
      needed to thrive, regardless of their economic circumstances.`,
      img: volunteersImage,
      reverse: true,
    },
    {
      title: "Our Values",
      text: `At Sankeerthana Foundations, we value compassion, integrity,
       and community. We're dedicated to making vital services like 
       food, shelter, healthcare, and education accessible to all. 
       Through personalized campaigns and social responsibility, 
       we're building a more equitable world for everyone.`,
      img: valuesImg,
      reverse: false,
    },
  ];

  const objectives = [
    "To provide and spread primary, secondary and higher education by establishing or collaborating with schools, colleges, institutions, libraries, and research in the education field.",
    "To work towards the healthy golden years of senior citizens and children by organizing health camps at various places to monitor and improve their wellbeing.",
    "To address educational needs by providing academic education, training and job-oriented vocational training to specific age groups, empowering them for better futures.",
    "To build a place that brings about synergies between senior citizens and children, fostering understanding and mutual support across generations.",
    "To organize outreach programs focused on providing dignity, care and security to the elderly through volunteer efforts and compassionate service.",
    "To provide club and recreational facilities to senior citizens so they can spend their time in a constructive, engaging and fulfilling manner.",
  ];

  const declarations = [
    "The association is formed with no profit motive and commercial activities involved in its working",
    "The office bearers are not paid from the association",
    "The association would not engage in agitational activities to ventilate grievances",
    "Non-political organization focused solely on social welfare",
    "Verified and genuine office bearer signatures on record",
  ];

  return (
    <div id="about" className="min-h-screen pb-4 scroll-mt-28">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about our mission to uplift communities through compassion and service
          </p>
        </div>

        {/* Mission Vision Values Section */}
   <section className="space-y-24 mb-20">
  {missionVisionValues.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col md:flex-row items-center gap-24 ${
        index === 1 ? "md:flex-row-reverse" : ""
      }`}
    >

      {/* Image Card */}
      <div
        className={`w-full md:w-2/4 h-[300px] overflow-hidden shadow-2xl ${
          index === 1 ? "rounded-l-[150px]" : "rounded-r-[150px]"
        } bg-white`}
      >
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="md:w-1/2 flex flex-col">
        <h2 className="text-4xl font-bold text-secondary mb-3">
          {item.title}
        </h2>
        <p className="text-lg leading-relaxed whitespace-pre-line text-justify max-w-[650px]">
          {item.text}
        </p>
      </div>
    </div>
  ))}
</section>






        {/* Aims & Objectives */}
        <section>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="text-primary" size={36} />
              <h2 className="text-4xl font-bold text-primary">Aims & Objectives</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <Card key={index} className="card-hover border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex gap-3">
                    <CheckCircle className="text-hope mt-1" size={24} />
                    <p className="text-foreground leading-relaxed">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Declaration Section */}
        <section className="mt-12">
          <Card className="bg-primary/10">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Award className="text-primary" size={32} />
                <CardTitle className="text-3xl">Non-Profit Declarations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {declarations.map((declaration, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="text-trust mt-1" size={20} />
                    <p className="text-foreground">{declaration}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
