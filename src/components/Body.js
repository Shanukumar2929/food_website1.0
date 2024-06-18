import { useState, useEffect } from "react";
import { restrauntList, food_menu_api } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = restrauntList;
        setAllRestaurants(data);
        setFilteredRestaurants(data);
    };

    const isOnline = useOnline();
    if (!isOnline) {
        return <h1>Offline, please check your internet connection?</h1>;
    }

    return allRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <>
            <div className="search-container p-5 bg-pink-100 my-5">
                <input
                    type="text"
                    className="focus:bg-green-200 p-2 m-2 w-full md:w-auto"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button
                    data-testid="search-btn"
                    className="p-2 m-2 bg-purple-900 hover:bg-slate-500 text-white rounded-md w-full md:w-auto"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start">
                {filteredRestaurants?.map((restaurant) => {
                    return (
                        <Link
                            to={"/restaurant/" + restaurant.info.id}
                            key={restaurant.info.id}
                            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
                        >
                            <RestaurantCard {...restaurant.info} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default Body;


// #####These are changes made to css#####


// Search Input and Button: Made the search input and button full width on small screens (w-full) and auto width on medium screens and above (md:w-auto).
// Restaurant Cards Container: Added justify - center on small screens and md: justify - start on medium and larger screens to align the cards properly.
// Restaurant Card Links: Adjusted the width of each link(w - full on small screens, md: w - 1 / 2 on medium screens, lg: w - 1 / 3 on large screens, and xl: w - 1 / 4 on extra - large screens) to ensure they are responsive and adjust their size according to the screen width.