import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
    
  const [resInfo, setResInfo] = useState(null);
  const [itemCards, setItemCards] = useState([]);
  const { resId } = useParams();
    // fetch Data from Swiggy API
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
    try {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

    //   console.log("Full Menu JSON", json);

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
    return [resInfo, itemCards];
}

export default useRestaurantMenu;