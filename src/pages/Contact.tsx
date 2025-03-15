
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageSquare, HelpCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We have received your message and will get back to you soon.",
      duration: 3000,
    });
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 bg-health-blue">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help you.
          </p>
        </div>
      </div>
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="Enter your phone number" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Enter subject" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Enter your message" 
                      rows={5} 
                      required 
                    />
                  </div>
                  <Button type="submit" className="bg-health-blue hover:bg-health-blue/90 w-full">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-health-blue/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-health-blue" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Our Location</h4>
                      <p className="text-gray-600 mt-1">Pokhara-31, Rashi, Gandaki, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-health-green/10 rounded-full flex items-center justify-center">
                        <Phone className="h-5 w-5 text-health-green" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Call Us</h4>
                      <p className="text-gray-600 mt-1">+977-9856038440</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Email Us</h4>
                      <p className="text-gray-600 mt-1">healthcarenepal15@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                        <Clock className="h-5 w-5 text-amber-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Working Hours</h4>
                      <p className="text-gray-600 mt-1">
                        Office Hours: 9:00 AM - 5:00 PM (Sun-Fri)<br />
                        Emergency Services: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Quick Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="h-5 w-5 text-red-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">Live Chat</h4>
                      <p className="text-gray-600 mt-1">
                        Chat with our customer support team for immediate assistance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <HelpCircle className="h-5 w-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-base font-medium">FAQ</h4>
                      <p className="text-gray-600 mt-1">
                        Find answers to frequently asked questions about our services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-health-blue/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-health-blue mb-3">Emergency Contact</h3>
                <p className="text-gray-700 mb-4">
                  For medical emergencies, please call our 24/7 emergency hotline.
                </p>
                <Button className="w-full bg-health-green hover:bg-health-green/90">
                  <Phone className="mr-2 h-5 w-5" /> Emergency Hotline
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Find Us On Map</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112488.95296779532!2d83.87913757279977!3d28.22972978181248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1688374323175!5m2!1sen!2snp" 
                className="w-full h-full border-0" 
                loading="lazy"
                allowFullScreen
                title="Health Care Nepal Location"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
