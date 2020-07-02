import { MongoClient } from 'mongodb';
import { Post } from './model/post.model';

const dbUrl = 'mongodb://localhost: 27017/'

MongoClient.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true}, async (err, con) => {
    if (err) throw err;
    const db = con.db('myblog10');
    const post1 = {
        title: "Learning React",
        text: "A Hands-On Guide to Building Web Applications Using React and Redux, 2nd Edition",
        authorId: "1",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51AFwrzNmdL._SX386_BO1,204,203,200_.jpg",
        keywords: [
            "react",
            "javascript",
            "redux",
            "hands-on"
        ]
    }
    try {
        // insert new post     
        const res = await db.collection('posts').insertOne(post1);
        if (res.result.ok && res.insertedCount === 1) {
            console.log(`Inserted new document with ID: ${res.insertedId}.`);
        }

        // get all posts
        const posts = await db.collection('posts').find<Post>().toArray();
        posts.forEach(post => console.log(post));

    } catch (err) {
        console.error(err);
    } finally {
        console.log('Finishing demo...');
        con.close();
    }
})

