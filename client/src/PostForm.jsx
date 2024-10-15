import TextField from "./TextField";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

function PostForm() {
    const [title, setTitle] = useState();
    const [post, setPost] = useState();

    function handleTitle(event) {
        setTitle(event.target.value);
    }

    function handlePost(event) {
        setPost(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(title)
        console.log(post)
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
                    isTextArea={true}
                    />
                    <input type="submit" className="mt-4 btn btn-primary"></input>
                    
                </div>
                </form>
                <div className="mt-5"> 
                    <h3>Preview</h3>
                    <ReactMarkdown>{`## ${title || ''}`}</ReactMarkdown>
                    <ReactMarkdown>{post}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default PostForm;