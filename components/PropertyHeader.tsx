import { FC } from 'react';
import { Home } from 'lucide-react';

interface PropertyHeaderProps {
  title: string;
  price: string;
  location: string;
}

const PropertyHeader: FC<PropertyHeaderProps> = ({ title, price, location }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-dark mb-2">{title}</h1>
          <p className="text-gray-500 flex items-center">
            <Home className="w-4 h-4 mr-2" />
            {location}
          </p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary-500">LKR {price}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyHeader;
