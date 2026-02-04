db.employees.find(
    {location:"FL"}
)

db.employees.updateOne(
    {email:"chastity@gmail.com"},
    {$push:{location:"TX"}}          // adds element at the end
)

db.employees.updateOne(
    {email:"chastity@gmail.com"},
    {$pop:{location:1}}              // removes first element
) 

db.employees.updateOne({},{$push:{skills:"python"}})      // adds element at the end

db.employees.updateMany({},{$push:{skills:"python"}})     // adds element at the end
db.employees.updateMany({},{$push:{skills:"java"}})       // adds element at the end


db.employees.updateOne(
    {email:"john@gmail.com"},          
    {$push:{skills:".net"}}         // adds element at the end
)

db.employees.updateOne(
    {email:"john@gmail.com"},
    {$push:{skills:".cpp"}}         // adds element at the end
)

db.employees.updateOne(
    {email:"john@gmail.com"},
    {$pop:{skills:1}}               // removes last element
)

db.employees.updateOne(
    {email:"chastity@gmail.com"},
    {$addToSet:{skills:"Java"}}         // adds element if not present
)

db.employees.updateOne(
    {email:"chastity@gmail.com"},
    {$pull:{skills:"Java"}}              // removes specified element
)

db.employees.updateOne(
    {email:"john@gmail.com"},
    {$pull:{skills:"python"}}            // removes specified element
)


//FLIPKART


db.users.insertMany([
... {name:"vishnu",email:"vishnu@gmail.com",password:12345},
{name:"monish",email:"monish@gmail.com",password:12345}
])

db.users.aggregate([
    {$sort:{name:1}}
])

db.users.aggregate([
    {$project:{_id:0,name:1,email:1}},
    {$sort:{name:1}}
])

db.users.getIndexes()                     // list all indexes
db.users.createIndex({email:1})           // create index on email field
db.users.dropIndex("email_1")             // drop index by name

db.users.aggregate(                       // find documents
    [
        {$match:{name:"vishnu"}}          // filter documents
    ]
)
db.users.aggregate(
    [
        {$match:{name:"vishnu"}},{$project:{_id:0,email:1}}  // include fields
    ]
)
