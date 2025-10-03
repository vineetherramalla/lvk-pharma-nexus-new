import Slider, { Settings } from "react-slick";

const FacilitySlider: React.FC = () => {
  const images: string[] = [
    "/Dr-Reddys-Laboratories.jpg",
    "/Divis.jpg",
    "/solara.jpg",
    "/excelex.jpg",
    "/skylose.jpg",
  ];

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div key={idx} className="px-2">
              <div className="w-full rounded-lg shadow-md overflow-hidden">
                <img
                  src={img}
                  alt={`Facility ${idx + 1}`}
                  className="w-full h-auto max-h-60 sm:max-h-72 md:max-h-60 lg:max-h-52 object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FacilitySlider;
