
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Heart, UserPlus, LogIn } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/83a4e191-27da-48e5-aee1-95ae7136736c.png" 
              alt="Health Care Nepal Logo" 
              className="h-12 w-auto" 
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-health-blue' : 'text-white'}`}>Health Care Nepal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`font-medium hover:text-health-green transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Home</Link>
            <Link to="/services" className={`font-medium hover:text-health-green transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Services</Link>
            <Link to="/about" className={`font-medium hover:text-health-green transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>About Us</Link>
            <Link to="/contact" className={`font-medium hover:text-health-green transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Contact</Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-health-blue">
                <LogIn className="h-4 w-4 mr-1" /> Login
              </Button>
              <Button variant="default" size="sm" className="bg-health-blue hover:bg-health-blue/90">
                <UserPlus className="h-4 w-4 mr-1" /> Register
              </Button>
            </div>
          </div>

          {/* Emergency Call Button */}
          <div className="hidden md:block">
            <Button className="bg-health-green hover:bg-health-green/90">
              <Phone className="mr-2 h-4 w-4" /> Emergency Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-medium text-gray-700 hover:text-health-blue transition-colors">Home</Link>
              <Link to="/services" className="font-medium text-gray-700 hover:text-health-blue transition-colors">Services</Link>
              <Link to="/about" className="font-medium text-gray-700 hover:text-health-blue transition-colors">About Us</Link>
              <Link to="/contact" className="font-medium text-gray-700 hover:text-health-blue transition-colors">Contact</Link>
              <div className="flex flex-col space-y-2">
                <Button variant="outline" size="sm" className="justify-start">
                  <LogIn className="h-4 w-4 mr-2" /> Login
                </Button>
                <Button variant="default" size="sm" className="justify-start bg-health-blue hover:bg-health-blue/90">
                  <UserPlus className="h-4 w-4 mr-2" /> Register
                </Button>
                <Button variant="default" className="justify-start bg-health-green hover:bg-health-green/90">
                  <Phone className="h-4 w-4 mr-2" /> Emergency Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
