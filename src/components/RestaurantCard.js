const styleCard = {
    backgroundColor: "lightgray"
}


const RestaurantCard = (props) => {
    const { resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime} = resData?.data;
    return (
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
            src={cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Average Rating: {avgRating}</h4>
            <h4>Cost for Two: ₹{costForTwo}</h4>
            <h4>Delivery Time: {deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;