import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { food_menu_api, restrauntList } from "../config";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";





const FoodItem = ({name, img, price, rate}) => {
    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
            <img src = {img}/>
            <h2 className="font-bold text-xl"> {name}</h2>
            <h3>Price:- Rs{price}</h3>
            <h4>Rating: {rate}☆ ☆ ☆ ☆ ☆</h4>
        </div>
    );
};
   
export default FoodItem;