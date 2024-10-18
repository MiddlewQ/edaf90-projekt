import { Link, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

function ListPosts() {
    const posts2 = useLoaderData();
    const { posts } = useOutletContext();
    const navigate = useNavigate();

    return (
        <>
            <div className="post-list">
                {posts.map((post) => (
                    <Link key={post.uuid} to={`/posts/${post.uuid}`} className="post-link">
                        <div className="card mt-2">
                            <div className="card-header">
                            <h5 className="card-title">{post.title}</h5>
                            </div>
                            <div className="card-body">
                                <PostPreview content = {post.content}/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <button 
                type="button" 
                className="mt-4 btn btn-success" 
                onClick={() => navigate('/posts/new-post')}>
                New Post
            </button>
        </>
    );
}

function PostPreview({ content }) {
    const previewContent = content.slice(0, 100); // Adjust this to only take visible characters if needed

    return (
        <div className="post-preview">
            {/* Apply the "small-text" class to style it */}
            <ReactMarkdown className="post-preview small-text">
                {previewContent}
            </ReactMarkdown>
        </div>
    );
}

export default ListPosts;