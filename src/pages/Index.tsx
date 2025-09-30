import { Link } from "react-router-dom";
import { Award, Factory, Microscope, ShieldCheck, Users, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Factory,
      title: "State-of-the-Art Manufacturing",
      description: "4-acre facility with 44+ specialized equipment units and 900T/month capacity",
    },
    {
      icon: Microscope,
      title: "GLP Certified Quality Control",
      description: "International standard testing and quality assurance at every stage",
    },
    {
      icon: ShieldCheck,
      title: "ISO & GMP Certified",
      description: "Full compliance with pharmaceutical industry standards and regulations",
    },
    {
      icon: Zap,
      title: "Advanced Automation",
      description: "Automated crystallization, modern scrubbing systems, and process control",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "25+ years experienced plant head with skilled technical personnel",
    },
    {
      icon: Award,
      title: "Trusted by Industry Leaders",
      description: "Serving Dr. Reddy's, Divi's Labs, Solara, and other major pharma companies",
    },
  ];

  const clients = [
    "Dr. Reddy's Laboratories",
    "Divi's Laboratories",
    "Solara Active Pharma Sciences",
    "Pharmazell Pvt. Ltd.",
    "Bhavani Cellulose Products",
    "Hiranya Cellulose Products",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose LVK Pharma?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering manufacturing excellence with cutting-edge technology and unwavering commitment to quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-border hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Key Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quality Assurance", desc: "GLP certified lab with international compliance" },
              { title: "Prompt Delivery", desc: "On-time delivery with maintained stock levels" },
              { title: "Competitive Pricing", desc: "Cost-effective solutions through efficient practices" },
              { title: "Customer Delight", desc: "WOW factor through consistent excellence" },
            ].map((item, idx) => (
              <Card key={idx} className="text-center border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              Serving major pharmaceutical and chemical manufacturing companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-foreground">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground rounded-2xl p-12 text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Experience manufacturing excellence, quality assurance, and prompt delivery for your pharmaceutical needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/manufacturing">View Our Facilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
