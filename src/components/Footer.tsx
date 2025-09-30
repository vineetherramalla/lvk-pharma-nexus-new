import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/lvk-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" }, // ✅ Fixed path
    { name: "Manufacturing", path: "/manufacturing" },
    { name: "Quality", path: "/quality" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="LVK Pharma Logo" className="h-10 w-auto" />
              <div>
                <h3 className="font-bold text-lg text-primary-foreground">LVK Pharma</h3>
                <p className="text-xs text-primary-foreground/70">Pvt. Ltd.</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Specializing in high-quality chemical compounds and pharmaceutical intermediates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-foreground" />
                <span>Sy.no: 501&506, Devalamma Nagaram, Choutuppal, Yadadri-Bhongir, Telangana - 508252</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground" />
                <span>+91 799 354 2906</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-foreground" />
                <span>info@lvkpharma.com</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Certifications</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>• GLP Certified Quality Control Lab</li>
              <li>• International Standards Compliant</li>
              <li>• ISO Certified</li>
              <li>• GMP Certified</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} LVK Pharma Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
