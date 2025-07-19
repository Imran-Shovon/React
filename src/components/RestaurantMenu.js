import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, itemCards, categories] = useRestaurantMenu();
  const {name, cuisines, costForTwoMessage} = resInfo || {};
  // console.log("Restaurant Menu Data:", categories);
  
  if (!resInfo) return <Shimmer />;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p  className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* < RestaurantsCategory /> */}
      {/* <h2 className="font-bold text-xl my-4">{categories}</h2>
      {categories && Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantsCategory key={index} data={category?.card?.card} />
        ))
      ) : (
        <p>No categories available</p>
      )} */}

      {Array.isArray(categories) && categories.length > 0 ? (
        categories.map((category, index) => (
          <RestaurantsCategory key={index} data={category?.card?.card} />
        ))
      ) : (
        <p className="text-gray-500 mt-4">No categories available</p>
      )}

    </div>
  );
};

export default RestaurantMenu;
