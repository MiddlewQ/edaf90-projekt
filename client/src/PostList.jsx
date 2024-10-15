import { useNavigate } from "react-router-dom";

function PostList() {

    const navigate = useNavigate()
    return (
        <>
            <h2>Post base site</h2>
            <button 
                type="button" 
                className='mt-4 btn btn-success' 
                onClick={() => navigate('/posts/new-post')}>
                New Post
            </button>
        </>
    );
}

export default PostList;
