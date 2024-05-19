
interface House {
  imageURL: string;
  price: number;
  discount?: number;
  name: string;
  capacity: number;
  sold: number;
  tagNames: { [key: string]: string }; // Custom tag names
  tags: { [key: string]: boolean } | undefined;
}

const HouseCard: React.FC<House> = ({
  imageURL,
  price,
  discount,
  name,
  capacity,
  sold,
  tagNames,
  tags,
}) => {
  return (
    <div className="bg-white text-gray-800 rounded-lg shadow-md p-4 mb-4 relative">
      <div className="w-72 h-56 relative">
        <img src={imageURL} alt={name} className="w-72 h-56 rounded-lg" />
        <div className="absolute top-1 right-1">
          {discount && (
            <div
              dir="rtl"
              className="bg-yellow-500 text-center text-sm text-white rounded-full px-3 py-1 mb-2"
            >
              {discount}% تخفیف
            </div>
          )}
          {tags &&
            Object.entries(tags).map(([tag, value]) => {
              if (!value) return null;
              return (
                <div
                  key={tag}
                  className="bg-green-500 text-center text-white text-sm rounded-full px-3 py-1 mb-2"
                >
                  {tagNames[tag]}
                </div>
              );
            })}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg">{`$${price}`}</span>
          <span>{`${sold}/${capacity}`}</span>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
