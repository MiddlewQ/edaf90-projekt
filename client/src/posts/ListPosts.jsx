import { Link, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";

function ListPosts() {
    const posts2 = useLoaderData();
    const { posts } = useOutletContext();
    const navigate = useNavigate();
    
    return (
        <>
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

export default ListPosts;