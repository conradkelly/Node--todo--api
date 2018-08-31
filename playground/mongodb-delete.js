//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    //deleteMany

     db.collection('Users').deleteMany({name: 'Conrad Kelly'}).then((result) => {
        console.log(result);
    }); 

    //deleteOne

   /*  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) => {
        console.log(results);
    });
 */
    //findOneAndDelete

    db.collection('Users').findOneAndDelete({
       _id: new ObjectID('5b89b5755e3487ea8d555a78')
    }).then((results) => {
        console.log(results);
    });

   // client.close();
});