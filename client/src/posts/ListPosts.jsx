import { Link, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

function ListPosts() {
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
    const previewContent = content.slice(0, 100); 
    let continuation = "...";
    if (content.length < 100) {
        continuation = "";
    }
    return (
        <div className="post-preview">
            <ReactMarkdown className="post-preview small-text">
                {previewContent + continuation}
            </ReactMarkdown>
        </div>
    );
}

export default ListPosts;