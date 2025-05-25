import React, { useEffect, useState } from 'react';
import { Droplets, Users, Target, Heart, MapPin, TrendingUp, Award, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

const Impact = () => {
  const [activeTab, setActiveTab] = useState('community');

  const impactData = {
    community: {
      title: "Community Engagement",
      stats: [
        { number: "10", label: "Villages Engaged", icon: MapPin },
        { number: "150+", label: "Community Members Trained", icon: Users },
        { number: "40", label: "Local Leaders Trained", icon: Award },
        { number: "2,000+", label: "People Reached through Awareness", icon: TrendingUp }
      ]
    },
    infrastructure: {
      title: "Infrastructure Development",
      stats: [
        { number: "1", label: "Water Tank System Installed", icon: Droplets },
        { number: "300+", label: "Students Benefiting", icon: Users },
        { number: "3", label: "Solar-Powered Prototypes", icon: Target },
        { number: "85%", label: "Water Sources Found Contaminated", icon: CheckCircle }
      ]
    }
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
                <TrendingUp className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Our Impact Story
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Building foundations for sustainable change through community engagement, 
              capacity building, and innovative water solutions.
            </p>
            <div className="inline-flex bg-white/20 backdrop-blur-sm rounded-lg p-2">
              <span className="text-sm text-blue-100">Foundation Phase: 2024-2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-2 inline-flex">
            <button
              onClick={() => setActiveTab('community')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'community'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Community Impact
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === 'infrastructure'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Infrastructure Impact
            </button>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {impactData[activeTab].title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactData[activeTab].stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600">Milestones in our journey to provide clean water access</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">School Water System</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Successfully installed a water tank system at a local primary school, directly 
                improving water access for 300+ students and enhancing school attendance rates.
              </p>
              <div className="text-sm text-blue-600 font-medium">Direct Impact: 300+ students</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Community Committees</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Established water committees in 10 villages, training 40 local leaders on 
                project management and community mobilization for sustainable water management.
              </p>
              <div className="text-sm text-green-600 font-medium">Sustainability Focus</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-purple-500 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Technology Innovation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Developed and tested 3 renewable energy-powered water management prototypes 
                using solar technology and IoT monitoring systems.
              </p>
              <div className="text-sm text-purple-600 font-medium">Innovation Driven</div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Insights */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Insights</h2>
            <p className="text-xl text-gray-600">Understanding the challenges through community engagement</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="border-r border-gray-200 pr-8">
                <div className="text-4xl font-bold text-red-500 mb-2">85%</div>
                <div className="text-gray-600 text-sm mb-4">Water sources contaminated</div>
                <p className="text-gray-700 text-sm">
                  Systematic testing revealed widespread contamination across target villages
                </p>
              </div>
              <div className="border-r border-gray-200 pr-8">
                <div className="text-4xl font-bold text-orange-500 mb-2">3-4</div>
                <div className="text-gray-600 text-sm mb-4">Hours daily collecting water</div>
                <p className="text-gray-700 text-sm">
                  Average time families spend on water collection activities
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-500 mb-2">70%</div>
                <div className="text-gray-600 text-sm mb-4">Burden on women & girls</div>
                <p className="text-gray-700 text-sm">
                  Water collection responsibility directly impacts education and economic participation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Looking Forward</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            This capacity building period has established the groundwork for scaling our 
            technology-driven solutions across East Africa, ensuring community ownership and sustainable impact.
          </p>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
            <span className="mr-2">Ready to scale impact</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Impact;