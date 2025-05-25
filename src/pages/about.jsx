import React, { useState } from 'react';
import { Droplets, Users, Target, Heart, MapPin, TrendingUp, Award, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Droplets className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              AQUABOND
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transforming lives through sustainable water solutions across Uganda, 
              one community at a time.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">38M+</div>
                <div className="text-sm text-blue-100">People without safe water</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold">81%</div>
                <div className="text-sm text-blue-100">Of Uganda's population</div>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Mission Section */}
  <div className="max-w-7xl mx-auto px-6 py-20">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          AquaBond addresses one of Uganda's most pressing challenges: severe water scarcity 
          affecting 38 million out of 47 million Ugandans who lack access to safe, clean water.
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Our approach integrates renewable energy technology, community engagement, and innovative 
          water management systems to create lasting, locally-owned solutions that break the cycle 
          of poverty perpetuated by water scarcity.
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex items-start space-x-3">
            <Target className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">Sustainable Solutions</h4>
              <p className="text-gray-600 text-sm">Technology-driven water management</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-gray-900">Community-Centered</h4>
              <p className="text-gray-600 text-sm">Local ownership and capacity building</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">The Problem We're Solving</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Waterborne diseases claiming lives daily</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Girls missing school to fetch water</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Families spending 3-4 hours daily collecting water</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span>Economic productivity severely compromised</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Founder Section */}
  <div className="bg-gray-50 py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
        <p className="text-xl text-gray-600">Leading change through innovation and community engagement</p>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">LM</span>
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Lennox Mugumira</h3>
          <p className="text-xl text-gray-600 mb-6">Civil Engineer & BeVisioneers Mercedes-Benz Fellow</p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            A recent graduate with a Diploma in Civil Engineering from Makerere University, complemented by 
            self-taught skills in data science, app development, and web development. As a BeVisioneers 
            Mercedes-Benz Fellow and member of the World Youth Parliament for Water, Lennox combines technical 
            expertise with deep community engagement to create sustainable water solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1,500+</div>
              <div className="text-sm text-gray-600">Children trained through Cricket to Nurture</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">Students awarded full scholarships</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">11</div>
              <div className="text-sm text-gray-600">Schools & villages impacted</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

