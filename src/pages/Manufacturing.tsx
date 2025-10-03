import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MachineryCard from "@/components/MachineryCard";
import { Button } from "@/components/ui/button";
import machineryData from "@/data/machinery.json";
import ModernizationCarousel from "@/components/ModernizationCarousel";

const Manufacturing = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(machineryData.map((m) => m.category)))];
  
  const filteredMachinery = selectedCategory === "All" 
    ? machineryData 
    : machineryData.filter((m) => m.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section
  className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: `url('/manufacturingbg.jpg')`,
  }}
>
  {/* Optional: Add dark overlay for contrast */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Manufacturing Excellence
      </h1>
      <p className="text-lg text-gray-200 mb-8">
        State-of-the-art equipment and advanced technology for pharmaceutical chemical production
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <p className="text-3xl font-bold text-white">44+</p>
          <p className="text-sm text-gray-300">Equipment Units</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <p className="text-3xl font-bold text-white">4 Acres</p>
          <p className="text-sm text-gray-300">Facility Size</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <p className="text-3xl font-bold text-white">900T</p>
          <p className="text-sm text-gray-300">Max Capacity/month</p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
          <p className="text-3xl font-bold text-white">2022</p>
          <p className="text-sm text-gray-300">Established</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Machinery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Plant & Machinery</h2>
            <p className="text-muted-foreground mb-6">
              Browse our comprehensive collection of manufacturing equipment by category
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Machinery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMachinery.map((machine) => (
              <MachineryCard
                key={machine.id}
                name={machine.name}
                capacity={machine.capacity}
                quantity={machine.quantity}
                category={machine.category}
              />
            ))}
          </div>

          {filteredMachinery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No machinery found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modernization Highlights */}
      <section className="py-16 bg-muted/30">
        
        <ModernizationCarousel />

      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;
