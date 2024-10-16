import { Link, useNavigate, useOutletContext } from "react-router-dom";

function PostList() {
    const { posts } = useOutletContext();
    const navigate = useNavigate();
    
    return (
        <>
            <h2>Post base site</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.uuid}>
                        <Link className="link" to={`/posts/${post.uuid}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
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