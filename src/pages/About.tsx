import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Globe, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About LVK Pharma
            </h1>
            <p className="text-lg text-muted-foreground">
              Specializing in the production of high-quality chemical compounds with state-of-the-art manufacturing excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Company Overview</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We are delighted to extend our warm greetings as we proudly introduce ourselves, <strong className="text-foreground">M/S LVK Pharma Pvt. Ltd.</strong> Specializing in the production of high-quality chemical compounds, our state-of-the-art manufacturing unit is strategically located in Choutuppal.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold text-foreground mb-2">Factory Address:</p>
                  <p className="text-sm">
                    Sy.no: 501&506, Devalamma Nagaram (Village), Koyyalagudem(GP), Choutuppal(Mandal), Yadadri-Bhongir (District), Telangana, INDIA-508252
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <p className="text-2xl font-bold text-primary">2022</p>
                    <p className="text-sm">Established</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-lg">
                    <p className="text-2xl font-bold text-secondary">4 Acres</p>
                    <p className="text-sm">Total Land Area</p>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <p className="text-2xl font-bold text-accent">2023</p>
                    <p className="text-sm">Plant Registered</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promoters */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Leadership</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle>Dr. Ln. L. Vijay Kumar Setty</CardTitle>
                  <p className="text-sm text-muted-foreground">Chairman & Founder</p>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    An esteemed industrialist with an impressive tenure of <strong className="text-foreground">40 years</strong>. Under his guidance, our business footprint has extended across international borders, spanning the USA, Canada, Africa, and the Gulf Countries, with a diversified presence in various industrial sectors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle>L. Phalguna Kumar</CardTitle>
                  <p className="text-sm text-muted-foreground">Managing Director</p>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  <p>
                    Leverages his substantial education, including a Master's degree earned in the USA, to lead the company with a vision honed over <strong className="text-foreground">20 years</strong> of successful industrial entrepreneurship. His expertise has been instrumental in expanding our business endeavors in Africa and the Gulf countries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Modernization */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Plant Modernization</h2>
            </div>

            <Card className="border-border">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-6">
                  We have taken up an ambitious program of modernizing the plant to ensure consistent quality and production:
                </p>
                <ul className="space-y-3">
                  {[
                    "Replaced lead condensers with graphite condensers",
                    "Automated the crystallization process by installing crystallizers",
                    "Introduced bag lifting centrifuges in place of normal centrifuges",
                    "Modernized scrubbing system to get better yield and avoid pollution",
                    "Insulated equipment including reactors, crystallizers, condensers, and pipelines",
                    "Introduced quality monitoring systems at all stages",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-foreground font-medium">
                  Due to these modernizations, we ensure consistent Quality and Production as per schedule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capacity & Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    <CardTitle>Production Capacity</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Current Capacity</p>
                    <p className="text-2xl font-bold text-primary">200 Tons/Month</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Maximum Capacity</p>
                    <p className="text-2xl font-bold text-secondary">900 Tons/Month</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Progressive expansion depending on customer needs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>Expert Team</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Plant Head:</strong> 25+ years of experience in chemical & bulk drug industries
                  </p>
                  <p>
                    <strong className="text-foreground">QC/QA Team:</strong> 15+ years of experience in quality control and assurance
                  </p>
                  <p>
                    Well-trained technical and non-technical staff for manufacturing and quality operations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
