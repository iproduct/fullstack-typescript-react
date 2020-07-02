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
import { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import postsRouter from './routes/posts-router';

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

app.use('/api/posts', postsRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    next(err);
    return;
  }
  console.error(err);
  res.status = err['status'] || 500;
  res.json({
    status: res.status,
    message: err.message,
    error: req.app.get('env') === 'production' ? '' : err
  });
});

app.locals.postDbFile = POSTS_FILE;

app.listen(app.get('port'), function () {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
