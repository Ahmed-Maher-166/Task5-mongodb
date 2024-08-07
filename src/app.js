const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbname = 'proj-1';

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, res1) => {
    if (error) {
        return console.log('Error has occurred:', error);
    }

    const db = res1.db(dbname);

    // db.collection('users').insertOne({
    //     name: 'Ahmed',
    //     age: 20
    // }, (error, data) => {
    //     if (error) {
    //         return console.log("Unable to insert data:", error);
    //     }
    //     console.log("Inserted document ID:", data.insertedId);
    // });

    // db.collection('users').insertOne({
    //     name: 'Abdellatif maher',
    //     age: 25
    // }, (error, data) => {
    //     if (error) {
    //         return console.log("Unable to insert data:", error);
    //     }
    //     console.log("Inserted document ID:", data.insertedId);
    // });

    // db.collection('users').insertMany([
    //     { name: 'ahmed wael', age: 27 },
    //     { name: 'reem', age: 27 },
    //     { name: 'tasneem', age: 27 },
    //     { name: 'ali', age: 27 },
    //     { name: 'adelrahamn', age: 27 },
    //     { name: 'roqua', age: 21 },
    //     { name: 'fatma', age: 19 },
    //     { name: 'alaa', age: 23 },
    //     { name: 'belal', age: 19 },
    //     { name: 'Hassan', age: 23 }
    // ], (error, data) => {
    //     if (error) {
    //         return console.log("Unable to insert data:", error);
    //     }
    //     console.log("Number of documents inserted:", data.insertedCount);
    // });

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Error has occurred:', error);
    //     }
    //     console.log('Users aged 27:', users);
    // });

    // db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Error has occurred:', error);
    //     }
    //     console.log('First 3 users aged 27:', users);
    // });

    //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b370d009d403ff67acb33f")},{
    //     $set:{name: "AHMED MAHER" },
    //     $inc: {age: 2}
    //  }).
    //  then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})

    //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b370d009d403ff67acb340")},{
    //     $set:{name: "ABDeElatif maher" },
    //     $inc: {age: 2}
    //  }).
    //  then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})

    //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b370d009d403ff67acb341")},{
    //     $set:{name: "fatma  maher" },
    //     $inc: {age: 2}
    //  }).
    //  then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})
    //  db.collection("users").updateOne({_id:mongodb.ObjectId("66b370d009d403ff67acb342")},{
    //     $set:{name: "maher ahmed" },
    //     $inc: {age: 2}
    //  }).
    //  then((data1)=>{console.log(data1.modifiedCount)})
    //  .catch((error)=> {console.log(error)})
    // db.collection('users').updateMany({}, {
    //     $inc:{age:10 }}).
    //     then(data1 => {    console.log('Number of documents updated:', data1.modifiedCount);})
    //     .catch(error => {
    //     console.log('Update error:', error);
    // });

    db.collection('users').deleteMany({ age: 37 })
    .then(data1 => {
        console.log('Number of documents deleted:', data1.deletedCount);
    })
    .catch(error => {
        console.log('Delete error:', error);
    });
});
