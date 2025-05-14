import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Star, Filter, Search, X } from 'lucide-react';
import { destinations } from '../data/destinations';

const DestinationsPage = () => {
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [filters, setFilters] = useState({
    continent: '',
    country: '',
    duration: '',
    priceRange: '',
    rating: '',
    search: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get unique values for filter options
  const continents = [...new Set(destinations.map(dest => dest.continent))];
  const countries = [...new Set(destinations.map(dest => dest.country))];
  
  // Price ranges
  const priceRanges = [
    { label: 'Under $1000', value: '0-1000' },
    { label: '$1000 - $2000', value: '1000-2000' },
    { label: '$2000 - $3000', value: '2000-3000' },
    { label: 'Over $3000', value: '3000-99999' },
  ];
  
  // Duration ranges
  const durationRanges = [
    { label: '1-5 days', value: '1-5' },
    { label: '6-10 days', value: '6-10' },
    { label: '11-15 days', value: '11-15' },
    { label: 'Over 15 days', value: '16-99' },
  ];

  // Apply filters
  useEffect(() => {
    let results = destinations;
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      results = results.filter(
        dest => 
          dest.name.toLowerCase().includes(searchTerm) || 
          dest.country.toLowerCase().includes(searchTerm) ||
          dest.description.toLowerCase().includes(searchTerm)
      );
    }
    
    if (filters.continent) {
      results = results.filter(dest => dest.continent === filters.continent);
    }
    
    if (filters.country) {
      results = results.filter(dest => dest.country === filters.country);
    }
    
    if (filters.duration) {
      const [min, max] = filters.duration.split('-').map(Number);
      results = results.filter(dest => dest.duration >= min && dest.duration <= max);
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      results = results.filter(dest => dest.price >= min && dest.price <= max);
    }
    
    if (filters.rating) {
      results = results.filter(dest => dest.rating >= Number(filters.rating));
    }
    
    setFilteredDestinations(results);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      continent: '',
      country: '',
      duration: '',
      priceRange: '',
      rating: '',
      search: '',
    });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Explore Destinations</h1>
          <p className="text-gray-600">Discover tours and travel experiences around the world</p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div className="relative w-full md:w-auto md:flex-grow">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              name="search"
              value={filters.search}
              onChange={handleFilterChange}
              className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <button
            onClick={toggleFilter}
            className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200 md:w-auto w-full"
          >
            <Filter size={20} className="mr-2" />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Filters Panel */}
        <div className={`bg-white p-6 rounded-lg shadow-md mb-8 transition-all duration-300 ${isFilterOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Filter Options</h3>
            <button onClick={clearFilters} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Clear All
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Continent Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Continent
              </label>
              <select
                name="continent"
                value={filters.continent}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Continents</option>
                {continents.map((continent) => (
                  <option key={continent} value={continent}>
                    {continent}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Country Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <select
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Duration Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <select
                name="duration"
                value={filters.duration}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Duration</option>
                {durationRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Range
              </label>
              <select
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Price</option>
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Rating Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Minimum Rating
              </label>
              <select
                name="rating"
                value={filters.rating}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Any Rating</option>
                <option value="3">3+ Stars</option>
                <option value="4">4+ Stars</option>
                <option value="4.5">4.5+ Stars</option>
              </select>
            </div>
          </div>
          
          {/* Active Filters */}
          <div className="mt-6 flex flex-wrap gap-2">
            {Object.entries(filters).map(([key, value]) => {
              if (!value) return null;
              
              let label = '';
              
              switch(key) {
                case 'continent':
                  label = value;
                  break;
                case 'country':
                  label = value;
                  break;
                case 'duration':
                  const durationRange = durationRanges.find(range => range.value === value);
                  label = durationRange?.label || value;
                  break;
                case 'priceRange':
                  const priceRange = priceRanges.find(range => range.value === value);
                  label = priceRange?.label || value;
                  break;
                case 'rating':
                  label = `${value}+ Stars`;
                  break;
                case 'search':
                  label = `"${value}"`;
                  break;
                default:
                  return null;
              }
              
              return (
                <div
                  key={key}
                  className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  <span>{label}</span>
                  <button
                    onClick={() => setFilters(prev => ({ ...prev, [key]: '' }))}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredDestinations.length} {filteredDestinations.length === 1 ? 'destination' : 'destinations'} found
          </p>
        </div>
        
        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
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
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="inline-block" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No destinations found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button
              onClick={clearFilters}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsPage;