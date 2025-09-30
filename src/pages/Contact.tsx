import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about our products or services? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Sy.no: 501&506, Devalamma Nagaram (Village),<br />
                    Koyyalagudem(GP), Choutuppal(Mandal),<br />
                    Yadadri-Bhongir (District),<br />
                    Telangana, INDIA-508252
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">+91 799 354 2906</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Mon - Sat, 9:00 AM - 6:00 PM IST
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">info@lvkpharma.com</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Response within 24 hours
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <Card className="border-border overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108031.56097224398!2d78.82428855625501!3d17.284946173681067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb11c81b6e36d9%3A0xc0c8b24fa1b4e035!2sLvk%20pharma%20Pvt%20Ltd%20company!5e0!3m2!1sen!2sin!4v1759215695015!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LVK Pharma Location"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-center">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="font-semibold text-foreground mb-2">Office & Plant Operations</p>
                    <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Weekend & Holidays</p>
                    <p className="text-sm text-muted-foreground">Sunday - Closed</p>
                    <p className="text-sm text-muted-foreground">National Holidays - Closed</p>
                  </div>
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

export default Contact;
