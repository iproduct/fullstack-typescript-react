export const BASE_URL = 'http://localhost:9001/api/comments';

class CommentsApiClient{
    constructor(baseUrl){
        this.baseUrl = baseUrl;
    }

    async getAllComments() {
        const resp = await fetch(this.baseUrl);
        const comments = await resp.json();
        return comments;
    }

    async getCommentById(commentId) {
        const resp = await fetch(`${this.baseUrl}/${commentId}`);
        return await resp.json();
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

    async updateComment(comment) {
        const resp = await fetch(`${this.baseUrl}/${comment.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(comment)
        });
        const created = await resp.json();
        return created;
    }

    async deleteComment(commentId) {
        const resp = await fetch(`${this.baseUrl}/${commentId}`,
        {
            method: 'DELETE',
            mode: 'cors'
        });
        return await resp.json();
    }
}

export default new CommentsApiClient(BASE_URL);