// shard - a small piece or port 

// create folder, inside 6 folders
// start config server on seperate tabs of cmp
// mongo -configsvr -port 27018 - replSet cf -- dbpath d:\dshards\conf
// mongo -configsvr -port 27019 - replSet cf -- dbpath d:\dshards\confr

//open new tab and initiate replica set for shard1 servers
// mongosh --port 27022


// create folder dbshards
// create folders conf, confr, s1, s1r, s2, s2r
// inside dbshards
// Note: These 6 folders represent Servers 
// located in 6 different locations or countries

// mongod --configsvr -replSet cf --dbpath "d:\dbshards\conf" --port 27018
// mongod --configsvr -replSet cf --dbpath "d:\dbshards\confr" --port 27019
// new tab
// mongosh --port 27018

rs.initiate({
    _id:"cf",
    members:[{_id:0, host: "127.0.0.1:27018"},
             {_id:1, host: "127.0.0.1:27019"},
    ],
});

rs.config()
rs.status()




// new tab

// mongod --shardsvr -replSet s1 --dbpath "d:\dbshards\s1" --port 27020
// mongod --shardsvr -replSet s1 --dbpath "d:\dbshards\s1r" --port 27021
// new tab
// mongosh -- port 27020
rs.initiate({
    _id: "s1",
    members: [
        { _id: 0, host: "127.0.0.1:27020"},
        { _id: 1, host: "127.0.0.1:27021"},
    ],
});

rs.config()

rs.status()



// new tab 

// mongod --shardsvr -replSet s2 --dbpath "d:\dbshards\s2" --port 27022
// mongod --shardsvr -replSet s2 --dbpath "d:\dbshards\s2r" --port 27023
// new tab
// mongosh --port 27022
rs.initiate({
    _id: "s2",
    members: [
        {_id: 0, host: "127.0.0.1:27022"},
        {_id: 1, host: "127.0.0.1:27023"},
    ],
});

rs.config()

rs.status()



//new tab

// mongos --configdb cf/127.0.0.1:27018,27.0.0.1:27019 --port 27050
// new tab
// mongosh --port 27050 
sh.addShard("s1/127.0.0.1:27020,127.0.0.1:27021")
sh.addShard("s2/127.0.0.1:27022,127.0.0.1:27023")

sh.status()

// use icici 
sh.enableSharding("icici")
sh.shardCollection("icici.customers",{_id:1})
sh.getShardedDataDistribution()
show collections
db.coustomers.find()

db.customers.insertOne({_id:1,name:"customer1"})
sh.getShardedDataDistribution()

// new tab
// mongosh --port 27020
// show dbs

// new tab
//mongosh --port 27022
// show dbs
// use icici
// db.customers.find()

//new tab
//mongosh --port 27023
// show dbs
// use icici
// db.getMongo().setReadPref("secondary")
// db.customers.find()


// in --port 27050
for(let i=2;i<=1000;i++) {
    db.customers.insertOne({
        _id:i,
        name:"customer"+i
    })
}

// use config

db.settings.updateOne(
    {_id:"chunksize"}
)
