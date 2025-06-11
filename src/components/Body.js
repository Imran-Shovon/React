import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY__NEW_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

//   useEffect(() => {
//     console.log("Updated List of Restaurants", listOfRestaurants);
//   }, [listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch( SWIGGY__NEW_API );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      console.log("Restaurants Data:", restaurants);
    setListOfRestaurants(restaurants);
  };

  //Conditional rendering
//   if (listOfRestaurants.length === 0) {
//     return (
//       <div className="loading">
//         <Shimmer />
//       </div>
//     );
//   }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
