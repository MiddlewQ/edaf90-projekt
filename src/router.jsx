import { createBrowserRouter } from "react-router-dom";
import App from './App';


const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                index: true,
                element: <p>Welcome to my own salad bar</p>
            }, 
        ]
    },
    {
        path: "*",
        element: <h1>page not found!</h1>    
    },

]);

export default router;
