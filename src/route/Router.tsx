import React from "react";
import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import PostAdd from "../pages/PostAdd";

const Main = lazy(()=>import('../pages'));

const Router = () => {

    const routes = useRoutes([
        {
            path: "/",
            element:<Main/>
        },
        {
            path: "/add",
            element:<PostAdd/>
        }
    ])

    return routes
}

export default Router