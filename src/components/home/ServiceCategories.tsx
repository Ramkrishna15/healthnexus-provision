
import { Link } from 'react-router-dom';
import { Heart, Users, Baby, User, Stethoscope, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    id: 1,
    title: 'Home Health Care',
    description: 'Professional medical care services provided at your home for recovery and long-term health management.',
    icon: Heart,
    path: '/services/home-care',
    color: 'bg-health-blue/10 text-health-blue',
  },
  {
    id: 2,
    title: 'Old Age Care',
    description: 'Specialized care services for elderly patients, including routine check-ups and assistance with daily activities.',
    icon: Users,
    path: '/services/old-age-care',
    color: 'bg-health-green/10 text-health-green',
  },
  {
    id: 3,
    title: 'Child Care',
    description: 'Dedicated care services for children, including routine health check-ups and specialized pediatric services.',
    icon: Baby,
    path: '/services/child-care',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 4,
    title: 'Nursing Services',
    description: 'Professional nursing care at home, including wound care, medication management, and vital monitoring.',
    icon: User,
    path: '/services/nursing',
    color: 'bg-red-100 text-red-600',
  },
  {
    id: 5,
    title: 'Doctor Visits',
    description: 'Schedule a doctor to visit your home for check-ups, consultations, and medical treatments.',
    icon: Stethoscope,
    path: '/services/doctor-visits',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 6,
    title: '24/7 Emergency',
    description: 'Round-the-clock emergency medical services with quick response times for urgent situations.',
    icon: Clock,
    path: '/services/emergency',
    color: 'bg-yellow-100 text-yellow-600',
  },
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Healthcare Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of healthcare services to meet your needs. Our qualified professionals are ready to provide care at your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link to={service.path} key={service.id}>
              <Card className="h-full service-card border-t-4 border-t-health-blue hover:border-t-health-green">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-full ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
