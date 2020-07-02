import { MongoClient, ObjectID } from 'mongodb';
import { Post, IPost } from './model/post.model';
import MOCK_POSTS from './model/mock-posts';

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
    const postId = '5efd94a7fc08d180086f8302';
    try {
        // update by _id
        var myquery = { _id: new ObjectID(postId) };
        var newvalues = { $set: {title: "Learning React - Third Edition", categories: ['frontend']} };
        const updateRes = await db.collection(collection)
            .updateOne(myquery, newvalues)
        // console.log(updateRes);
        if (updateRes.result.ok && updateRes.modifiedCount === 1) {
            console.log(`Document successfully updated document with ID: ${postId}.`);
        }

        // get all posts
        const posts = await db.collection(collection)
            .find<IPost>({title:/react/i})
            .sort({title: 1})
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
