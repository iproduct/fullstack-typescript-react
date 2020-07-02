import { MongoClient, ObjectID } from 'mongodb';
import { Post } from './model/post.model';

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
        // join posts with authors
        const postsWithAuthor = await db.collection<Post>(collection).aggregate([
            {
                $lookup:
                {
                    from: 'users',
                    localField: 'authorId',
                    foreignField: '_id',
                    as: 'users'
                }
            }
        ]).toArray();

        // print results
        postsWithAuthor.forEach(post => console.log(post));
    } catch (err) {
        console.error(err);
    } finally {
        con.close();
        return 'Finishing demo...';
    }
}

// run the demo
main().then(result => console.log(result));