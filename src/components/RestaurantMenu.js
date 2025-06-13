import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [itemCards, setItemCards] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();

      console.log("Full Menu JSON", json);

      // Set restaurant info
      const restaurantDetails = json?.data?.cards?.find(
        (card) => card?.card?.card?.info
      )?.card?.card?.info;

      setResInfo(restaurantDetails);

      // Extract menu items from REGULAR section
      const regularCards =
        json?.data?.cards?.find(
          (card) => card?.groupedCard?.cardGroupMap?.REGULAR
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const extractedItems = [];

      regularCards.forEach((section) => {
        const itemArray = section?.card?.card?.itemCards;
        if (itemArray && Array.isArray(itemArray)) {
          itemArray.forEach((item) => {
            if (item?.card?.info) {
              extractedItems.push(item.card.info);
            }
          });
        }
      });

      setItemCards(extractedItems);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

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
