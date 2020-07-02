import { MongoClient } from 'mongodb';
import { Post, IPost } from './model/post.model';
import MOCK_POSTS from './model/mock-posts';

const dbUrl = 'mongodb://localhost: 27017/'
const collection = 'posts';

async function main() {
    // connect to mongodb
    const con = await MongoClient.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    const db = con.db('myblog10');
    
    try {
        // clean db
        const dropRes = await db.collection(collection).drop();
        console.log(`Dropped collection "${collection}": ${dropRes}`);

        // insert new post     
        const insRes = await db.collection<IPost>(collection).insertMany(MOCK_POSTS);
            
        if (insRes.result.ok && insRes.insertedCount === MOCK_POSTS.length) {
            console.log(`Inserted new document with ID: ${JSON.stringify(insRes.insertedIds)}.`);
        }

        // get all posts
        const posts = await db.collection(collection).find<Post>().toArray();
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
