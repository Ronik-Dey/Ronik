import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Star, Search, ChevronRight } from 'lucide-react';
import { destinations } from '../data/destinations';
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
            <Star size={16} className="text-yellow-400 mr-1" />
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
  const featuredDestinations = destinations.filter(dest => dest.featured);
  const popularDestinations = destinations.filter(dest => dest.popular);
  
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/destinations?category=${category}`);
  };

  const getDestinationsByCategory = (category) => {
    return destinations.filter(dest => dest.category === category);
  };

  // Rest of the component remains the same as in the original file
  // ... (include all the JSX from the original file)
};

export default HomePage;