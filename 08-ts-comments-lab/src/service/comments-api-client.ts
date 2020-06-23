
import { Comment } from '../model/comments.model';

export const BASE_URL = 'http://localhost:9000/api/comments';

class CommentsApiClient {
    constructor(private baseUrl: string) {
    }

    async getAllComments() {
        const resp = await fetch('http://localhost:9000/api/comments');
        const comments = await resp.json();
        return comments;
    }

    async createNewComment(comment: Comment) {
        const resp = await fetch('http://localhost:9000/api/comments', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(comment),
        });
        const created = await resp.json();
        return created;
    }

}

export default new CommentsApiClient(BASE_URL);