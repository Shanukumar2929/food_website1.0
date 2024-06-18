

import React from 'react';

const About = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-6 text-gray-800">
                <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <img
                            src="https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?b=1&s=612x612&w=0&k=20&c=X6CkFGpSKhNZeiii8Pp2M_YrBdqs7tRaBytkGi48a0U="
                            alt="About Us"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg mb-4">
                            Welcome to our company! We are dedicated to providing top-notch service and ensuring our customers are satisfied with our products and services. Our team is made up of passionate and skilled professionals who strive to exceed your expectations.
                        </p>
                        <p className="text-lg mb-4">
                            Our mission is to deliver quality and value to our customers. We believe in fostering long-term relationships based on trust and integrity. Thank you for choosing us, and we look forward to serving you with excellence.
                        </p>
                        <p className="text-lg">
                            If you have any questions or need further information, feel free to contact us. We are here to help and ensure you have the best experience possible.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;




// import { Outlet } from "react-router-dom";
//  import  {Profile} from "./Profile";
// // import Profile from "./ProfileClass";
// import { Component } from "react";




// class About extends React.Component {
// constructor(props) {
//     super(props);
   
// console.log("constructor");
// }
//  componentDidMount() {
//     // best place to make an API Call
//     console.log("Parent - componentDidMount");
// }
// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p>
//                 This is the about section of RIBYA SINGH
//             </p>
//             <Profile name={"Shanu"}/>
//         </div>
//     );
// }

   
        //   Different from the lecture