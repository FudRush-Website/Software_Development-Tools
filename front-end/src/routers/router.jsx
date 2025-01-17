import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
import OrderPage from "../pages/OrderPage.jsx";
import About from "../pages/About.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/restaurants/CartPage.jsx";
import Checkout from "../pages/restaurants/Checkout.jsx";

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
                element: <About/>
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