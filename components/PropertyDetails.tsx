import { FC } from 'react';
import { AreaChart, Bed, Bath, Car } from 'lucide-react';

interface PropertyDetailsProps {
  description: string;
  features: {
    icon: string;
    label: string;
    value: string;
  }[];
}

const iconMap: { [key: string]: React.ElementType } = {
  Area: AreaChart,
  Bed: Bed,
  Bath: Bath,
  Garage: Car,
};

const PropertyDetails: FC<PropertyDetailsProps> = ({ description, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-dark mb-4">Description</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      <h2 className="text-2xl font-bold text-dark mb-4">Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <div key={index} className="flex items-center space-x-2">
              <Icon className="w-6 h-6 text-primary-500" />
              <div>
                <p className="font-semibold">{feature.label}</p>
                <p className="text-gray-500">{feature.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyDetails;
