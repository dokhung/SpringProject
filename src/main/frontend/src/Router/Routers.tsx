import {useRoutes} from "react-router-dom";
import {MainLayout} from "../Components/MainLayout/MainLayout";

export const Routers = () => {
    return useRoutes([
        {path:"/",element:<MainLayout/>}
    ])
}