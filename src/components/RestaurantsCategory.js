import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantsCategory = ({data}) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
    console.log("Clicked", showItems);
  }
  return (
    <>
      <div className="p-4 w-6/12 m-auto my-4 border shadow-lg border-gray-300 rounded-lg ">
         <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
          <span className="font-bold text-xl">{showItems ? "⬆️" : "⬇️"}</span>
         </div>
         {showItems ? <ItemList items={data.itemCards}/>  : ""}
      </div>
      
    </>

  )
}

export default RestaurantsCategory