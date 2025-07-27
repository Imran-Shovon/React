import { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
// import About from "./components/About";
import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";

//Chunking
//Code Spliting
//Dynamic Bundling
//Lazy Loading
//Ondemand Loading
//Dynamic Import

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayOut = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(
        () => {
            const data = {
                name: "Shovon",
            }
            setUserName(data.name);
        }, [])



    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayOut />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
        ],
        errorElement: < Error />,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);