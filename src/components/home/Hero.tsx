
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Hero = () => {
  const { toast } = useToast();
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      toast({
        title: "Search initiated",
        description: `Finding healthcare providers in ${location}...`,
        duration: 3000,
      });
      // In a real app, we would redirect to search results
    } else {
      toast({
        title: "Location required",
        description: "Please enter your location to find nearby providers",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-health-blue to-health-green pt-24 pb-16 md:py-32">
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Healthcare Services <br />at Your Doorstep
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Connect with qualified healthcare providers near you for home care, 
            old age care, and child care services.
          </p>
          
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter your location"
                className="pl-10 bg-white/90 border-0 h-12 text-black"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-white text-health-blue hover:bg-gray-100 h-12">
              <Search className="mr-2 h-5 w-5" /> Find Services
            </Button>
          </form>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-health-blue hover:bg-gray-100">
              Book a Service
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Emergency Call
            </Button>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
