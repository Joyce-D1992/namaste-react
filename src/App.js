import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import Grocery from "./components/Grocery";
import UserContext from "./utilities/UserContext";

const Grocery = lazy(()=> import("./components/Grocery"));

const About = lazy(() => import("./components/About"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        //Make an API call and send username and password
        const data = {
            name: "Joyce Dsouza"
        };
        setUserName(data.name);
    }, []);

    return (

        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider> 
        // //Default
        // <UserContext.Provider value={{loggedInUser : userName}}>
        //     {/** Joyce Dsouza */}
        //     <div className="app">
        //     <UserContext.Provider value={{loggedInUser : "Elon Musk"}}>    
        //     {/** Elon Musk */}
        //     <Header />
        //     </UserContext.Provider>
        //     <Outlet />
        // </div>
        // </UserContext.Provider> 
        // <div className="app">
        //     <UserContext.Provider value={{loggedInUser : userName}}>
        //     <Header />
        //     </UserContext.Provider> 
        //     <Outlet />
        // </div>
        


    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
            },
            {
                path : "/contact",
                element: <Contact />,
            },
            {
                path : "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>,
            },
            {
                path : "/restaurants/:resId",
                element: <RestaurantMenu />,
                
            },
        ],
        errorElement : <Error />,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} /> );