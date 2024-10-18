import { createBrowserRouter } from "react-router-dom";
import App from './App';
import About from './About'
import YouTubeVideo from "./YoutubeVideo";
import CreatePost from "./posts/CreatePost";
import ListPosts from './posts/ListPosts'
import ViewPost from "./posts/ViewPost";
import postsLoader from "./posts/postsLoader";

const router = createBrowserRouter([
    {
        Component: App,
        loader: postsLoader,
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
                Component: ListPosts,
                children: []
            },
            {
                path: "posts/new-post",
                Component: CreatePost
            },
            {
                path: "posts/:postId",
                Component: ViewPost
            },
        ]
    },
    {
        path: "*",
        element: <h1>Error 404: page not found!</h1>    
    },
    

]);

export default router;
