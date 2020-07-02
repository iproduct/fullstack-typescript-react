import { MongoClient } from 'mongodb';
import { Post } from './model/post.model';
import MOCK_USERS from './model/mock-users';
import { Indentifiable } from './model/shared-types';

const dbUrl = 'mongodb://localhost: 27017/'
const collection = 'posts';

async function insertBatch<T extends Indentifiable>(entities: T[]) {
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
        const insRes = await db.collection<T>(collection).insertMany(MOCK_USERS);
            
        if (insRes.result.ok && insRes.insertedCount === MOCK_USERS.length) {
            console.log(`Inserted new document with ID: ${JSON.stringify(insRes.insertedIds)}.`);
        }

        // get all posts
        const posts = await db.collection(collection).find<T>().toArray();
        posts.forEach(post => console.log(post));

    } catch (err) {
        console.error(err);
    } finally {
        con.close();
        return 'Finishing demo...';
    }
}

// run the demo
insertBatch(MOCK_USERS).then(result => console.log(result));
