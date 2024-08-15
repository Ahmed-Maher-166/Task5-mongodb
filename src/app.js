const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = "exam"
mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
       return  console.log('error has occured')
    }
    console.log('All Perf')

    const db = res1.db(dbname)
     db.collection('exams').insertOne({
            name : 'ahmed maher',
            degree : 30
        },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data)
        })
     db.collection ('exams').insertMany(
            [
             {
                 name: 'islam mohamoud',
                 degree: 29
             },
             {
                 name: 'maher ahmed',
                 degree: 20
             },
             {
                 name: 'dowlat ahmed',
                 degree: 25
             },
             {
                 name: 'abellatif maher',
                 degree: 29
             },
             {
                 name: 'abdo ezzat',
                 degree: 27
             },
             {
                 name: 'abdo eid',
                 degree: 24
             },
             {
                 name: 'hassan ahmed',
                 degree: 24
             },
             {
                 name: 'hassan hesham',
                 degree: 24
             },
             {
                 name: 'salah ahmed',
                 degree: 24
             }] , (error,data)=>{
                 if(error){
                     console.log('Unable to insert data')
                 }
                 console.log(data.insertedCount)
             } 
         )   
     db.collection('exams').findOne({_id:mongodb.ObjectId("66be26b845dd04125693f8ca")}
         , (error,user) =>{
            if(error){
                console.log('Unable to insert data')
            }
            console.log(user)
         })
     db.collection('exams').find({degree:24}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
     db.collection('exams').find({degree:24}).limit(4).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured')
        }
        console.log(users)
      })
     db.collection("exams").updateOne({_id:mongodb.ObjectId("66be26b845dd04125693f8ca")},{
        $set:{name: "Maher Ahmed" },
        // $set:{name: "Osama" , age: 30 },
        $inc: {degree: 23}
     }).
     then((data1)=>{console.log(data1.modifiedCount)})
     .catch((error)=> {console.log(error)}) 
    
     db.collection('exams').updateMany({},{
        $inc: {degree: 10}
    }).
    then((data1)=>{console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

     db.collection('exams').deleteOne({_id:mongodb.ObjectId("66be26b845dd04125693f8ca")})
         .then((data1)=>{console.log(data1.deletedCount)})
         .catch((error)=> {console.log(error)})

     db.collection('exams').deleteMany({degree:34})
        .then((data1)=>{console.log(data1.deletedCount)})
        .catch((error)=> {console.log(error)})
  
   //   db.collection('exams').deleteMany({})
   //        .then((data1)=>{console.log(data1.deletedCount)})
   //         .catch((error)=> {console.log(error)})
})
