import { IMG_CDN_URL } from "../config";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
    const { user } = useContext(UserContext);
    return (
        <div className="w-full sm:w-56 p-4 m-2 shadow-lg bg-pink-100 flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src={IMG_CDN_URL + cloudinaryImageId} className="w-full h-32 object-cover mb-2" />
            <h2 className="font-bold text-lg sm:text-xl mb-1">{name}</h2>
            <h3 className="text-sm sm:text-base mb-1">{cuisines.join(", ")}</h3>
            <h4 className="text-sm sm:text-base mb-2">{avgRating} stars★</h4>
            <h5 className="font-bold text-sm sm:text-base">{user.name}</h5>
        </div>
    );
};

export default RestaurantCard;



// Container Width: Changed w-56 to w-full sm:w-56 to make the card full width on small screens and fixed width on larger screens.
// Padding: Increased padding to p - 4 for better spacing on all screen sizes.
// Flexbox Layout: Added flex flex - col items - center sm: items - start to center the content on small screens and align it to the start on larger screens.
// Text Centering: Added text - center sm: text - left to center the text on small screens and align it to the left on larger screens.
// Image Styling: Ensured the image covers its container with w - full h - 32 object - cover mb - 2 to make it responsive and maintain aspect ratio.