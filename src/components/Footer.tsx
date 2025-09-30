import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/lvk-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="LVK Pharma Logo" className="h-10 w-auto" />
              <div>
                <h3 className="font-bold text-lg text-foreground">LVK Pharma</h3>
                <p className="text-xs text-muted-foreground">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Specializing in high-quality chemical compounds and pharmaceutical intermediates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About Us", "Manufacturing", "Quality", "Products", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Sy.no: 501&506, Devalamma Nagaram, Choutuppal, Yadadri-Bhongir, Telangana - 508252</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <span>info@lvkpharma.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• GLP Certified Quality Control Lab</li>
              <li>• International Standards Compliant</li>
              <li>• ISO Certified</li>
              <li>• GMP Certified</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LVK Pharma Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
