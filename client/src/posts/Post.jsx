import { v4 as uuidv4 } from 'uuid';

class Post {
    constructor(copy = null) {
        this.uuid = uuidv4();
        if (copy instanceof Post) {
            this.title = copy.title;
            this.content = copy.content;
        } else {
            this.title = "";
            this.content = "";
        }
    }

    setTitle(title) {
        this.title = title;
        return this;
    }

    setContent(content) {
        this.content = content;
        return this;
    }

}

export default Post;