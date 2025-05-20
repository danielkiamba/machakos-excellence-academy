import { type Gallery } from "@shared/schema";

interface GalleryItemProps {
  item: Gallery;
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <img 
        src={item.imageUrl} 
        alt={item.title} 
        className="w-full h-64 object-cover transition duration-300 hover:scale-105" 
      />
      <div className="p-4 bg-white">
        <h3 className="font-poppins font-medium">{item.title}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
