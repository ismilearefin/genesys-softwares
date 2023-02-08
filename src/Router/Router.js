import { createBrowserRouter } from "react-router-dom";
import Dashbord from "../components/Dashbord/Dashbord";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MainRoute from "../components/MainRoute/MainRoute";
import PasswordReset from "../components/PasswordReset/PasswordReset";
import SignUp from "../components/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path: '/resetpassword',
                element: <PasswordReset></PasswordReset>
            },
            {
                path: '/dashboard',
                element: <Dashbord></Dashbord>
            }
        ]
    }
])