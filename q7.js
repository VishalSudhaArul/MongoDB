//db.employee.updateOne({},{})  // debugger syntax

db.employees.updateOne(          // update one document
    {email:"cathy@gmail.com"},  // filter
    {$set:{salary:3500}}        // update operation
)

db.employees.updateMany(         // update multiple documents
    {},                          
    {$inc:{salary:1000}}         // increment salary by 1000
)

db.employees.updateMany(         // update multiple documents
    {},
    {$set:{points:1}}            // set points field to 1
)

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$set:{points:5}}
)

db.employees.deleteOne(
    {email:"cathy@gmail.com"}
)                                // delete one document

db.employees.deleteMany(
    {email:"cathy@gmail.com"}
)                               // delete multiple documents
