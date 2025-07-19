import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("ItemList Data:", items);

  return (
    <div className="p-4 m-auto my-4">
      {items && Array.isArray(items) && items.length > 0 ? (
        items.map((item, index) => (
          <div
            key={item?.card?.info?.id || index} // Fallback to index if id is missing
            className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between"
          >
            <div className="flex-1">
              <div className="mb-2">
                <h2 className="font-bold text-lg">
                  {index + 1} - {item?.card?.info?.name || "Unnamed Item"}
                </h2>
                <span className="text-green-600 font-semibold">
                  ₹
                  {(item?.card?.info?.price
                    ? item.card.info.price / 100
                    : item?.card?.info?.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : "N/A")}
                </span>
              </div>
              <p className="text-xs">
                {item?.card?.info?.description || "No description available"}
              </p>
            </div>
            <div className="relative w-24 h-24 ml-4">
              <img
                loading="lazy"
                src={item?.card?.info?.imageId ? CDN_URL + item.card.info.imageId : "https://via.placeholder.com/96"} // Fallback image
                alt={item?.card?.info?.name || "Item Image"}
                className="w-24 h-24 rounded-lg object-cover"
                onError={(e) => (e.target.src = "https://via.placeholder.com/96")} // Handle broken images
              />
              <button className="absolute cursor-pointer bottom-0 right-0 bg-black text-white text-sm px-2 py-1 rounded-md shadow-md">
                Add +
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No items available</p>
      )}
    </div>
  );
};

export default ItemList;