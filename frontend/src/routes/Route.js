import MainRoot from "../components/MainRoot";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Pages from "../pages/Pages";
// import Shop from "../pages/Add";
import Add from "../pages/Add";


export const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"blog",
                element:<Blog/>
            },
            {
                path:"pages",
                element:<Pages/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
        ]
    }
];
