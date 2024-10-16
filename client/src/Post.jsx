import { v4 as uuidv4 } from 'uuid';

class Post {
    constructor(copy = null) {
        this.uuid = uuidv4();
        if (copy instanceof Post) {
            this.title = copy.title;
            this.postContent = copy.postContent;
        } else {
            this.title = "";
            this.postContent = "";
        }
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setPostContent(postContent) {
        this.postContent = postContent;
        return this;
    }

    toJSON() {
        return {
            uuid: this.uuid,
            title: this.title,
            postContent: this.postContent,
        }
    }
}

export default Post;