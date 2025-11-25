import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Newspaper } from "lucide-react";
import image1 from "@/assets/news/calender.jpeg";
import image2 from "@/assets/news/diwyanga.jpeg";
import image3 from "@/assets/news/andula support.jpeg";

const News = () => {
  const newsArticles = [
    // {
    //   title: "Blanket Distribution Drive - Winter Relief 2023",
    //   date: "December 2023",
    //   image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p0_1.jpg",
    //   excerpt: "Sankeerthana Foundation successfully distributed warm blankets to over 200 senior citizens across old age homes in Achampet, Kalvakurthy, Mysigandi, Chandravanka Vagu, and Hyderabad during the winter season.",
    //   category: "Community Service"
    // },
    // {
    //   title: "COVID-19 Relief: Food Distribution Program",
    //   date: "2020-2021",
    //   image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p1_3.jpg",
    //   excerpt: "During the challenging COVID-19 pandemic, our foundation stepped up to provide regular food distribution at hospitals, orphanages, and on the streets, ensuring no one went hungry during the lockdown.",
    //   category: "Healthcare Support"
    // },
    // {
    //   title: "Educational Support: School Bags & Exam Kits for Girls",
    //   date: "Academic Year 2023",
    //   image: "parsed-documents://20251125-101033-009959/NGO_3.pdf/images/img_p2_2.jpg",
    //   excerpt: "We distributed school bags, exam pads, and complete educational kits to orphanage girl students, supporting their academic journey and ensuring they have the necessary supplies for their studies.",
    //   category: "Education"
    // },
    {
  title: "Calendar Launch Event",
  date: "September 2023",
  image: image1,
  excerpt: "Foundation proudly launched the 2025 Calendar in the presence of LB Nagar MLA Devi Reddy Sudheer Reddy, marking a meaningful step toward community outreach and cultural celebration.",
  category: "Event Launch"
},
   {
  title: "Government Support for Differently-Abled Individuals",
  date: "August 2023",
  image: image2,
  excerpt: "Under the guidance of Chairman Muttineni Verayya, the foundation participated in a government-led discussion focused on strengthening support for differently-abled individuals.",
  category: "Government Support"
},
{
  title: "Government Support for Handicapped Students",
  date: "Ongoing Program",
  image: image3,
  excerpt: "At the Malakpet Government Handicapped School, Corporator Kottakapu Arunakumari inaugurated the event by lighting the lamp and honoring Braille learning materials with garlands.",
  category: "Government Support"
},
  ];

  return (

<section id="news" className="py-8 mb-8 bg-background scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
            News & Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with our latest programs, initiatives, and the positive impact we're making.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all border-border overflow-hidden">
              <div className="relative h-72 md:h-80 lg:h-80 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* <div className="absolute top-4 right-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div> */}
              </div>
              
              <CardContent className="p-6">
                {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{article.date}</span>
                </div> */}
                
                <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    
  );
};

export default News;
