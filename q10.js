db.employees.find(
    {email:"chastity@gmail.com"}
).explain("executionStats")

db.employees.createIndex({email:1})                     // create index on email field

db.employees.getIndexes()                               // list all indexes

db.employees.dropIndex("email_1")                       // drop index by name

db.employees.find({}, {_id:0, name:1})                  // without sort

db.employees.find({}, {_id:0, name:1}).sort({name:1})   // case sensitive sort

db.employees.find({}, {_id:0, name:1}).collation         // default collation
({locale:'en',strength:2}).sort({name:1})                // case insensitive sort

