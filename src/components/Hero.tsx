import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/home-bg.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" /> {/* Optional: dark overlay for contrast */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 py-20 text-white">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary-foreground">
              Established 2022 • 4 Acres Manufacturing Unit
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Manufacturing Excellence in{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Pharmaceutical Chemicals
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Producing high-quality Active Pharmaceutical Ingredients and chemical intermediates with state-of-the-art technology and uncompromising quality standards.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/manufacturing">
                Explore Our Facility
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { label: "Years of Expertise", value: "40+" },
              { label: "Production Capacity", value: "900T/mo" },
              { label: "Land Area", value: "4 Acres" },
              { label: "Equipment Units", value: "44+" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
