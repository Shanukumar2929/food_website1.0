import React, {lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {Profile} from "./components/Profile";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestrauntMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
import Shimmer from "./components/Shimmer";
// import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";


// Chunking
// code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic import








// import * as XYZ from "./components/Header";


// import {Title, Header}from "./components/Header.js" 

// import * as Obj from "./components/Header"

// import { Title } from "./components/Header.js"
/**
   * Header
   *  -logo
   *  -Nav Items(right side)
   *  -Cart
   * Body
   *  -searchbar
   *  -restaurant list
   *  -restaurant card
   *    -Image
   *    -Name
   *    -Rating
   *    -Cusiness
   * Footer
   *  -links
   *  -Copyright
   */




// Composing Components

// Config driven UI






// const burgerKing = {
//     name: "Burger King",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/eqaon8guufklmil7ayhr",
//     cusines: ["Burger", "Americans"],
//     rating: "4.2"
// };



// props properties
const Instamart = lazy(() => import("./components/Instamart"));
// on demand loading -> upon render -> suspend loading


const AppLayout = () => {
    const [user, setUser] = useState({
        name:"Shanu Kumar",
        email:"shanukumar2929@gmail.com",
    });
    return (
<Provider store = {store}>
       <UserContext.Provider value={{
        user:user,
       }}>
            <Header />
            <Outlet />
            <Footer />
       </UserContext.Provider>

        </Provider>     
       
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error />,
        children : [
            {
path: "/",
element: <Body/ >,
            },
            {
                path:"/about",
                element: <About/>,
                children:[{
                    path:"profile",//localhost:1244/about/profile
                    element:<Profile/>,
                },
                ]
            },
            {
                path:"/contact",
                element: <Contact/>,
            },
            {
path: "/restaurant/:id",
element: <RestaurantMenu/>,
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer/>}>
                    <Instamart />
                </Suspense>
                ),
            },
            {
                path: "/cart",
                element:
                   <Cart/>

            },
        ],
    },
]);




const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
// root.render(heading2);

// passing a react component
root.render(<RouterProvider router={appRouter} />);