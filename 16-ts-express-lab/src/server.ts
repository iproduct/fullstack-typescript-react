/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import * as express from 'express';
import * as fsPromise from 'fs/promises';
import * as path from 'path';
import { Post } from './model/post.model';
import { nextTick } from 'process';

var app = express();

var POSTS_FILE = path.join(__dirname, '../posts.json');

app.set('port', (process.env.PORT || 9000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Additional middleware which will set headers that we need on each request.
app.use(function (req, res, next) {
  // Set permissive CORS header - this allows this server to be used only as
  // an API server in conjunction with something like webpack-dev-server.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader(`Access-Control-Allow-Methods`, `GET, POST, PUT, DELETE, OPTIONS`);
  res.setHeader('Access-Control-Max-Age', 3600); // 1 hour
  // Disable caching so we'll always get the latest posts.
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

const readPostsFromFile = async () =>
  JSON.parse((await fsPromise.readFile(POSTS_FILE)).toString()) as Post[];

const writePostsToFile = async (posts: Post[]) =>
  fsPromise.writeFile(POSTS_FILE, JSON.stringify(posts, null, 4));

app.get('/api/posts', (req, res, next) =>
  readPostsFromFile()
    .then(posts => res.json(posts))
    .catch(next));

app.get('/api/posts/:id', async (req, res, next) => {
  try {
    const posts = await readPostsFromFile();
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    const postId = req.params.id;
    const index = posts.findIndex(post => post.id === postId);
    if (index < 0) {
      res.status(404).json({ code: 404, message: `Post with ID=${postId} not found.` });
      return;
    }
    const found = posts[index];
    res.json(found); //200 OK with deleted post in the body
  } catch (err) {
    next(err);
  }
});

app.post('/api/posts', async (req, res, next) => {
  try {
    const posts = await readPostsFromFile();
    const newPost = req.body;
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    newPost.id = Date.now() + '';
    posts.push(newPost);
    await writePostsToFile(posts);
    res.status(201).location(`/api/posts/${newPost.id}`).json(newPost);
  } catch (err) {
    next(err);
  }
});

app.put('/api/posts/:id', async function (req, res, next) {
  try {
    const posts = await readPostsFromFile();
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    const postId = req.params.id;
    const post = req.body;
    if (postId !== post.id) {
      res.status(400).json({ code: 400, message: `IDs in the URL and message body are different.` });
      return;
    }
    const index = posts.findIndex(c => c.id === postId);
    if (index < 0) {
      res.status(404).json({ code: 404, message: `Post with ID=${postId} not found.` });
      return;
    }
    posts[index] = post;
    await writePostsToFile(posts);
    res.json(post); //200 OK with post in the body
  } catch (err) {
    next(err);
  }
});

app.delete('/api/posts/:id', async function (req, res, next) {
  try {
    const posts = await readPostsFromFile();
    // NOTE: In a real implementation, we would likely rely on a database or
    // some other approach (e.g. UUIDs) to ensure a globally unique id. We'll
    // treat Date.now() as unique-enough for our purposes.
    const postId = req.params.id;
    const index = posts.findIndex(c => c.id === postId);
    if (index < 0) {
      res.status(404).json({ code: 404, message: `Post with ID=${postId} not found.` });
      return;
    }
    const deleted = posts[index]
    posts.splice(index, 1);
    await writePostsToFile(posts);
    res.json(deleted); //200 OK with deleted post in the body
  } catch (err) {
    next(err);
  }
});


app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
