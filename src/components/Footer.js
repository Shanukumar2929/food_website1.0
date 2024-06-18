import { useContext } from "react";
import UserContext from "../utils/UserContext";


import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} Shan Foodies. All rights reserved.</p>
                <div>
                    <a href="/privacy" className="text-gray-400 hover:text-white mx-2">
                        Privacy Policy
                    </a>
                    |
                    <a href="/terms" className="text-gray-400 hover:text-white mx-2">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
