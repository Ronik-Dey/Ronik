import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface TourCategoryProps {
  icon: ReactNode;
  title: string;
  count: number;
}

const TourCategory = ({ icon, title, count }: TourCategoryProps) => {
  return (
    <Link 
      to={`/category/${title?.toLowerCase() ?? ''}`}
      className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-500">{count} tours</p>
    </Link>
  );
};

export default TourCategory;