
import { CheckCircle2, Search, Calendar, UserCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Search Services',
    description: 'Enter your location to find healthcare services available near you.',
    icon: Search,
    color: 'bg-health-blue',
  },
  {
    id: 2,
    title: 'Book Appointment',
    description: 'Choose the service you need and book an appointment at your preferred time.',
    icon: Calendar,
    color: 'bg-health-green',
  },
  {
    id: 3,
    title: 'Get Care At Home',
    description: 'Our verified healthcare provider will arrive at your location to provide the service.',
    icon: UserCheck,
    color: 'bg-purple-600',
  },
  {
    id: 4,
    title: 'Quality Assured',
    description: 'Rate and review the service to help us maintain high-quality care standards.',
    icon: CheckCircle2,
    color: 'bg-amber-500',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Getting healthcare services at your doorstep is simple and convenient with Health Care Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="relative mb-8">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto text-white`}>
                  <step.icon className="h-8 w-8" />
                </div>
                {step.id < steps.length && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gray-300"></div>
                )}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center border border-gray-200">
                  <span className="text-sm font-bold">{step.id}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
