
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions or need assistance? Reach out to our team and we'll be happy to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-health-blue/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-health-blue" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Our Location</h4>
                    <p className="text-gray-600 mt-1">Pokhara-31, Rashi, Gandaki, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-health-green/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-health-green" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Call Us</h4>
                    <p className="text-gray-600 mt-1">+977-9856038440</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Email Us</h4>
                    <p className="text-gray-600 mt-1">healthcarenepal15@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-amber-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Working Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Office Hours: 9:00 AM - 5:00 PM (Sun-Fri)<br />
                      Emergency Services: 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="aspect-w-16 aspect-h-9">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112488.95296779532!2d83.87913757279977!3d28.22972978181248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995937bbf0376ff%3A0xf6cf823b25802164!2sPokhara!5e0!3m2!1sen!2snp!4v1688374323175!5m2!1sen!2snp" 
                    className="w-full h-64 rounded-lg border-0" 
                    loading="lazy"
                    allowFullScreen
                    title="Health Care Nepal Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
