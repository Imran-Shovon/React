import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const [resInfo, itemCards] = useRestaurantMenu();

  
  if (!resInfo) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>{resInfo.city}</h2>
      <p>
        {resInfo.cuisines?.join(", ")} - {resInfo.costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
  {itemCards.length > 0 ? (
    itemCards.map((item, index) => (
      <li key={`${item.id}-${index}`}>
        {item.name} - ₹{(item.price || item.defaultPrice || 0) / 100}
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
