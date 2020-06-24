import { PostRepository } from '../dao/repository';
import MOCK_POSTS from '../model/mock-posts';
import { Post } from '../model/post.model';
import { IdType } from '../shared/shared-types';

export const GOOGLE_BOOKS_API = 'https://www.googleapis.com/posts/v1/volumes?q=';

class PostService {
    private repo = new PostRepository();
    constructor(private apiUrl: string) {
        MOCK_POSTS.forEach(post => this.repo.add(post as Post)); 
    }

    async getAllPosts() {
        const resp = await fetch('http://localhost:9000/api/posts');
        const posts = await resp.json();
        return posts;
    }

    async createNewPost(post: Post) {
        const resp = await fetch('http://localhost:9000/api/posts', {
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post),
        });
        const created = await resp.json();
        return created;
    }

    async updatePost(post: Post) {
        const resp = await fetch(`http://localhost:9000/api/posts/${post.id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post),
        });
        const updated = await resp.json();
        return updated;
    }

    async deletePost(postId: IdType) {
        const resp = await fetch(`http://localhost:9000/api/posts/${postId}`, {
            method: 'DELETE',
            mode: 'cors'
        });
        const deleted = await resp.json();
        return deleted;
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

export default new PostService(GOOGLE_BOOKS_API);

