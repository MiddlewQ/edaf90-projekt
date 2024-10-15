class Post {

    constructor(copy = null) {
        if (copy instanceof Post) {
            this.title = copy.title;
            this.post = copy.post;
        } else {
            this.title = "";
            this.post = "";
        }
    }
}