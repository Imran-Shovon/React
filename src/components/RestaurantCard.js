import { CDN_URL } from "../utils/constants";



const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Average Rating: {avgRating}</h4>
            <h4>Cost for Two: ₹{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;