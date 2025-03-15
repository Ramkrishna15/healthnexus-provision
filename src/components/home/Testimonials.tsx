
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Home Care Patient',
    content: 'The home care service provided by Health Care Nepal was excellent. The nurse was professional, caring, and arrived right on time. Will definitely use their services again.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Priya Tamang',
    role: 'Family Member of Elderly Patient',
    content: 'Finding reliable old age care for my father was a challenge until I discovered Health Care Nepal. Their caregivers are attentive and well-trained. The peace of mind they provide is priceless.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Binod Thapa',
    role: 'Parent',
    content: 'The child care nurses were amazing with my daughter during her recovery. They were patient, gentle, and knew exactly how to make her comfortable. Highly recommended!',
    rating: 4,
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
  },
  {
    id: 4,
    name: 'Sarita Poudel',
    role: 'Home Care Patient',
    content: 'After my surgery, I needed regular dressing changes and monitoring. The home nursing service was convenient and professional, saving me trips to the hospital while ensuring proper care.',
    rating: 5,
    image: 'https://randomuser.me/api/portraits/women/26.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? Math.max(testimonials.length - itemsPerPage, 0) : prevIndex - itemsPerPage
    );
  };

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hear from people who have experienced our healthcare services and the difference it made in their lives.
          </p>
        </div>

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {currentTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="flex-1 min-w-0 service-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4" 
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
