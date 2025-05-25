
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Solutions from './pages/solutions';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Impact from './pages/impact';
import Navbar from './components/Navbar';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,Droplets,ArrowUp,Clock,Shield,Award} from 'lucide-react';


// Placeholder component for About (expand as needed)

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'About Us', href: 'about' },
    { name: 'Gallery', href: 'gallery' },
    { name: 'Contact', href: 'contact' }
  ];

  const services = [
    'Water Treatment Systems',
    'Quality Control & Testing',
    'Professional Installation',
    'Expert Consultation',
    'Maintenance & Support',
    'Emergency Service'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  const certifications = [
    { icon: Shield, text: 'ISO Certified' },
    { icon: Award, text: 'Industry Leader' },
    { icon: Clock, text: '24/7 Support' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                <Droplets className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold">AquaBond</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium water treatment solutions. We've been providing 
              clean, safe water to homes and businesses for over 15 years.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={16} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={16} />
                <span className="text-gray-300">info@aquabond.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1" size={16} />
                <span className="text-gray-300">
                  123 Water Street<br />
                  AquaCity, AC 12345
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6">Business Hours</h3>
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-gray-300">
                <span>Mon - Fri:</span>
                <span>8AM - 6PM</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Saturday:</span>
                <span>9AM - 4PM</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <div className="flex justify-between text-red-400">
                  <span>Emergency:</span>
                  <span>24/7</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:transform hover:scale-110`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-wrap items-center justify-center space-x-8 mb-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="flex items-center space-x-2 text-gray-400 mb-4">
                  <IconComponent size={18} />
                  <span className="text-sm">{cert.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-2xl p-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter for water treatment tips, maintenance reminders, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} AquaBond. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Warranty
              </button>
            </div>
          </div>
          
          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:transform hover:scale-110 group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:animate-bounce" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center space-x-8 text-xs text-gray-500">
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>EPA Approved</span>
            <span>•</span>
            <span>15+ Years Experience</span>
            <span>•</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>

      {/* Decorative Water Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-8"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-blue-900 opacity-30"
          />
        </svg>
      </div>
    </footer>
  );
};

function App() {
  return (
    <Router>  
  <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
    <Navbar/>
    <main className="flex-grow w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </main>
    <Footer />
  </div>
</Router>
  );
}

export default App;