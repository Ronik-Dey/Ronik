import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Star, 
  Clock, 
  Users, 
  Check, 
  X as XIcon, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft,
  Heart
} from 'lucide-react';
import { destinations } from '../data/destinations';
import { useAuth } from '../context/AuthContext';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const destination = destinations.find(dest => dest.id === id);
  
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImage, setCurrentImage] = useState(0);
  const [travelers, setTravelers] = useState(2);
  const [bookingDate, setBookingDate] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // If destination not found, redirect to destinations page
  useEffect(() => {
    if (!destination) {
      navigate('/destinations');
    }
  }, [destination, navigate]);
  
  if (!destination) {
    return null;
  }
  
  const allImages = [destination.image, ...destination.gallery];

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };
  
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleBook = () => {
    if (!user) {
      navigate('/login', { state: { redirectTo: `/destinations/${id}` } });
      return;
    }
    
    if (!bookingDate) {
      alert('Please select a travel date');
      return;
    }
    
    // In a real app, this would submit the booking to an API
    alert(`Booking submitted for ${travelers} travelers on ${bookingDate}`);
  };

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/destinations')}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft size={18} className="mr-1" />
            Back to All Destinations
          </button>
        </div>
        
        {/* Destination Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <div className="flex items-center mb-2">
                <MapPin size={18} className="text-blue-600 mr-1" />
                <span className="text-gray-500">{destination.country}, {destination.continent}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-800">{destination.name}</h1>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <button
                onClick={toggleWishlist}
                className={`p-2 rounded-full mr-2 ${
                  isWishlisted 
                    ? 'bg-red-100 text-red-600' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
              <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">
                <Star size={16} className="text-yellow-500 mr-1" fill="currentColor" />
                <span>{destination.rating}</span>
                <span className="text-gray-500 ml-1">({destination.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="mb-8 relative">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <img 
              src={allImages[currentImage]} 
              alt={destination.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
          <div className="flex justify-center mt-4 space-x-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full ${
                  currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'overview'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('itinerary')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'itinerary'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Itinerary
                </button>
                <button
                  onClick={() => setActiveTab('inclusions')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'inclusions'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Inclusions & Exclusions
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'reviews'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Reviews
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Tour</h2>
                  <p className="text-gray-600 mb-6">{destination.longDescription}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center text-blue-600 mb-2">
                        <Calendar size={18} className="mr-2" />
                        <span className="font-medium">Duration</span>
                      </div>
                      <p className="text-gray-800">{destination.duration} days</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center text-blue-600 mb-2">
                        <Star size={18} className="mr-2" />
                        <span className="font-medium">Rating</span>
                      </div>
                      <p className="text-gray-800">{destination.rating}/5</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center text-blue-600 mb-2">
                        <Users size={18} className="mr-2" />
                        <span className="font-medium">Group Size</span>
                      </div>
                      <p className="text-gray-800">Max 12 people</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-center text-blue-600 mb-2">
                        <MapPin size={18} className="mr-2" />
                        <span className="font-medium">Location</span>
                      </div>
                      <p className="text-gray-800">{destination.country}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Activities</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {destination.activities.map((activity, index) => (
                      <div key={index} className="flex items-center">
                        <Check size={18} className="text-green-500 mr-2" />
                        <span className="text-gray-700">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Itinerary Tab */}
              {activeTab === 'itinerary' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Itinerary</h2>
                  <p className="text-gray-600 mb-6">
                    Day-by-day breakdown of your {destination.duration}-day journey.
                  </p>
                  
                  <div className="space-y-6">
                    {destination.itinerary.map((day, index) => (
                      <div key={index} className="border-l-4 border-blue-600 pl-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-gray-600">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Inclusions & Exclusions Tab */}
              {activeTab === 'inclusions' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">What's Included & Excluded</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <Check size={18} className="text-green-500 mr-2" />
                        Inclusions
                      </h3>
                      <ul className="space-y-3">
                        {destination.inclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <XIcon size={18} className="text-red-500 mr-2" />
                        Exclusions
                      </h3>
                      <ul className="space-y-3">
                        {destination.exclusions.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <XIcon size={16} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-1">Guest Reviews</h2>
                      <div className="flex items-center">
                        <Star size={18} className="text-yellow-400 mr-1" fill="currentColor" />
                        <span className="text-gray-800 font-semibold">{destination.rating}</span>
                        <span className="text-gray-500 ml-1">({destination.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
                      Write a Review
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Sample Reviews - In a real app, these would come from an API */}
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-3">
                        <img 
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">Michael Chen</h4>
                          <p className="text-gray-500 text-sm">Traveled in March 2025</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className="text-yellow-400 mr-1" 
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Exceeded expectations!</h5>
                      <p className="text-gray-600">
                        This tour was absolutely amazing. The guides were knowledgeable and friendly, the accommodations were comfortable, and the itinerary was perfectly balanced. Highly recommend!
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-6">
                      <div className="flex items-center mb-3">
                        <img 
                          src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">Sarah Johnson</h4>
                          <p className="text-gray-500 text-sm">Traveled in February 2025</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className={i < 4 ? "text-yellow-400 mr-1" : "text-gray-300 mr-1"} 
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Great experience with minor issues</h5>
                      <p className="text-gray-600">
                        Overall, we had a fantastic time on this tour. The destinations were beautiful and the local food was delicious. The only reason for 4 stars instead of 5 is that one of our accommodations wasn't quite up to the standard of the others. Would still recommend!
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        <img 
                          src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                          alt="Reviewer" 
                          className="w-10 h-10 rounded-full mr-3 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-800">David Williams</h4>
                          <p className="text-gray-500 text-sm">Traveled in January 2025</p>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={16} 
                            className="text-yellow-400 mr-1" 
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <h5 className="font-semibold text-gray-800 mb-2">Unforgettable adventure!</h5>
                      <p className="text-gray-600">
                        This was the trip of a lifetime! Every day was filled with new experiences and the guides went above and beyond to make sure we were comfortable and enjoying ourselves. The sights were breathtaking and I came home with amazing memories and photos.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar - Booking */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-gray-800">${destination.price}</span>
                  <span className="text-gray-500">per person</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock size={16} className="mr-1" />
                  <span>{destination.duration} days</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travelers
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setTravelers(prev => Math.max(1, prev - 1))}
                      className="px-3 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
                      className="w-16 text-center border-t border-b border-gray-300 py-1"
                    />
                    <button
                      onClick={() => setTravelers(prev => prev + 1)}
                      className="px-3 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tour Date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
              
              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Base Price (per person)</span>
                  <span className="text-gray-800">${destination.price}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Travelers</span>
                  <span className="text-gray-800">x {travelers}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t border-gray-200 pt-2 mt-2">
                  <span>Total</span>
                  <span>${destination.price * travelers}</span>
                </div>
              </div>
              
              <button
                onClick={handleBook}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 mt-4"
              >
                {user ? 'Book Now' : 'Login to Book'}
              </button>
              
              <p className="text-gray-500 text-sm text-center mt-4">
                No payment required now. Reserve your spot today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;