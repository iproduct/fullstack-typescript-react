
import { Comment, IdType } from '../model/comments.model';

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

    async updateComment(comment: Comment) {
        const resp = await fetch(`http://localhost:9000/api/comments/${comment.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(comment),
        });
        const updated = await resp.json();
        return updated;
    }

    async deleteComment(commentId: IdType) {
        const resp = await fetch(`http://localhost:9000/api/comments/${commentId}`, {
            method: 'DELETE',
            mode: 'cors'
        });
        const deleted = await resp.json();
        return deleted;
    }

}

export default new CommentsApiClient(BASE_URL);