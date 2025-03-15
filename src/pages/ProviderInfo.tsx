
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Shield, Clock, Users, BadgePercent } from "lucide-react";

const ProviderInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 bg-health-blue">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Join Our Provider Network?</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Become part of a growing community of healthcare professionals making a difference
          </p>
        </div>
      </div>

      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits of Joining</h2>
                <p className="text-gray-600 mb-6">
                  As a healthcare provider in our network, you'll gain access to a wide range of benefits designed to 
                  enhance your practice and help you reach more patients who need your services.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-health-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Expanded Patient Base</h3>
                      <p className="text-gray-600">
                        Connect with patients seeking your specific expertise and services in your area.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-health-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Flexible Schedule</h3>
                      <p className="text-gray-600">
                        You control when and where you work, allowing you to balance your practice with your lifestyle.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-health-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Secure Payments</h3>
                      <p className="text-gray-600">
                        Our platform handles billing and payments, so you can focus on providing care.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-health-green mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">Professional Support</h3>
                      <p className="text-gray-600">
                        Access to our community of healthcare professionals and ongoing customer support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1517120026326-d87759a7b63b?auto=format&fit=crop&q=80&w=2070" 
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
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our simple process makes it easy to join and start providing your services through our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-health-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-health-blue">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Register</h3>
                <p className="text-gray-600">
                  Complete our online registration form with your personal and professional details.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-health-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-health-blue">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Verification</h3>
                <p className="text-gray-600">
                  Our team will verify your credentials and professional background for quality assurance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-health-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-health-blue">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Onboarding</h3>
                <p className="text-gray-600">
                  Complete a brief orientation to familiarize yourself with our platform and processes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-health-blue/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-health-blue">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Start Providing</h3>
                <p className="text-gray-600">
                  Begin accepting service requests from patients in your area and grow your practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Providers Choose Us</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Hear from healthcare professionals who have grown their practice with our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4 italic">
                  "Joining Health Care Nepal has allowed me to help more patients while maintaining a flexible schedule. 
                  The platform is easy to use and their support team is always available when I need them."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Dr. Rohan Sharma</p>
                    <p className="text-sm text-gray-500">General Physician</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4 italic">
                  "As a nurse, I was looking for opportunities to provide home care services. This platform has connected me 
                  with patients who really need my skills, and I'm making a real difference in my community."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Aarati Thapa</p>
                    <p className="text-sm text-gray-500">Registered Nurse</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 mb-4 italic">
                  "The platform handles all the administrative work, so I can focus on patient care. It's been a great way 
                  to supplement my income while providing valuable services to those who need it most."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-semibold">Bikash Kunwar</p>
                    <p className="text-sm text-gray-500">Physiotherapist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 health-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our Network?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Take the first step towards expanding your practice and helping more patients in your community.
            </p>
            <Link to="/provider-registration">
              <Button size="lg" className="bg-white text-health-blue hover:bg-gray-100">
                Register Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderInfo;
