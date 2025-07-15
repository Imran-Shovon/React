import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        <div className="m-4 p-4 w-[300px] h-[460px] bg-gray-200  shadow-lg rounded-lg hover:bg-gray-400 hover:text-white">
            <img 
            className="rounded-lg h-[250px] w-full object-cover"
            src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-0.5 text-lg mt-1">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Average Rating: {avgRating}</h4>
            <h4>Cost for Two: ₹{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

//Higher order component
//Input - RestaurentCard ==> RestaurantCardPromoted

export const WithPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-4 p-2 rounded-xl">Promoted</label>
                <RestaurantCard {...props}/> 
            </div>
        )
    }
}


export default RestaurantCard;