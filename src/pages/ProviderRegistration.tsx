
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

const ProviderRegistration = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    toast({
      title: "Registration submitted",
      description: "Thank you for registering! We'll review your application and contact you soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-16 bg-health-blue">
        <div className="container mx-auto px-4 py-16 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Provider Network</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Register to offer your healthcare services through our platform
          </p>
        </div>
      </div>

      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Personal Information</h2>
                <p className="text-gray-600">Tell us about yourself</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Professional Information</h2>
                <p className="text-gray-600">Tell us about your professional background</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession">Profession *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your profession" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="doctor">Doctor</SelectItem>
                    <SelectItem value="nurse">Nurse</SelectItem>
                    <SelectItem value="caregiver">Caregiver</SelectItem>
                    <SelectItem value="physiotherapist">Physiotherapist</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="qualification">Qualifications *</Label>
                <Input id="qualification" placeholder="Your highest qualification" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience *</Label>
                <Input id="experience" type="number" placeholder="Enter years" required min="0" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="about">About Yourself *</Label>
                <Textarea id="about" placeholder="Tell us about your experience and expertise" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="services">Services You Can Provide *</Label>
                <Textarea id="services" placeholder="List the services you can offer" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Service Area/Location *</Label>
                <Input id="location" placeholder="Areas where you can provide service" required />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the terms and conditions
                  </label>
                  <p className="text-sm text-gray-500">
                    By submitting this form, you agree to our terms of service and privacy policy.
                  </p>
                </div>
              </div>

              <Button type="submit" className="w-full">Submit Application</Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProviderRegistration;
