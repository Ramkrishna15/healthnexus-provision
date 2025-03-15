
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Heart, Clock, Search, Shield, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 bg-health-blue">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Health Care Nepal</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Your trusted partner for quality healthcare services at your doorstep.
          </p>
        </div>
      </div>
      
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                <p className="text-gray-600 mb-6">
                  At Health Care Nepal, our mission is to transform healthcare delivery by making quality medical services 
                  accessible to everyone in the comfort of their homes. We bridge the gap between patients and healthcare 
                  professionals, ensuring that distance and mobility are never barriers to receiving excellent care.
                </p>
                <p className="text-gray-600 mb-6">
                  Our vision is to create a healthcare ecosystem where every Nepali citizen has immediate access to 
                  quality healthcare services regardless of their location. We aim to revolutionize the traditional 
                  healthcare model by leveraging technology and a network of dedicated professionals to deliver 
                  personalized care right at your doorstep.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-health-green mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">
                      <span className="font-semibold">Quality Care:</span> We are committed to maintaining the highest standards of 
                      healthcare through our rigorous provider verification and continuous quality monitoring.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-health-green mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">
                      <span className="font-semibold">Accessibility:</span> We make healthcare services available to everyone, 
                      especially those with limited mobility or in remote areas.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-health-green mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">
                      <span className="font-semibold">Compassion:</span> We believe in treating each patient with dignity, 
                      respect, and empathy, ensuring their comfort and well-being.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                  alt="Healthcare professionals" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The principles that guide our operations and shape our commitment to excellence in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-health-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-health-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Patient-Centered Care</h3>
                <p className="text-gray-600">
                  We put patients at the center of everything we do, tailoring our services to meet their unique needs and preferences.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-health-green/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-health-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  We are committed to being there when you need us, providing timely and dependable healthcare services.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We uphold the highest ethical standards in all our interactions, building trust with transparent practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously seek new ways to improve healthcare delivery, embracing technology and best practices.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our service, from provider selection to patient care.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  We are dedicated to improving healthcare accessibility and outcomes in the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                How Health Care Nepal was founded and evolved to become a leading healthcare service provider.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4">
                  Health Care Nepal was founded in 2018 with a simple yet powerful vision: to make quality healthcare accessible 
                  to every Nepali citizen, regardless of their location or mobility constraints. Our founder, Dr. Rajesh Sharma, 
                  witnessed firsthand the challenges faced by patients in remote areas and those with limited mobility in accessing 
                  timely medical care.
                </p>
                <p className="text-gray-600 mb-4">
                  What began as a small initiative with a handful of dedicated healthcare professionals has now grown into a 
                  comprehensive network of doctors, nurses, caregivers, and support staff serving thousands of patients across Nepal.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we have expanded our services from basic home nursing to a full spectrum of healthcare solutions 
                  including specialized care for the elderly and children, doctor home visits, and emergency medical services.
                </p>
                <p className="text-gray-600">
                  Today, Health Care Nepal stands as a testament to our commitment to revolutionizing healthcare delivery in Nepal. 
                  We continue to grow and evolve, incorporating technological innovations and best practices to enhance our services 
                  while staying true to our core mission of patient-centered care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 health-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Join Our Healthcare Network</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Are you a healthcare professional looking to make a difference? Join our network and help us 
              provide quality care to those who need it most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/provider-registration">
                <Button size="lg" className="bg-white text-health-blue hover:bg-gray-100">
                  Register as Provider
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
