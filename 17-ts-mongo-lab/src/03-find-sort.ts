import { MongoClient } from 'mongodb';
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

    try {
        // get all posts
        // const posts = await db.collection(collection)
        //     .find<Post>({title:/react/i})
        //     .project({title: 1})
        //     .sort({title: -1})
        //     // .skip(1)
        //     // .limit(3)
        //     .toArray();

        const posts = await db.collection(collection)
            .aggregate<Post>(
                [{ "$match": { "title": { $regex: /react/i } } },
                {
                    $group: {
                        _id: { title: '$title' },
                        title: { $addToSet: '$title' },
                        count: { "$sum": 1 }
                    }
                }
                ])
            .toArray();

        posts.forEach(post => console.log(post));

    } catch (err) {
        console.error(err);
    } finally {
        con.close();
        return 'Finishing demo...';
    }
}

// run the demo
main().then(result => console.log(result));
