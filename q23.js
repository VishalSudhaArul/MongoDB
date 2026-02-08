//create folder mongo-replica
//create folders - usa, uk, india 
// inside mongo-replica folder

//mongod -replSet rs1 --dbpath "D:\mongo-replica\usa" --port 27018
//mongod -replSet rs1 --dbpath "D:\mongo-replica\uk" --port 27019
//mongod -replSet rs1 --dbpath "D:\mongo-replica\india" --port 27020

//mongosh --port 27018

rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
})

// rs.config()
// rs.status()

// new tab

// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1.27020/?replicaSet=rs1"
//use my database
//show dbs

// db.users.insertOne({name:"Sumanth",age:21})
//show collections
//db.users.find()


rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
})




//new tab
//mongod -replSet rs1 --dbpath "D:\mongo-replica2\data1" --port 27018

//new tab
//mongod -replSet rs1 --dbpath "D:\mongo-replica2\data2" --port 27019

//new tab
//mongod -replSet rs1 --dbpath "D:\mongo-replica2\data3" --port 27020


// new tab
//--port 27018
rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"127.0.0.1:27018"},
        {_id:1,host:"127.0.0.1:27019"},
        {_id:2,host:"127.0.0.1:27020"}
    ]
})
// rs.config()
// rs.status()

// new tab
// mongosh "mongodb://127.0.0.1:27018,127.0.0.1:27019,127.0.0.1.27020/?replicaSet=rs1"
// show dbs
// use amazon
//insert data

// new tab
// --port 27019
// show dbs
// use amazon

// new tab
// --port 27020
// show dbs
// use amazon

// db.shutdown


//use hdfc
//db.customers.insertOne({_id:"c1",name:"vichu",balance:1000})
//db.customers.insertOne({_id:"c2",name:"madhan",balance:1000})
//db.customers.find()


//const session=db.getMngo().startSession()

//session.startTransaction()

//var custCollection=session.getDatabase("hdfcbank").customers

db.custCollection.updateOne({_id:"c1"},{$inc:{balance:-100}})
db.custCollection.updateOne({_id:"c1"},{$inc:{balance:-100}})
db.custCollection.updateOne({_id:"c1"},{$inc:{balance:-100}})

db.custCollection.updateOne({_id:"c2"},{$inc:{balance:100}})

session.commitTransaction()

db.customers.find()

session.startTransaction()

session.endSession()
