import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Star } from 'lucide-react';
import { destinations } from '../data/destinations';
import { categories } from '../data/categories';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find(cat => cat.id === categoryId);
  
  // Filter destinations based on activities that match the category
  const categoryDestinations = destinations.filter(dest => {
    switch(categoryId) {
      case 'adventure':
        return dest.activities.some(activity => 
          activity.toLowerCase().includes('trek') || 
          activity.toLowerCase().includes('adventure') ||
          activity.toLowerCase().includes('hiking')
        );
      case 'cultural':
        return dest.activities.some(activity => 
          activity.toLowerCase().includes('cultural') || 
          activity.toLowerCase().includes('heritage') ||
          activity.toLowerCase().includes('temple')
        );
      case 'honeymoon':
        return dest.price > 2000 && dest.activities.some(activity => 
          activity.toLowerCase().includes('spa') || 
          activity.toLowerCase().includes('cruise') ||
          activity.toLowerCase().includes('luxury')
        );
      case 'beach':
        return dest.activities.some(activity => 
          activity.toLowerCase().includes('beach') || 
          activity.toLowerCase().includes('water') ||
          activity.toLowerCase().includes('cruise')
        );
      case 'mountain':
        return dest.activities.some(activity => 
          activity.toLowerCase().includes('mountain') || 
          activity.toLowerCase().includes('trek') ||
          activity.toLowerCase().includes('hiking')
        );
      case 'budget':
        return dest.price < 1500;
      default:
        return false;
    }
  });

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="bg-gray-50 pt-24 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{category.title} Tours</h1>
          <p className="text-gray-600">{category.description}</p>
        </div>

        {categoryDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryDestinations.map((destination) => (
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
            <p className="text-gray-500">No tours found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;