import { useParams, useOutletContext} from "react-router-dom";
import ReactMarkdown from 'react-markdown';

function ViewPost() {
    const { postId } = useParams();
    const { posts } = useOutletContext();
    const post = posts.find(p => p.uuid === postId);

    if (!post) {
        return <h2>Post not found</h2>
    }
    
    return (
        <div className="container col-12">
            <div className="row h-200 p-5 bg-light border rounded">
                <h2>{post.title}</h2>
                <ReactMarkdown>{post.postContent}</ReactMarkdown>
            </div>
        </div>
    );
}

export default ViewPost;
