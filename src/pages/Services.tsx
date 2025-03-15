
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Baby, User, Stethoscope, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "home-care",
    title: "Home Health Care",
    icon: Heart,
    description: "Our home healthcare services provide comprehensive medical care right in the comfort of your home. Whether you're recovering from surgery, managing a chronic condition, or need routine medical assistance, our qualified professionals will deliver personalized care tailored to your needs.",
    features: [
      "Post-surgical care and recovery assistance",
      "IV therapy and medication management",
      "Wound care and dressing changes",
      "Vital signs monitoring and health assessments",
      "Physical therapy and rehabilitation exercises",
      "Chronic disease management (diabetes, hypertension, etc.)"
    ],
    color: "bg-health-blue/10 text-health-blue",
    buttonColor: "bg-health-blue hover:bg-health-blue/90"
  },
  {
    id: "old-age-care",
    title: "Old Age Care",
    icon: Users,
    description: "Our specialized elderly care services address the unique needs of senior citizens. We provide compassionate and respectful care to ensure your loved ones maintain their dignity and quality of life as they age, whether they need medical attention, assistance with daily activities, or companionship.",
    features: [
      "Personal hygiene assistance and grooming",
      "Medication administration and management",
      "Mobility assistance and fall prevention",
      "Nutritional support and meal preparation",
      "Companionship and emotional support",
      "Regular health check-ups and monitoring"
    ],
    color: "bg-health-green/10 text-health-green",
    buttonColor: "bg-health-green hover:bg-health-green/90"
  },
  {
    id: "child-care",
    title: "Child Care",
    icon: Baby,
    description: "Our pediatric home care services provide specialized medical care for children in a familiar and comfortable environment. We understand the unique healthcare needs of children and offer tailored services to support their health, development, and recovery with compassion and expertise.",
    features: [
      "Pediatric nursing care for children with medical needs",
      "Post-hospitalization care and recovery support",
      "Medication administration and management",
      "Developmental assessments and interventions",
      "Education for parents on child health management",
      "Care for children with chronic conditions or special needs"
    ],
    color: "bg-purple-100 text-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-600/90"
  },
  {
    id: "nursing",
    title: "Nursing Services",
    icon: User,
    description: "Our professional nursing services bring skilled healthcare directly to your home. Our registered nurses and nursing assistants provide a wide range of medical care, from basic health monitoring to complex clinical procedures, ensuring you receive high-quality care without the need to visit a hospital or clinic.",
    features: [
      "Comprehensive nursing assessments",
      "Administration of medications and injections",
      "Wound care and dressing changes",
      "Catheter and ostomy care",
      "Blood draws and lab sample collection",
      "Patient and family education on health management"
    ],
    color: "bg-red-100 text-red-600",
    buttonColor: "bg-red-600 hover:bg-red-600/90"
  },
  {
    id: "doctor-visits",
    title: "Doctor Visits",
    icon: Stethoscope,
    description: "Our doctor home visit service brings qualified physicians to your doorstep. Whether you need a routine check-up, have an acute illness, or require medical consultation, our doctors provide comprehensive medical care in the comfort and privacy of your home, eliminating the hassle of traveling to clinics.",
    features: [
      "Comprehensive medical examinations",
      "Diagnosis and treatment of acute illnesses",
      "Management of chronic health conditions",
      "Prescription services and medication reviews",
      "Preventive health screenings and assessments",
      "Medical consultations and second opinions"
    ],
    color: "bg-blue-100 text-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-600/90"
  },
  {
    id: "emergency",
    title: "24/7 Emergency",
    icon: Clock,
    description: "Our emergency medical services are available around the clock to provide immediate medical assistance when you need it most. Our rapid response team is equipped to handle various medical emergencies, providing prompt care and, if necessary, facilitating hospital transfers for more critical situations.",
    features: [
      "Immediate response to medical emergencies",
      "Emergency medical assessments and interventions",
      "Stabilization of critical conditions",
      "Emergency medication administration",
      "Coordination with hospitals for transfers when needed",
      "24/7 access to medical professionals through our hotline"
    ],
    color: "bg-yellow-100 text-yellow-600",
    buttonColor: "bg-yellow-600 hover:bg-yellow-600/90"
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("home-care");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 bg-health-blue">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Healthcare Services</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered at your doorstep by qualified professionals.
          </p>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="home-care" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent h-auto">
              {services.map((service) => (
                <TabsTrigger 
                  key={service.id} 
                  value={service.id}
                  className="data-[state=active]:bg-gray-100 data-[state=active]:text-health-blue data-[state=active]:shadow-sm m-1"
                >
                  <service.icon className="h-5 w-5 mr-2" />
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="focus-visible:outline-none focus-visible:ring-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mr-4`}>
                            <service.icon className="h-6 w-6" />
                          </div>
                          <h2 className="text-2xl font-bold">{service.title}</h2>
                        </div>
                        <p className="text-gray-700 mb-6">{service.description}</p>
                        
                        <h3 className="text-xl font-semibold mb-4">Services Include:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-health-green">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-2 text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-3">
                          <Button className={service.buttonColor}>
                            Book {service.title}
                          </Button>
                          <Button variant="outline">
                            Learn More
                          </Button>
                        </div>
                      </div>

                      <div className="hidden lg:block">
                        <div className="bg-gray-100 p-6 rounded-lg">
                          <h3 className="text-xl font-semibold mb-4">Why Choose Our {service.title}</h3>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-health-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-2 text-gray-600">Qualified and experienced professionals</span>
                            </li>
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-health-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-2 text-gray-600">Personalized care plans</span>
                            </li>
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-health-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-2 text-gray-600">Affordable and transparent pricing</span>
                            </li>
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-health-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-2 text-gray-600">Convenient scheduling</span>
                            </li>
                            <li className="flex items-start">
                              <div className="flex-shrink-0 h-5 w-5 mt-0.5 text-health-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="ml-2 text-gray-600">24/7 customer support</span>
                            </li>
                          </ul>

                          <div className="mt-6 p-4 bg-health-blue/10 rounded-lg border border-health-blue/20">
                            <h4 className="font-semibold text-health-blue mb-2">Need help choosing?</h4>
                            <p className="text-sm text-gray-600 mb-3">
                              Not sure if this service is right for you? Contact our team for a free consultation.
                            </p>
                            <Button variant="outline" size="sm" className="w-full">
                              Contact Us
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
