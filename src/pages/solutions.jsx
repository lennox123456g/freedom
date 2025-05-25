import React, { useState } from 'react';
import { Droplets, Zap, Users, Cpu, Settings, Shield, Sun, Wifi, BarChart3, Wrench, GraduationCap, Heart, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('technology');
  const solutions = {
    technology: [
      {
        title: "Solar-Powered Water Systems",
        description: "Renewable energy-driven water pumping and distribution systems designed for rural and urban communities",
        features: ["24/7 operation with battery backup", "Low maintenance requirements", "Weather-resistant design", "Community-scalable infrastructure"],
        icon: Sun,
        status: "Prototype Developed"
      },
      {
        title: "IoT Water Monitoring",
        description: "Smart sensors and data analytics for real-time water quality and system performance monitoring",
        features: ["Real-time contamination detection", "Automated maintenance alerts", "Usage analytics and optimization", "Mobile app integration"],
        icon: Wifi,
        status: "Testing Phase"
      },
      {
        title: "Smart Water Distribution",
        description: "Intelligent water distribution networks that optimize flow and prevent waste",
        features: ["Automated flow control", "Leak detection systems", "Pressure optimization", "Remote system management"],
        icon: Settings,
        status: "Development"
      }
    ],
    community: [
      {
        title: "Water Committee Training",
        description: "Comprehensive leadership development for local water management committees",
        features: ["Project management skills", "Financial planning and budgeting", "Community mobilization", "Conflict resolution"],
        icon: Users,
        status: "40 Leaders Trained"
      },
      {
        title: "Technical Skills Development",
        description: "Hands-on training for community members on system maintenance and repair",
        features: ["Basic plumbing and electrical skills", "Solar system maintenance", "Water quality testing", "Preventive maintenance protocols"],
        icon: Wrench,
        status: "150+ Trained"
      },
      {
        title: "Health & Hygiene Education",
        description: "Community-wide education programs on water safety and sanitation practices",
        features: ["Waterborne disease prevention", "Proper water storage techniques", "Sanitation best practices", "Children's hygiene education"],
        icon: Heart,
        status: "2,000+ Reached"
      }
    ],
    infrastructure: [
      {
        title: "Community Water Tanks",
        description: "Strategically placed water storage systems serving multiple households",
        features: ["High-capacity storage (5,000-10,000L)", "Gravity-fed distribution", "Community access points", "Rainwater harvesting integration"],
        icon: Droplets,
        status: "1 Installed"
      },
      {
        title: "School Water Systems",
        description: "Dedicated water infrastructure for educational institutions",
        features: ["Student and staff access", "Drinking water stations", "Sanitation facility support", "Educational demonstration systems"],
        icon: GraduationCap,
        status: "Active Implementation"
      },
      {
        title: "Healthcare Facility Systems",
        description: "Specialized water systems for clinics and health centers",
        features: ["Medical-grade water quality", "Continuous supply assurance", "Emergency backup systems", "Sterilization support"],
        icon: Shield,
        status: "Planned"
      }
    ]
  };

  const impactMetrics = [
    { value: "81%", label: "Population without safe water", context: "Our target demographic" },
    { value: "38M", label: "People needing water access", context: "Across Uganda" },
    { value: "85%", label: "Contaminated water sources", context: "In target villages" },
    { value: "3-4hrs", label: "Daily water collection time", context: "Burden we're reducing" }
  ];

  // Mock navigation handler (replace with actual routing logic if needed)
  const handleNavigation = (path) => {
    console.log(`Navigate to ${path}`);
    // Replace with actual navigation, e.g., history.push(path) or Link
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Zap className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Comprehensive water security through renewable energy technology, 
              community empowerment, and sustainable infrastructure development
            </p>
            <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <span className="text-sm text-blue-100">Foundation Phase: 2024-2025</span>
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="mt-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-blue-100 font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-blue-200">{metric.context}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-2 inline-flex">
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'technology'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Technology Solutions
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'community'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Community Building
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'infrastructure'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Infrastructure
            </button>
          </div>
        </div>

        {/* Solutions Content */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {activeTab === 'technology' && 'Technology Solutions'}
            {activeTab === 'community' && 'Community Building'}
            {activeTab === 'infrastructure' && 'Infrastructure Development'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            {activeTab === 'technology' && 'Cutting-edge renewable energy and IoT solutions for sustainable water management'}
            {activeTab === 'community' && 'Empowering local communities with skills, knowledge, and leadership development'}
            {activeTab === 'infrastructure' && 'Strategic water infrastructure designed for maximum community impact'}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions[activeTab].map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {solution.status}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div className="space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <button className="flex items-center space-x-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white py-!!!!
20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures sustainable impact and community ownership
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-white" />
                <div className="absolute -mt-8 -mr-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">Community needs analysis and water source evaluation</p>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 tocyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
                <div className="absolute -mt-8 -mr-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Engagement</h3>
              <p className="text-gray-600">Community mobilization and stakeholder involvement</p>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="h-10 w-10 text-white" />
                <div className="absolute -mt-8 -mr-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">System installation and capacity building training</p>
            </div>
            <div className="text-center">
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
                <div className="absolute -mt-8 -mr-8 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600">Long-term monitoring and community ownership</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Implement Solutions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Partner with us to bring sustainable water solutions to your community. 
            Together, we can create lasting impact and water security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold 
                         hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handleNavigation('impact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold 
                         hover:bg-white/10 transition-colors"
            >
              View Our Impact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;