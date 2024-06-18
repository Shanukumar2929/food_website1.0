import { useState, useContext } from "react";
import Logo from "../assets/logo3.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

function loggedInUser() {
    // API call to check authentication
    return false;
}

// Single Page Application

const Title = () => (
    <img data-testid="logo" className="h-20 md:h-28 p-2" src={Logo} alt="logo" />
);

// Header component for header section: Logo, Nav Items
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const { user } = useContext(UserContext); //object destructuring

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-pink-100 shadow-lg p-4">
            <Title />
            <div className="nav-items mt-4 md:mt-0">
                <ul className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0 py-2 md:py-0">
                    <Link to="/">
                        <li className="px-2">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="px-2">About</li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-2">Contact</li>
                    </Link>
                    <Link to="/Instamart">
                        <li className="px-2">Instamart</li>
                    </Link>
                    <Link to="/cart">
                        <li className="px-2 flex items-center" data-testid="cart">
                            <img
                                src="https://icons.iconarchive.com/icons/icons8/windows-8/256/Ecommerce-Shopping-Cart-icon.png"
                                alt="cart"
                                className="w-6 h-6 md:w-10 md:h-10"
                            />
                            <span className="ml-1">- {cartItems.length} items</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <span className="p-2 font-bold text-red-950">{user.name}</span>
                {isLoggedIn ? (
                    <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>
                ) : (
                    <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => setIsLoggedIn(true)}>
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
