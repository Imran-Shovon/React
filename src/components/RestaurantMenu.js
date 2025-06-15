import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [resInfo, itemCards] = useRestaurantMenu();

  
  if (!resInfo) return <Shimmer />;

  return (
    <div className="m-4 p-4 w-[98%] bg-gray-200 shadow-lg rounded-lg flex flex-col items-center">
      <h1 className="text-4xl font-bold">{resInfo.name}</h1>
      <h2 className="text-xl font-bold">{resInfo.city}</h2>
      <p className="text-lg ">
        {resInfo.cuisines?.join(", ")} - {resInfo.costForTwoMessage}
      </p>

      <h2 className="text-2xl font-bold mt-3 mb-5">Menu</h2>
      <ul className="flex flex-wrap items-center">
  {itemCards.length > 0 ? (
    itemCards.map((item, index) => (
      <li key={`${item.id}-${index}`}  className="my-2 text-lg p-2 border-b border-gray-300 w-full md:w-1/2 lg:w-1/3">
        {index+1}. {item.name} - ₹{(item.price || item.defaultPrice || 0) / 100}
      </li>
    ))
  ) : (
    <li>No menu items available</li>
  )}
</ul>

    </div>
  );
};

export default RestaurantMenu;
