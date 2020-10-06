export const BASE_URL = 'http://localhost:9000/api/comments';

class CommentsApiClient{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async getAllComments() {
        const resp = await fetch(this.baseUrl);
        const comments = await resp.json();
        return comments;
    }

    async createComment(comment) {
        const resp = await fetch(this.baseUrl,{
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(comment)
        });
        const created = await resp.json();
        return created;
    }
}

export default new CommentsApiClient(BASE_URL);