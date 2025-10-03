import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Beaker, Building2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


const Products = () => {
  const mainProduct = {
    name: "Mono Chloro Acetic Acid (MCA)",
    formula: "ClCH₂COOH",
    description: "High-purity Mono Chloro Acetic Acid manufactured using state-of-the-art glass-lined reactors and automated crystallization processes.",
    specifications: [
      { label: "Current Production", value: "200 Tons/Month" },
      { label: "Maximum Capacity", value: "900 Tons/Month" },
      { label: "Purity", value: "≥99%" },
      { label: "Quality Standard", value: "International Standards" },
    ],
  };

  const cmcClients = [
    "Bhavani Cellulose Products",
    "Hiranya Cellulose Products",
    "Sri Kalpa Cellulose Products",
    "Cellulose Solutions Pvt. Ltd.",
    "Excelex Bio-Polymers Pvt. Ltd.",
  ];

  const pharmaClients = [
    { name: "Dr. Reddy's Laboratories", tag: "" },
    { name: "Solara Active Pharma Sciences", tag: "UVQ" },
    { name: "Divi's Laboratories", tag: "UVQ" },
    { name: "Pharmazell Pvt. Ltd.", tag: "UVQ" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
  className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 bg-cover bg-no-repeat relative"
  style={{
    backgroundImage: `url('/product.jpg')`,
  }}
>
  {/* Optional: dark overlay for better readability */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
        <Beaker className="h-4 w-4 text-white" />
        <span className="text-sm font-medium text-white">
          Pharmaceutical Chemicals
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Our Products
      </h1>

      <p className="text-lg text-gray-200">
        High-quality chemical intermediates serving pharmaceutical and industrial sectors
      </p>
    </div>
  </div>
</section>


      {/* Main Product Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-border overflow-hidden">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <Badge className="mb-4">Primary Product</Badge>
                    <h2 className="text-3xl font-bold text-foreground mb-2">{mainProduct.name}</h2>
                    <p className="text-lg text-muted-foreground font-mono">{mainProduct.formula}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">900T</div>
                    <div className="text-sm text-muted-foreground">Max Capacity/mo</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="pt-6 space-y-6">
                <p className="text-muted-foreground">{mainProduct.description}</p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {mainProduct.specifications.map((spec, idx) => (
                    <div key={idx} className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                      <p className="font-semibold text-foreground">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Key Features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Manufactured using automated crystallization for consistent quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Tested using Gas Chromatography for purity verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>GLP certified quality control at every production stage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                      <span>Compliant with international pharmaceutical standards</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Applications & Industries
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-primary" />
                    CMC Manufacturing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Carboxymethyl Cellulose (CMC) manufacturers rely on our high-purity MCA for their production processes.
                  </p>
                  <div className="space-y-2">
                    {cmcClients.map((client, idx) => (
                      <div key={idx} className="text-sm bg-muted/50 p-2 rounded">
                        {client}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    Pharmaceutical Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Leading pharmaceutical companies use our MCA as an intermediate for API production.
                  </p>
                  <div className="space-y-2">
                    {pharmaClients.map((client, idx) => (
                      <div key={idx} className="flex items-center justify-between text-sm bg-muted/50 p-2 rounded">
                        <span>{client.name}</span>
                        {client.tag && (
                          <Badge variant="secondary" className="text-xs">
                            {client.tag}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6 text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Interested in Our Products?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Contact us for detailed specifications, pricing, and delivery schedules. We offer competitive rates and flexible credit terms for qualified customers.
                </p>
                <div className="pt-4">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                      <Link to="/contact">Get In Touch </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
