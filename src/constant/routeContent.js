import Card from "../pages/Card";
import Home from "../pages/Home";
import List from "../pages/List";

export const allRoute = [
    {
        path:"/",
        component:<Home />
    },
    {
        path:"/:id",
        component:<Home />
    },
    {
        path:"/list",
        component:<List />
    },
    {
        path:"/card",
        component:<Card />
    }
]