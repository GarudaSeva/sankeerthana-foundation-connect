import { Card, CardContent } from "@/components/ui/card";
import { User, Phone } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Timpula Santhosh Kumar",
      position: "President & Founder",
      phone: "8106143737",
      role: "primary"
    },
    {
      name: "Megavath Anitha",
      position: "Vice President",
      phone: "8106243737",
      role: "primary"
    },
    {
      name: "Medamoni Mallesh",
      position: "General Secretary",
      role: "executive"
    },
    {
      name: "Daragoni Hanumanthu",
      position: "Joint Secretary",
      role: "executive"
    },
    {
      name: "Kompelli Divya",
      position: "Treasurer",
      role: "executive"
    },
    {
      name: "Satitha Satyagama",
      position: "Executive Member",
      role: "member"
    },
    {
      name: "Divya Bharathi Chenigala",
      position: "Executive Member",
      role: "member"
    },
    {
      name: "Saidulu Bandela",
      position: "Member",
      role: "member"
    }
  ];

  return (
        <div id="team" className="min-h-screen pb-4 scroll-mt-28">
    <section id="team" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dedicated individuals committed to making a difference in society. Our team works tirelessly to serve the community with compassion and integrity.
          </p>
        </div>

        {/* Primary Leadership */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {teamMembers.filter(m => m.role === "primary").map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all border-border bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/70 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <User className="h-12 w-12 text-white" />
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

        {/* Executive Committee */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Executive Committee</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.filter(m => m.role === "executive").map((member, index) => (
              <Card key={index} className="group hover:shadow-card transition-all border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-1">{member.name}</h4>
                  <p className="text-secondary text-sm">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Members */}
        <div>
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Team Members</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.filter(m => m.role === "member").map((member, index) => (
              <Card key={index} className="group hover:shadow-card transition-all border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/10 transition-colors">
                    <User className="h-7 w-7 text-muted-foreground group-hover:text-secondary transition-colors" />
                  </div>
                  <h4 className="font-semibold text-navy mb-1">{member.name}</h4>
                  <p className="text-secondary text-sm">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteer CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-card rounded-xl p-8 border border-border shadow-card max-w-2xl">
            <h3 className="text-2xl font-bold text-navy mb-3">Join Our Team</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals who want to make a difference. 
              Become a volunteer and help us serve the community.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Volunteer With Us
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Team;
