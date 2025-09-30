import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, CheckCircle, FileCheck, Microscope, ShieldCheck, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Quality = () => {
  const certifications = [
    { name: "GLP Certified", icon: Award, color: "text-primary" },
    { name: "ISO Certified", icon: ShieldCheck, color: "text-secondary" },
    { name: "GMP Certified", icon: FileCheck, color: "text-accent" },
  ];

  const qualityFocus = [
    {
      title: "Quality Assurance",
      icon: Microscope,
      description: "We follow all Quality Control Systems strictly. Our GLP certified Quality Control Lab operates in total compliance with International standards.",
    },
    {
      title: "Prompt Delivery",
      icon: Target,
      description: "Company policy is to accept orders only to 80% of capacity and maintain sufficient stock of finished goods to meet delivery schedules on time. This ensures assured delivery, and our customers need not hold extra inventory.",
    },
    {
      title: "Competitive Pricing",
      icon: CheckCircle,
      description: "We implement good management practices and are financially liquid to our needs. Our purchases are at the lowest cost, hence our cost of production is low, enabling us to offer competitive prices.",
    },
    {
      title: "Customer Delight",
      icon: Award,
      description: "Our primary goal is to provide WOW Factor to our customers by assuring prompt delivery, quality as per specification, and competitive pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">International Standards Compliant</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Quality & Compliance
            </h1>
            <p className="text-lg text-muted-foreground">
              Uncompromising quality standards with certified processes and rigorous testing protocols
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Certifications
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="border-border text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className={`w-16 h-16 mx-auto mb-4 bg-${cert.color}/10 rounded-full flex items-center justify-center`}>
                      <cert.icon className={`h-8 w-8 ${cert.color}`} />
                    </div>
                    <CardTitle className="text-xl">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">Active</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Lab */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Microscope className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Quality Control Laboratory</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our state-of-the-art Quality Control laboratory is equipped with advanced analytical instruments including Gas Chromatography machines for precise testing of MCA and raw materials.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Testing Capabilities</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Gas Chromatography Analysis
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Raw Material Testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        In-Process Quality Checks
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        Final Product Analysis
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">Quality Team</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        15+ Years QC/QA Experience
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        GLP Certified Personnel
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        24/7 Quality Monitoring
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        Trained Technical Staff
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Quality Promise
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {qualityFocus.map((item, idx) => (
                <Card key={idx} className="border-border hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credit Terms */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">Credit Facilities</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Customers who meet the required minimum monthly purchase volume will be eligible for sensible credit limits to accommodate their operational funding requirements. Following a few months of favorable business engagement, we will offer tailored credit solutions to better suit their financial needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quality;
