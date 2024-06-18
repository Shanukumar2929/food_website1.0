 import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { food_menu_api, restrauntList } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

 
 
 
 const RestaurantMenu = () => {
// how to read a dynamic URL params

    const params = useParams();// provide me id
   const {id} = params;// destructuring

    const [restaurant, setRestaurant] = useState({});

// useEffect(() => {
//    getRestaurantInfo();
// }, []);

// async function getRestaurantInfo() {
//    const data =  await fetch("https://www.swiggy.com/restaurants/sharma-ji-ki-chai-hazratganj-trilok-nath-road-lalbagh-lucknow-59260");
//    const json = await data.json();
//    console.log(json);
// setRestaurant(json.data);

 

// useEffect(() =>{
// getRestaurantInfo();
// },[]);

// async function getRestaurantInfo() {
//     setRestaurant(food_menu_api);
// };
// const restaurant = useRestaurant(id)


// const restaurants = useRestaurant(id);


//  const dispatch = useDispatch();// antoher hook

// const handleAddItem = () => {
//     dispatch(addItem("grapes"));// dispatch the action and pass the payload
// }

     const dispatch = useDispatch();
const addFoodItem = (item) => {
    dispatch(addItem(item));
};



return (!restaurant) ? <Shimmer/> :(
    <div className="bg-gray-300">
    <h1>Menu : {id}</h1>
    <ul >
  
        <div className="flex flex-wrap">
{food_menu_api.map((item) => (
<div>
        <div key={item?.id} > 
            <img src={item?.img} alt="" className="w-56  m-2 shadow-lg bg-yellow-500 rounded-lg"></img>

</div>
<li key={item?.id}>{item?.name}</li>
<li key={item?.id}>Price:-Rs{item?.price}</li>
        <li key={item?.id}>Rating : {item?.rate}☆ ☆ ☆ ☆ ☆</li>
<div>
    <button className="p-2 m-2 text-white bg-red-400" onClick={()=> addFoodItem(item)}>Add Item</button>
</div>
</div>
))}
        </div>
    </ul>
      
    
    </div>
)

};

export default RestaurantMenu;