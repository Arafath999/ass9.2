import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Home/Details";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Shared/Navbar/About/About";
import Career from "../Shared/Navbar/Career/Career";
import OfferDetails from "../Pages/Offer/OfferDetails/OfferDetails";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/service.json')
            },
            {
                path: '/offer/:id',
                element: <PrivateRoute><OfferDetails></OfferDetails></PrivateRoute>,
                loader: () => fetch('/offer.json')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/career',
                element: <PrivateRoute><Career></Career></PrivateRoute>
            }
        ]

    }
])
export default router