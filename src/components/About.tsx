import { CheckCircle, Heart, Users, Target, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import volunteersImage from "@/assets/gallery/image9.jpeg";

const About = () => {
  const objectives = [
    "To provide and spread primary, secondary and higher education by establishing or collaborating with schools, colleges, institutions, libraries, and research in the education field.",
    "To work towards the healthy golden years of senior citizens and children by organizing health camps at various places to monitor and improve their wellbeing.",
    "To address educational needs by providing academic education, training and job-oriented vocational training to specific age groups, empowering them for better futures.",
    "To build a place that brings about synergies between senior citizens and children, fostering understanding and mutual support across generations.",
    "To organize outreach programs focused on providing dignity, care and security to the elderly through volunteer efforts and compassionate service.",
    "To provide club and recreational facilities to senior citizens so they can spend their time in a constructive, engaging and fulfilling manner."
  ];

  const declarations = [
    "The association is formed with no profit motive and commercial activities involved in its working",
    "The office bearers are not paid from the association",
    "The association would not engage in agitational activities to ventilate grievances",
    "Non-political organization focused solely on social welfare",
    "Verified and genuine office bearer signatures on record"
  ];

  return (
    <div id="about" className="min-h-screen pb-4 scroll-mt-28">
    <div className="min-h-screen  pb-4">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-4 animate-fade-in">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about our mission to uplift communities through compassion and service
          </p>
        </div>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
  src={volunteersImage} 
  alt="Sankeerthana Foundation Team" 
  className="rounded-2xl shadow-2xl w-full h-[320px] object-cover"
/>

            </div>
           <div className="animate-slide-in-right">
  <div className="flex items-center gap-2 mb-4">
    <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
  </div>

  <p className="text-lg text-foreground leading-relaxed mb-4">
    Sankeerthana Foundation is a non-profit organization formed with the vision 
    to uplift children, senior citizens, and underserved communities through 
    education, health, care, dignity, and empowerment initiatives.
  </p>

  <p className="text-lg text-foreground leading-relaxed mb-4">
    We believe in creating strong emotional and learning synergies between 
    generations, fostering a society where everyone has access to education, 
    healthcare, and the dignity they deserve.
  </p>

  <p className="text-lg text-foreground leading-relaxed mb-4">
    Our mission is to bridge the gap between privilege and need by extending 
    support, guidance, and resources to those who require them the most.
  </p>
</div>
          </div>
        </section>

        {/* Aims & Objectives */}
        <section className="mb-16">
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
                    <CheckCircle className="text-hope flex-shrink-0 mt-1" size={24} />
                    <p className="text-foreground leading-relaxed">{objective}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Declaration Section */}
        <section className="mb-4">
          <Card className="bg-primary/10 ">
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
                    <CheckCircle className="text-trust flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">{declaration}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
    </div>
  );
};

export default About;
