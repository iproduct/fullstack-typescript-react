import { MongoClient, ObjectID } from 'mongodb';
import { Post } from './model/post.model';
import MOCK_POSTS from './model/posts';

const dbUrl = 'mongodb://localhost: 27017/';
const dbName = 'myblog10';
const collection = 'posts';

async function main() {
    // connect to mongodb
    const con = await MongoClient.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const db = con.db(dbName);

    // join posts with authors
    const postsWithAuthor = await db.collection<Post>(collection).aggregate([
        {
            $lookup:
            {
                from: collection,
                localField: 'authorId',
                foreignField: '_id',
                as: 'users'
            }
        }
    ]).toArray();

    // print results
    postsWithAuthor.forEach(post => console.log(post));
});