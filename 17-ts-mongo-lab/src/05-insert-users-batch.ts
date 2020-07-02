import { MongoClient, OptionalId, WithId } from 'mongodb';
import { Post } from './model/post.model';
import MOCK_USERS from './model/mock-users';
import { Indentifiable } from './model/shared-types';
import { User, IUser } from './model/user.model';

const dbUrl = 'mongodb://localhost: 27017/'

async function insertBatch<T>(collection: string, entities: OptionalId<T>[]) {
    // connect to mongodb
    const con = await MongoClient.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    const db = con.db('myblog10');
    
    try {
        // clean db
        try {
        const dropRes = await db.collection(collection).drop();
        console.log(`Dropped collection "${collection}": ${dropRes}`);
        }catch(err){
            console.error(err);
        }

        // insert new post     
        const insRes = await db.collection<T>(collection).insertMany(entities);
            
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
insertBatch<User>('users', MOCK_USERS).then(result => console.log(result));
