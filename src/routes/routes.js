import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Dashboard from "../pages/Dashboard/Dashboard";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import ErrorPage from "../pages/shared/ErrorPage";
import ToolPurchase from "../pages/ToolPurchase/ToolPurchase";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/home/tool-purchase/:toolId',
                element: <PrivateRoute><ToolPurchase/></PrivateRoute>
            },
            {
                path: '/dashboard',
                element:<PrivateRoute><Dashboard/></PrivateRoute> ,
                children: [
                    {
                        path: 'my-orders',
                        element: <MyProfile/>
                    },
                    {
                        path: 'review',
                        element: <MyProfile/>
                    },
                    {
                        path: 'all-order',
                        element: <MyProfile/>
                    },
                    {
                        path: 'make-admin',
                        element: <MyProfile/>
                    },
                    {
                        path: 'manage-products',
                        element: <MyProfile/>
                    },
                    {
                        path: 'profile',
                        element: <MyProfile/>
                    },
                ]
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>
            }

        ]
        
    }
]);

