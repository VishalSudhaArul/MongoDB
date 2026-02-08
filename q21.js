db.createCollection("vendors", {              
    validator:{
        $jsonSchema: {
            bsonType:"object",
            required:["name","age"],
            properties:{
                name:{bsonType:"string"},
                age:{bsonType:"int",minimum:18}
            }
        }
    }
})

db.vendors.insertOne({
    name:"John",
    age:21
})

db.vendors.insertOne({
    age:16
})

db.vendors.insertOne({
    name:12306232,
    age:"asdfghjkl"
})
