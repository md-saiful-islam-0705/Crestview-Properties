import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../components/PropertyDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/LogIn/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/properties.json'),
            },
            {
                path: '/properties',
                element: <PrivateRoute><Properties /></PrivateRoute> ,
                loader: () => fetch('/propertiesNews.json'),
                
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/about',
                element: <About></About> ,
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute> ,
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><PropertyDetails /></PrivateRoute>,
                loader: () => fetch('/properties.json'),
            },
        ]
    }
]);

export default router;
