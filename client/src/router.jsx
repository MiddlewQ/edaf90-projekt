import { createBrowserRouter } from "react-router-dom";
import App from './App';
import PostList from './PostList'
import About from './About'
import YouTubeVideo from "./YoutubeVideo";
import PostForm from "./PostForm";
import PostDetail from "./PostDetail";


const router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                index: true,
                Component: YouTubeVideo,
            },
            {
                path: "about",
                Component: About,
            }, 
            {
                path: "posts",
                Component: PostList,
                children: []
            },
            {
                path: "posts/new-post",
                Component: PostForm
            },
            {
                path: "posts/:postId",
                Component: PostDetail
            },
        ]
    },
    {
        path: "*",
        element: <h1>Error 404: page not found!</h1>    
    },
    

]);

export default router;
