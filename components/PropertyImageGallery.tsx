import { FC } from 'react';
import Image from 'next/image';

interface PropertyImageGalleryProps {
  images: string[];
}

const PropertyImageGallery: FC<PropertyImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-1 md:col-span-2">
        <Image
          src={images[0]}
          alt="Property Image 1"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
      {images.slice(1).map((image, index) => (
        <div key={index} className="col-span-1">
          <Image
            src={image}
            alt={`Property Image ${index + 2}`}
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default PropertyImageGallery;
