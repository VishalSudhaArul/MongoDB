//test> use admin
//switched to db admin
admin> db.createUser({
user:"admin",
pwd:"admin",
roles:[{role:"root",db:"admin"}]
})

// mongosh --username admin -authenticationDatabase admin

db.createUser({
    user:"user1",
    pwd:"user1",
    roles:[{role:"read",db:"lpu26"}]
})

// exit
// mongosh --username user1 -authenticationDatabase lpu26



// exit
//mongosh --username admin -authenticationDatabase admin
// use lpu26
db.createUser({
    user:"user2",
    pwd:"user2",
    roles:[{role:"read",db:"lpu26"}]
})
//exit
//mongosh --username admin -authenticationDatabase admin
//use lpu26
// db.getUser()


//mongodb://user1:user1@localhost:27017/lpu26

//mongodb://admin:admin@localhost:27017/lpu26

// connection string
//mongosh "mongodb://user1:user@localhost:27017/lpu26a"

// mongosh "mongodb://user1:user1@localhost:27017/lpu26?authSource=lpu26"


// username: vishalsudhaarul23_db_user
// password: aaPHgBcACaUDyP5Q
