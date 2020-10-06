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
}

export default new CommentsApiClient(BASE_URL);