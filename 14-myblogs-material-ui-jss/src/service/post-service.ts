import { Post } from '../model/post.model';
import { IdType } from '../shared/shared-types';
import { handleErrorStausCodes } from './service-utils';

export const API_BASE = 'http://localhost:9000/api';

class PostService {
    constructor(private apiUrl: string) {}

    async getAllPosts() {
        const resp = await fetch(`${this.apiUrl}/posts`);
        return handleErrorStausCodes<Post[]>(resp);
    }

    async getPostById(postId: IdType) {
        const resp = await fetch(`${this.apiUrl}/posts/${postId}`);
        return handleErrorStausCodes<Post>(resp);
    }

    async createNewPost(post: Post, authToken: string | undefined) {
        const resp = await fetch(`${this.apiUrl}/posts`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken || ''}`
        },
            body: JSON.stringify(post),
        });
        return handleErrorStausCodes<Post>(resp);
    }

    async updatePost(post: Post) {
        const resp = await fetch(`${this.apiUrl}/posts/${post._id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post),
        });
        return handleErrorStausCodes<Post>(resp);
    }

    async deletePost(postId: IdType) {
        const resp = await fetch(`${this.apiUrl}/posts/${postId}`, {
            method: 'DELETE',
            mode: 'cors'
        });
        return handleErrorStausCodes<Post>(resp);
    }

}



export default new PostService(API_BASE);
