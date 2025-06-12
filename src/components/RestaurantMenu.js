import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [itemCard, setItemCard] = useState(null);
    const { resId } = useParams();
    console.log("resId", resId);

    useEffect(()=> {
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[2].card.card.info);
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.carousel[0].dish.info.addons[0]);
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info);
        
        setItemCard(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info?.addons);

        setResInfo(json.data.cards[2].card.card.info);
    }

    return (resInfo === null)? <Shimmer /> :  (
        <div className="menu">
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.city}</h2>
            <p>{resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCard.map((item, index) => {
                    return (
                        <li key={item.groupId}>
                            {item.choices[0].name} - {item.choices[0].price/100} Rs
                        </li>
                    )
                })}
                {/* <li>{itemCard[0].choices[0].name}</li>
                <li>Burger</li>
                <li>Diet Coke</li>
                <li>Juice</li> */}
            </ul>
        </div>
        
    )
}
export default RestaurantMenu;