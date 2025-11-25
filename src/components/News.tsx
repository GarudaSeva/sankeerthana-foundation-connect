import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Newspaper } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      title: "Blanket Distribution Drive - Winter Relief 2023",
      date: "December 2023",
      image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_1.jpg",
      excerpt: "Sankeerthana Foundation successfully distributed warm blankets to over 200 senior citizens across old age homes in Achampet, Kalvakurthy, Mysigandi, Chandravanka Vagu, and Hyderabad during the winter season.",
      category: "Community Service"
    },
    {
      title: "COVID-19 Relief: Food Distribution Program",
      date: "2020-2021",
      image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p1_3.jpg",
      excerpt: "During the challenging COVID-19 pandemic, our foundation stepped up to provide regular food distribution at hospitals, orphanages, and on the streets, ensuring no one went hungry during the lockdown.",
      category: "Healthcare Support"
    },
    {
      title: "Educational Support: School Bags & Exam Kits for Girls",
      date: "Academic Year 2023",
      image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p2_2.jpg",
      excerpt: "We distributed school bags, exam pads, and complete educational kits to orphanage girl students, supporting their academic journey and ensuring they have the necessary supplies for their studies.",
      category: "Education"
    },
    {
      title: "Empowering Underprivileged Students",
      date: "September 2023",
      image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p3_1.jpg",
      excerpt: "Our comprehensive educational support program reached multiple schools, providing essential supplies and motivation to hundreds of children from underprivileged backgrounds.",
      category: "Child Welfare"
    },
    {
      title: "Senior Citizens Health Camp",
      date: "August 2023",
      image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_2.jpg",
      excerpt: "Organized a comprehensive health checkup camp for senior citizens, providing free medical consultations, basic tests, and medication support to over 150 elderly individuals.",
      category: "Healthcare"
    },
    {
      title: "Community Outreach: Feeding the Homeless",
      date: "Ongoing Program",
      image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p1_6.jpg",
      excerpt: "Our volunteers continue their dedication to serving hot meals to homeless individuals on the streets, ensuring that basic nutrition reaches those who need it most.",
      category: "Food Security"
    }
  ];

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold inline-block mb-4">
            Latest Updates
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            News & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest programs, initiatives, and the positive impact we're making in communities across Telangana.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all border-border overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
                <button className="text-secondary hover:text-secondary/80 font-semibold flex items-center gap-2 transition-colors">
                  <Newspaper className="h-4 w-4" />
                  Read More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Press Coverage Section */}
        <div className="mt-16 bg-cream rounded-2xl p-8 md:p-12 text-center border border-border">
          <Newspaper className="h-12 w-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-navy mb-4">Media Coverage</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Our work has been featured in various local newspapers and media outlets. We're proud to share our story and inspire others to join our mission of social service.
          </p>
          <div className="inline-flex gap-2 items-center text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
            Articles and press releases available upon request
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
