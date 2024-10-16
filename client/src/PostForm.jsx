import TextField from "./TextField";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import Post from "./Post";
import { useNavigate, useOutletContext } from "react-router-dom";

function PostForm() {
    const { addPost } = useOutletContext();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    function handleKeyDown(e) {
        if (e.key === 'Tab') {
            e.preventDefault();
            const { selStart, selEnd} = e.target;

            SVGTextContentElement((prevContent) =>
                prevContent.substring(0, selStart) + "    " + prevContent.substring(selEnd)
            );

            setTimeout(() => {
                e.target.selStart = e.target.selEnd = selStart + 4;
            }, 0);
        }
    }

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handlePost(event) {
        setPostContent(event.target.value);
        const value = event.target.value;
        handleKeyDown(value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
    
        const post = new Post();
        post.setTitle(title);
        post.setPostContent(postContent);
    
        addPost(post);
        const response = await fetch('http://localhost:3000/posts/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post),
        });
    
        if(!response.ok) {
        throw new error("Failure to upload post");
        return;
        }
    
        const result = await response.json();

        navigate('/posts');
        setTitle("");
        setPostContent("");

    }

    return (
        <div className="container col-12">
            <div className="row h-200 p-5 bg-light border rounded-3">
                <h2>Nytt inlägg</h2>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title" className="mt-4">Titel</label>
                    <TextField
                        type="title"
                        id="title"
                        placeholder="Enter title"
                        onChange={handleTitle}
                    />
                    <label htmlFor="post" className="mt-4">Post</label>
                    <TextField
                    type="post"
                    id="post"
                    placeholder="Write your post in Markdown..."
                    onChange={handlePost}
                    onKeyDown={handleKeyDown}
                    isTextArea={true}
                    />
                    <input type="submit" className="mt-4 btn btn-primary"></input>
                    
                </div>
                </form>
                <div className="mt-5"> 
                    <h3>Preview</h3>
                    <ReactMarkdown>{`## ${title || ''}`}</ReactMarkdown>
                    <ReactMarkdown>{postContent}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default PostForm;