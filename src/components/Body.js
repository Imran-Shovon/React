import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SWIGGY__NEW_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import {  Link } from "react-router-dom";

const Body = () => {
  //Local state variables -super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(event)=>{
                setSearchText(event.target.value);
            }}/>
            <button 
                className="search-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredList);
                }}
            >Search</button>
        </div>
        <button
          className="filter-btn"
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

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link className='links' key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
