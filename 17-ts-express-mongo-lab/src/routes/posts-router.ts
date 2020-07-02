import { Router } from 'express';
import { readPostsFromFile, writePostsToFile } from '../utils/file-utils';
import { AppError } from '../model/errors';

const router = Router();

router.get('/', (req, res, next) =>
    readPostsFromFile(req.app.locals.postDbFile)
        .then(posts => res.json(posts))
        .catch(next));

router.get('/:id', async (req, res, next) => {
    try {
        const posts = await readPostsFromFile(req.app.locals.postDbFile);
        // NOTE: In a real implementation, we would likely rely on a database or
        // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
        // treat Date.now() as unique-enough for our purposes.
        const postId = req.params.id;
        const index = posts.findIndex(post => post.id === postId);
        if (index < 0) {
            next(new AppError(404, `Post with ID=${postId} not found.`));
            return;
        }
        const found = posts[index];
        res.json(found); //200 OK with deleted post in the body
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const posts = await readPostsFromFile(req.app.locals.postDbFile);
        const newPost = req.body;
        // NOTE: In a real implementation, we would likely rely on a database or
        // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
        // treat Date.now() as unique-enough for our purposes.
        newPost.id = Date.now() + '';
        posts.push(newPost);
        await writePostsToFile(req.app.locals.postDbFile, posts);
        res.status(201).location(`/api/posts/${newPost.id}`).json(newPost);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async function (req, res, next) {
    try {
        const posts = await readPostsFromFile(req.app.locals.postDbFile);
        // NOTE: In a real implementation, we would likely rely on a database or
        // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
        // treat Date.now() as unique-enough for our purposes.
        const postId = req.params.id;
        const post = req.body;
        if (postId !== post.id) {
            next(new AppError(400, `IDs in the URL and message body are different.`));
            return;
        }
        const index = posts.findIndex(c => c.id === postId);
        if (index < 0) {
            next(new AppError(404, `Post with ID=${postId} not found.`));
            return;
        }
        posts[index] = post;
        await writePostsToFile(req.app.locals.postDbFile, posts);
        res.json(post); //200 OK with post in the body
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async function (req, res, next) {
    try {
        const posts = await readPostsFromFile(req.app.locals.postDbFile);
        // NOTE: In a real implementation, we would likely rely on a database or
        // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
        // treat Date.now() as unique-enough for our purposes.
        const postId = req.params.id;
        const index = posts.findIndex(c => c.id === postId);
        if (index < 0) {
            next(new AppError(404, `Post with ID=${postId} not found.`));
            return;
        }
        const deleted = posts[index]
        posts.splice(index, 1);
        await writePostsToFile(req.app.locals.postDbFile, posts);
        res.json(deleted); //200 OK with deleted post in the body
    } catch (err) {
        next(err);
    }
});

export default router;
