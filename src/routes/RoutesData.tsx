import { lazy } from "react";
import { IRoute } from "../interfaces/Route.interface";

const Landing = lazy(() => import('../pages/Landing/Landing'));
const Signup = lazy(() => import('../pages/Signup/Signup'));

export const RoutesData:IRoute[] = [
    {
        title: "Landing",
        path: "/",
        element: <Landing />,
    },
    {
        title: "Signup",
        path: "/signup",
        element: <Signup />,
    },
    {
        title: "Landing",
        path: "/landing",
        element: <Landing />,
    },
    {
        title: "Page not found",
        path: "*",
        element: <Landing />,
    },
]