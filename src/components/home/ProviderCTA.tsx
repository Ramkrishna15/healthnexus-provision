
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

const ProviderCTA = () => {
  return (
    <section className="py-16 health-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Network of Healthcare Providers</h2>
          <p className="text-xl opacity-90 mb-8">
            Are you a healthcare professional looking to expand your practice? 
            Join our platform to connect with patients in need of your services.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
            <Link to="/provider-registration">
              <Button size="lg" className="bg-white text-health-blue hover:bg-gray-100">
                <UserPlus className="mr-2 h-5 w-5" /> Register as Provider
              </Button>
            </Link>
            <Link to="/provider-info">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProviderCTA;
