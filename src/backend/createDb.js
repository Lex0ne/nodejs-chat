import { MongoClient } from 'mongodb';
import { format } from 'util';

MongoClient.connect('mongodb://127.0.0.1:27017/chat', (err, db) => {
    if (err) throw err;
    let collection = db.collection('test_insert');
    collection.remove({}, (err, affected) => {
        if (err) throw err;
        collection.insert({a: 2}, (err, docs) => {
            const cursor = collection.find({a: 2});
            cursor.toArray((err, results) => {
                console.dir(results);
                // Let's close the db
                db.close();
            });
        });
    });
});