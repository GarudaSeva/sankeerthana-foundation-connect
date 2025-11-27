import { Heart, CreditCard, Building2, Smartphone, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import qrCode from "@/assets/instagram-qr.png";

const Donate = () => {
  const donationMethods = [
    {
      icon: Smartphone,
      title: "Scan & Pay",
      description: "Use any UPI app to scan the QR code and donate instantly",
      color: "text-trust"
    },
    {
      icon: CreditCard,
      title: "Online Transfer",
      description: "Direct bank transfer to our foundation account",
      color: "text-hope"
    },
    {
      icon: Building2,
      title: "Cheque/DD",
      description: "Send a cheque or demand draft to our office address",
      color: "text-accent"
    }
  ];


  return (
    <div className="min-h-screen pt-12 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-5xl font-bold text-primary animate-fade-in">Support Our Cause</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your contribution helps us support children, senior citizen communities 
          </p>
        </div>

        {/* Main Donation Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-4">
          {/* QR Code Section */}
          <Card className="shadow-2xl border-2 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-2">Scan & Pay</CardTitle>
              <p className="text-muted-foreground">Use PhonePe, Google Pay, Paytm or any UPI app</p>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="bg-navy p-6 rounded-xl mb-6">
                <img 
                  src={qrCode} 
                  alt="Donation QR Code" 
                  className="w-64 h-64 object-contain"
                />
              </div>
              <Badge className="text-lg px-4 py-2 bg-navy text-accent-foreground">
                Instant & Secure Payment
              </Badge>
              <p className="text-center text-sm text-muted-foreground mt-4">
                100% of your donation goes directly to our programs
              </p>
            </CardContent>
          </Card>

          {/* Other Donation Methods */}
          <div className="space-y-6">
            {donationMethods.map((method, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <method.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary mb-2">{method.title}</h3>
                      <p className="text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Bank Details */}
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Bank Account Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><strong>Account Name:</strong> Sankeerthana Foundations</p>
                  <p><strong>Account Number:</strong> 101410021006374</p>
                  <p><strong>Bank:</strong> HDFC Bank LTD</p>
                  <p><strong>IFSC Code:</strong> HDFC0CTGCUB</p>
                  <p><strong>Branch:</strong> The Gayatri CO-Op Urban Bank LTD</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
