import React from 'react';
import { MapPin, Users, Shield, Award, Smile } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-blue-600 rounded-xl p-8 md:p-12 mb-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-700 opacity-50 transform -skew-y-6 translate-y-24"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold mb-4">About Wanderlust</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              We're a team of passionate travelers dedicated to creating unforgettable experiences for our customers. 
              Founded in 2015, we've helped thousands of travelers explore the world's most beautiful destinations.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Story</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/7048045/pexels-photo-7048045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">From Passion to Profession</h3>
              <p className="text-gray-600 mb-4">
                Wanderlust began with a simple idea: to create travel experiences we'd want to take ourselves. 
                Our founder, Ronik Dey, was frustrated with the cookie-cutter tours available on the market 
                and decided to create something different.
              </p>
              <p className="text-gray-600 mb-4">
                Starting with just three destinations in Asia, we've now expanded to offer tours across six 
                continents. Our philosophy remains the same: authentic experiences, responsible travel, and 
                exceptional service.
              </p>
              <p className="text-gray-600">
                We believe travel has the power to transform lives – both for our customers and for the 
                communities we visit. That's why we're committed to sustainable tourism practices and giving 
                back to local communities.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="mb-16 bg-white rounded-xl shadow-md p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Experiences</h3>
              <p className="text-gray-600">
                We design our tours to connect travelers with local cultures and traditions, 
                providing authentic experiences beyond typical tourist attractions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Responsible Travel</h3>
              <p className="text-gray-600">
                We're committed to sustainable tourism that respects local environments 
                and benefits the communities we visit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mx-auto mb-4">
                <Smile size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">
                We go above and beyond to ensure our travelers have unforgettable experiences, 
                with expert guides and 24/7 support.
              </p>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-100 text-blue-600 p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Local Guides</h3>
                  <p className="text-gray-600">
                    Our guides are local experts who provide insider knowledge, cultural context, 
                    and authentic experiences you won't find in guidebooks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-100 text-blue-600 p-3 rounded-full">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Award-Winning Service</h3>
                  <p className="text-gray-600">
                    We've been recognized for our exceptional service, with awards from 
                    Travel + Leisure, National Geographic, and TripAdvisor.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-100 text-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Secure Booking</h3>
                  <p className="text-gray-600">
                    Our booking system is safe and secure, with flexible payment options 
                    and clear cancellation policies for peace of mind.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="mr-4 bg-blue-100 text-blue-600 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Thoughtfully Designed Itineraries</h3>
                  <p className="text-gray-600">
                    Our itineraries balance must-see attractions with hidden gems, providing 
                    time for both guided experiences and personal exploration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/src/pages/Images/Ronik.jpg.jpeg" 
                alt="Ronik Dey" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Ronik Dey</h3>
                <p className="text-blue-600 mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  Travel enthusiast who has visited over 60 countries and counting.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/src/pages/Images/Puskar.jpg.jpeg" 
                alt="Puskar Jana" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Puskar Jana</h3>
                <p className="text-blue-600 mb-2">Tour Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Logistics expert with a background in hospitality management.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/src/pages/Images/Iman.jpg.jpeg" 
                alt="Iman Das" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Iman Das</h3>
                <p className="text-blue-600 mb-2">Customer Experience Manager</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to ensuring every traveler has an amazing experience.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2">
              <img 
                src="/src/pages/Images/Diptorup.jpg.jpeg" 
                alt="Diptorup Moshel" 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">Diptorup Moshel</h3>
                <p className="text-blue-600 mb-2">Head of Sustainability</p>
                <p className="text-gray-600 text-sm">
                  Environmental scientist who ensures our tours are eco-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gray-900 rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Browse our destinations and find your perfect journey. 
            We're excited to help you create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/destinations" 
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Explore Destinations
            </a>
            <a 
              href="/contact" 
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;