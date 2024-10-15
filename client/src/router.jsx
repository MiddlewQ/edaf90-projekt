import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Posts from './Posts'
import About from './About'


const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                index: true,
            },
            {
                path: "about",
                Component: About,
            }, 
            {
                path: "posts",
                Component: Posts,
            },
        ]
    },
    {
        path: "*",
        element: <h1>Error 404: page not found!</h1>    
    },
    

]);

export default router;
