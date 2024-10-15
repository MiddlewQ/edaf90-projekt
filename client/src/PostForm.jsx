import TextField from "./TextField";

function PostForm() {
    return (
        <div className="container col-12">
            <div className="row h-200 p-5 bg-light border rounded-3">
                <h2>Nytt inlägg</h2>
                <form>
                    <TextField />
                </form>
            </div>
        </div>
    )
}

export default PostForm;