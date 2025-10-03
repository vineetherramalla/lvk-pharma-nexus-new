import Slider, { Settings } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Highlight {
  title: string;
  description: string;
  image: string;
}

const highlights: Highlight[] = [
  { title: "Advanced Condensers", description: "Replaced lead condensers with modern graphite condensers for better efficiency", image: "/condenser.jpg" },
  { title: "Automated Crystallization", description: "State-of-the-art crystallizers for consistent product quality", image: "/crystallization.jpg" },
  { title: "Modern Centrifuges", description: "Bag lifting centrifuges for improved safety and efficiency", image: "/centrifuges.jpg" },
  { title: "Enhanced Scrubbing", description: "Modernized scrubbing system for better yield and pollution control", image: "/scrubber.jpg" },
  { title: "Complete Insulation", description: "All equipment insulated for optimal temperature control", image: "/insulation.jpg" },
  { title: "Quality Monitoring", description: "Real-time quality monitoring systems at all production stages", image: "/qc.jpg" },
];

// Custom Arrows outside the carousel
const NextArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-2rem] z-10 cursor-pointer p-2 bg-background/80 rounded-full shadow hover:bg-background transition"
    onClick={onClick}
    style={{ transform: "translateY(-50%)" }}
  >
    <ChevronRight className="w-6 h-6 text-foreground" />
  </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-2rem] z-10 cursor-pointer p-2 bg-background/80 rounded-full shadow hover:bg-background transition"
    onClick={onClick}
    style={{ transform: "translateY(-50%)" }}
  >
    <ChevronLeft className="w-6 h-6 text-foreground" />
  </div>
);

const ModernizationCarousel: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,              // slide transition speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,      // delay between slides (pause slightly)
    cssEase: "ease-in-out",   // smooth easing
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      <div className="max-w-[90%] mx-auto relative">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          Plant Modernization Highlights
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {highlights.map((item, idx) => (
              <div key={idx} className="px-3">
                <div className="bg-background border border-border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-full h-56 md:h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ModernizationCarousel;
