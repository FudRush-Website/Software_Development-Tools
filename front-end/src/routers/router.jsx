import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/restaurants/CartPage.jsx";
import Checkout from "../pages/restaurants/Checkout.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import Contact from "../pages/Contact/Contact.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/orders",
                element: <OrderPage/>
            },
            {
                path: "/about",
                element: <AboutPage/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            },
            {
                path: "/checkout",
                element: <Checkout/>
            },
        ]
    }
]);

export default router;