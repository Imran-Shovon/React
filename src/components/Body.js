import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    //Local State variable - Super power variable
    const [ListOfRestaurants, SetListOfRestaurants] = useState(resList)
    //Normal JS variable
    let ListOfRestaurantsJS = [];
    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn" 
                    onClick={()=>{
                        
                        //Filter the restaurant list
                        const filteredList = ListOfRestaurants.filter(res => {
                             return res.data.avgRating > 4
                        })
                        console.log(filteredList);
                        SetListOfRestaurants(filteredList)
                    }
                        }>
                        Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    ListOfRestaurants.map((restaurant)=> (
                        <RestaurantCard key={restaurant.data.uuid} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;