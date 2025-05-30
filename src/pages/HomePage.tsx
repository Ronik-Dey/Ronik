import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Star, Search, ChevronRight } from 'lucide-react';
import { destinations, getCategories } from '../data/destinations';
import { useAuth } from '../context/AuthContext';

const FeaturedDestination = ({ destination }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl h-[400px] shadow-lg transition-all duration-300 hover:shadow-xl">
      <img 
        src={destination.image} 
        alt={destination.name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center mb-2">
          <MapPin size={16} className="text-blue-400 mr-1" />
          <span className="text-blue-200 text-sm">{destination.country}</span>
        </div>
        <h3 className="text-white text-xl font-bold mb-2">{destination.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar size={16} className="text-blue-400 mr-1" />
            <span className="text-blue-200 text-sm">{destination.duration} days</span>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
            <span className="text-white">{destination.rating}</span>
            <span className="text-gray-400 text-sm ml-1">({destination.reviews})</span>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-white text-xl font-bold">${destination.price}</span>
            <span className="text-gray-400 text-sm ml-1">per person</span>
          </div>
          <Link
            to={`/destinations/${destination.id}`}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

const TourCategory = ({ icon, title, count, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{count} tours</p>
    </div>
  );
};

const TestimonialCard = ({ name, location, text, avatar, rating }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < rating ? "text-yellow-400 inline-block" : "text-gray-300 inline-block"} 
            fill={i < rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </div>
  );
};

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [scrollY, setScrollY] = useState(0);
  
  const featuredDestinations = destinations.filter(dest => dest.featured);
  const popularDestinations = destinations.filter(dest => dest.popular);
  const categories = getCategories();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/destinations?search=${searchQuery}&type=${selectedType}`);
  };

  const handleCategoryClick = (category) => {
    navigate(`/destinations?category=${category}`);
  };

  const getDestinationCountByCategory = (category) => {
    return destinations.filter(dest => dest.categories.includes(category)).length;
  };

  const categoryIcons = {
    Adventure: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    Cultural: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    Beach: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    Mountain: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    Wildlife: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    Luxury: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Discover the World's <br /> Most Amazing Places
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Find and book tours and travel experiences across India and beyond
          </p>
          
          {/* Search Form */}
          <form onSubmit={handleSearch} className="bg-white p-4 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Destination
                </label>
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where to go?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Date
                </label>
                <div className="relative">
                  <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Tour Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="pl-3 pr-10 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Any type</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                <Search size={18} className="mr-2" />
                Search
              </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Destinations</h2>
              <p className="text-gray-600">Explore our handpicked destinations</p>
            </div>
            <Link
              to="/destinations"
              className="mt-4 md:mt-0 flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View all destinations
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <FeaturedDestination key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Browse by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Find your perfect tour based on your interests</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(categoryIcons).map(([category, icon]) => (
              <TourCategory
                key={category}
                icon={icon}
                title={category}
                count={getDestinationCountByCategory(category)}
                onClick={() => handleCategoryClick(category)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Popular Tours</h2>
              <p className="text-gray-600">Most popular choices by our customers</p>
            </div>
            <Link
              to="/destinations"
              className="mt-4 md:mt-0 flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              View all tours
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.slice(0, 3).map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    ${destination.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin size={16} className="text-blue-600 mr-1" />
                    <span className="text-gray-500 text-sm">{destination.country}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{destination.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar size={16} className="text-blue-600 mr-1" />
                      <span className="text-gray-500 text-sm">{destination.duration} days</span>
                    </div>
                    <div className="flex items-center">
                      <Star size={16} className="text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-gray-800">{destination.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">({destination.reviews})</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/destinations/${destination.id}`}
                      className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Discover the Wanderlust difference</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Secure Booking</h3>
              <p className="text-blue-100">We prioritize your security with encrypted transactions and secure booking systems.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-blue-100">We promise the best rates and will match any lower price you find elsewhere.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Travel Experts</h3>
              <p className="text-blue-100">Our team consists of experienced travel professionals with extensive destination knowledge.</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
              <p className="text-blue-100">Our dedicated support team is available around the clock to assist you with any queries.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Read testimonials from our satisfied travelers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Johnson"
              location="London, UK"
              text="The Golden Triangle tour was simply amazing! Everything was perfectly organized, from the hotels to the guided tours. Our guide was knowledgeable and friendly. Seeing the Taj Mahal at sunrise was a dream come true!"
              avatar="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rating={5}
            />
            <TestimonialCard 
              name="Michael Chen"
              location="Singapore"
              text="We took the Kerala Backwaters tour and it exceeded all our expectations. The houseboat experience was unique and the food was amazing. The timing was perfect and we saw beautiful landscapes. Highly recommended!"
              avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rating={4}
            />
            <TestimonialCard 
              name="Priya Sharma"
              location="Mumbai, India"
              text="The Ladakh tour was the most amazing vacation I've ever had. The monasteries, landscapes, and local culture were incredible. Our guide was excellent and the accommodations were perfect. Can't wait to return!"
              avatar="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              rating={5}
            />
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-blue-500 transform skew-x-12 translate-x-1/3 hidden lg:block"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-blue-100 mb-6">Get exclusive deals, travel tips, and updates delivered straight to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 flex-grow"
                />
                <button className="px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-md hover:bg-yellow-400 transition-colors duration-200 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile App Promo */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Download Our Mobile App</h2>
              <p className="text-gray-600 mb-6">Take Wanderlust with you wherever you go. Book tours, get travel recommendations, and access offline maps with our mobile app.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,1.5h-11c-2.757,0-5,2.243-5,5v11c0,2.757,2.243,5,5,5h11c2.757,0,5-2.243,5-5v-11C22.5,3.743,20.257,1.5,17.5,1.5z M8.82,17.5H6.65v-8.1h2.17V17.5z M7.73,8.7c-0.712,0-1.29-0.578-1.29-1.29c0-0.713,0.578-1.29,1.29-1.29s1.29,0.577,1.29,1.29C9.02,8.122,8.443,8.7,7.73,8.7z M17.5,17.5h-2.168v-4.011c0-1.055-0.523-1.618-1.394-1.618c-1.036,0-1.588,0.702-1.588,1.618V17.5h-2.154v-8.1h2.154v0.984C12.882,9.674,13.581,9.2,14.72,9.2c1.58,0,2.78,0.937,2.78,2.981V17.5z"/>
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold font-sans -mt-1">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                  <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.5,1.5v21l18-10.5L3.5,1.5z"/>
                  </svg>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold font-sans -mt-1">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src="https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mobile App" 
                className="w-full max-w-md rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;