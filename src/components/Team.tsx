import { Card, CardContent } from "@/components/ui/card";
import { Phone } from "lucide-react";
import image1 from "@/assets/team/Timpula Santhosh  kumar  (founder ).png";
import image2 from "@/assets/team/megavath Anitha (Vice-prasient).png";
import image3 from "@/assets/team/M.Mallesh (Genral sec).png";
import image4 from "@/assets/team/Hanumanth .(Join secu).png";
import image5 from "@/assets/team/K.Divya(truserer).png";
import image6 from "@/assets/team/Saritha (Excutive member).png"
import image7 from "@/assets/team/Divya Bharati (Exceutive member).png"
import image8 from "@/assets/team/Saidulu (excutive member).png"
import image9 from "@/assets/team/V.thirupath Nailk (legal advisor & Committe menmber).jpg"

const Team = () => {
  const teamMembers = [
    {
      name: "Timpula Santhosh Kumar",
      position: "President & Founder",
      phone: "8106143737",
      role: "primary",
      image: image1,
    },
    {
      name: "Megavath Anitha",
      position: "Vice President",
      phone: "8106243737",
      role: "primary",
      image: image2,
    },

    { name: "Medamoni Mallesh", position: "General Secretary", role: "executive", image: image3 },
    { name: "Daragoni Hanumanthu", position: "Joint Secretary", role: "executive", image: image4 },
    { name: "Kompelli Divya", position: "Treasurer", role: "executive", image: image5 },

    { name: "Saritha Satyagama", position: "Executive Member", role: "member", image: image6 },
    { name: "Divya Bharathi Chenigala", position: "Executive Member", role: "member", image: image7 },
    { name: "Saidulu Bandela", position: "Member", role: "member", image: image8 },
    { name: "V. Thirupathi Naik", position: "Legal advisor & committee members" , role: "member" ,  image: image9}
  ];

  return (
    <div id="team" className="min-h-screen pb-4 scroll-mt-28">
      <section className="py-12">
        <div className="container mx-auto px-4">

          {/* SECTION TITLE */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Dedicated individuals committed to making a difference in society through service and compassion.
            </p>
          </div>

          {/* PRIMARY LEADERSHIP */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {teamMembers.filter(m => m.role === "primary").map((member, index) => (
              <Card
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{member.position}</p>

                  {member.phone && (
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${member.phone}`} className="hover:text-secondary transition-colors">
                        {member.phone}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* EXECUTIVE COMMITTEE */}
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Executive Committee</h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {teamMembers.filter(m => m.role === "executive").map((member, index) => (
              <Card
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>

                  <h4 className="text-lg font-semibold text-navy mb-1">{member.name}</h4>
                  <p className="text-secondary text-sm">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* MEMBERS */}
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Team Members</h3>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {teamMembers.filter(m => m.role === "member").map((member, index) => (
              <Card
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 shadow-md">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>

                  <h4 className="font-semibold text-navy mb-1">{member.name}</h4>
                  <p className="text-secondary text-sm">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Team;
