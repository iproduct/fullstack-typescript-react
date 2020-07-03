import { AppError } from '../model/errors';
import { Post } from '../model/post.model';
import { IdType } from '../shared/shared-types';

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

    async createNewPost(post: Post) {
        const resp = await fetch(`${this.apiUrl}/posts`, {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
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

    // async loadPosts(searchTerms: string[]): Promise<Post[]> {
    //     console.log(searchTerms);
    //     const searchText = searchTerms.join(' ');
    //     const result = await fetch(GOOGLE_BOOKS_API + encodeURIComponent(searchText));
    //     const postsFound = await result.json() as RootObject;
    //     // console.log(postsFound);
    //     return postsFound.items.map(item => new Post(
    //         item.id,
    //         item.volumeInfo.title, 
    //         item.volumeInfo.authors,
    //         item.volumeInfo.imageLinks?.thumbnail,
    //         item.volumeInfo.subtitle,
    //         item.volumeInfo.categories,
    //         searchTerms,
    //         item.volumeInfo.description
    //     ));
    // }
}

async function  handleErrorStausCodes<T>(resp: Response): Promise<T> {
    if(resp.status < 400) {
        const entity = await resp.json();
        return entity as T;
    } else {
        const err = await resp.json() as AppError;
        throw err;
    }
}

export default new PostService(API_BASE);
