import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SWIGGY__NEW_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local state variables -super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard)

  console.log("Restaurants", listOfRestaurants);
  
  useEffect(() => {
    fetchData();
  }, []);

//   useEffect(() => {
//     console.log("Updated List of Restaurants", listOfRestaurants);
//   }, [listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch( SWIGGY__NEW_API );
    const json = await data.json();

    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log("Restaurants Data:", restaurants);
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  if (!onlineStatus) {
    return (
      <div className="body">
        <h1>Looks like you are offline. Please check your internet connection.</h1>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="flex justify-between mx-[100px]">
        <div className="search">
            <input type="text" className="m-4 p-2 border  rounded-xl border-solid border-black" value={searchText} onChange={(event)=>{
                setSearchText(event.target.value);
            }}/>
            <button 
                className="px-4 py-2 cursor-pointer bg-green-100 hover:bg-green-300 m-4 rounded-xl" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredList);
                }}
            >Search</button>
        </div>
        <button
          className="px-4 py-2 bg-yellow-100 hover:bg-yellow-200 m-4 rounded-xl cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link className='links' key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.isOpen}
            {restaurant.info.id ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)}
            </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
