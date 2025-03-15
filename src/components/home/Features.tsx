
import { 
  MapPin, 
  Clock, 
  Banknote, 
  Shield, 
  Users, 
  Phone
} from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Health Care Nepal</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are committed to providing the best healthcare services at your convenience,
            connecting you with qualified professionals you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-health-blue/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-health-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nearby Services</h3>
            <p className="text-gray-600">
              Our platform connects you with healthcare providers in your area,
              reducing wait times and ensuring quick service delivery.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-health-green/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-health-green" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
            <p className="text-gray-600">
              Access healthcare services anytime with our round-the-clock service,
              including emergency medical assistance when you need it most.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
            <p className="text-gray-600">
              All our healthcare providers undergo thorough background checks and
              verification to ensure you receive care from qualified professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Banknote className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
            <p className="text-gray-600">
              Know exactly what you're paying for with our clear pricing model,
              with no hidden fees or unexpected charges.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
            <p className="text-gray-600">
              Our services are tailored to meet individual needs, ensuring
              that you receive the specific care required for your situation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
            <p className="text-gray-600">
              Stay connected with your healthcare provider through our
              platform for updates, queries, and follow-up care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
