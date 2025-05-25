import React from 'react';
import { Droplets, Shield, Zap, Award, ArrowRight, Phone, Mail, Users, Target, TrendingUp } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  // Mock navigation handler (replace with actual routing logic if needed)
  const handleNavigation = (path) => {
    console.log(`Navigate to ${path}`);
    // Replace with actual navigation, e.g., useNavigate()
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
          {/* Water-like background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="water-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.1)" />
                  <circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.05)" />
                  <circle cx="75" cy="75" r="1.5" fill="rgba(255,255,255,0.08)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#water-pattern)" />
            </svg>
          </div>
          
          {/* Animated water waves */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,40 C300,80 600,0 900,40 C1050,60 1150,40 1200,40 L1200,120 L0,120 Z" 
                    fill="rgba(255,255,255,0.1)" className="animate-pulse" />
            </svg>
          </div>
          
          {/* Uganda-inspired geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 border border-white/30 rotate-45"
                style={{
                  left: `${10 + (i * 6)}%`,
                  top: `${20 + Math.sin(i) * 30}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          
          
          <h2 className="text-xl md:text-3xl text-blue-100 mb-8 font-light mt-20">
            Solving Uganda's Water Crisis Through Innovation & Community Empowerment
          </h2>
          
          <p className="text-lg md:text-xl text-blue-200 mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-cyan-200">38 million Ugandans</span> lack access to safe water. 
            We're changing that through renewable energy-powered solutions, 
            community capacity building, and sustainable water management systems.
          </p>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">10</div>
              <div className="text-blue-200">Villages Engaged</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">2,000+</div>
              <div className="text-blue-200">Community Members Reached</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-300 mb-2">300+</div>
              <div className="text-blue-200">Students Benefiting</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => handleNavigation('solutions')}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 
                         text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 
                         transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Our Solutions</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => handleNavigation('impact')}
              className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full 
                       text-lg font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              View Impact
            </button>
          </div>

          {/* Bouncing Icon (Moved Below Navigation Buttons) */}
          <div className="mt-8">
            <Droplets className="h-20 w-20 text-blue-300 mx-auto mb-6 animate-bounce" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-red-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">The Crisis We're Solving</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                <span className="font-bold text-red-600">81% of Ugandans</span> - that's 38 million people out of 47 million - 
                lack access to safe, clean water. Rapid urbanization and population growth have overwhelmed existing 
                water systems, creating a humanitarian crisis that affects every aspect of life.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">3-4 Hours</div>
                  <div className="text-gray-600">Daily water collection time</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">70%</div>
                  <div className="text-gray-600">Burden carried by women & girls</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">85%</div>
                  <div className="text-gray-600">Contaminated water sources</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-red-600 mb-2">Low</div>
                  <div className="text-gray-600">School attendance (especially girls)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Innovative Approach</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine renewable energy technology, community engagement, and data-driven solutions 
              to create sustainable water systems that communities can own and maintain.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Renewable Energy Solutions</h4>
              <p className="text-gray-600 leading-relaxed">
                Solar-powered water management systems with IoT sensors for real-time monitoring and optimization, 
                ensuring sustainable and efficient water distribution.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Community Capacity Building</h4>
              <p className="text-gray-600 leading-relaxed">
                Training local leaders and community members on water management, hygiene practices, and system maintenance 
                to ensure long-term sustainability and local ownership.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Target className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Impact</h4>
              <p className="text-gray-600 leading-relaxed">
                Systematic data collection and analysis to understand community needs, track progress, 
                and optimize solutions for maximum impact and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Achievements Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">Building Foundations for Change</h3>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Over the past 12 months, we've focused on understanding communities, building capacity, 
              and establishing sustainable foundations for scalable water solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-cyan-300 mb-2">150+</div>
              <div className="text-blue-200">Community Members Trained</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-cyan-300 mb-2">40</div>
              <div className="text-blue-200">Local Leaders Trained</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-10 w-10 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-cyan-300 mb-2">3</div>
              <div className="text-blue-200">Prototype Systems Developed</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-cyan-300 mb-2">1</div>
              <div className="text-blue-200">School Water System Installed</div>
            </div>
          </div>

          <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-700">
            <h4 className="text-2xl font-bold mb-4 text-center">Key Achievement</h4>
            <p className="text-lg text-blue-100 text-center leading-relaxed">
              Successfully installed a water tank system at a local primary school, directly improving water access 
              for over 300 students and demonstrating the impact of community-centered, technology-driven solutions.
            </p>
          </div>
        </div>
      </section>

      /* Leadership & Vision Section */
      <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Leadership & Vision</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Founded by <strong>Lennox Mugumira</strong>, a civil engineering graduate and BeVisioneers Mercedes-Benz Fellow, 
                Bat for Clean Water combines technical expertise with community-centered leadership. As a member of the 
                World Youth Parliament for Water and founder of Cricket to Nurture (which trained 1,500+ children across 
                5 schools and 6 villages), our approach integrates engineering solutions with youth empowerment and 
                environmental sustainability.
              </p>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Aspiration</h4>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To scale renewable energy-powered water management innovations across East Africa, 
                  bridging the gap between engineering solutions and community needs while fostering 
                  sustainable development that addresses water security challenges and empowers local communities 
                  through accessible, technology-driven water solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-4xl font-bold text-white mb-6">Join Us in Creating Water Security</h3>
          <p className="text-xl text-blue-100 mb-8">
            Together, we can ensure that every Ugandan has access to safe, clean water. 
            Be part of the solution that empowers communities and transforms lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold 
                         hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Partner With Us</span>
            </button>
            <button 
              onClick={() => handleNavigation('impact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold 
                         hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;