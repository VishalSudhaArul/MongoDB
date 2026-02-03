// debugger.employees.find({},{})

db.employees.find(
    {department:"HR"},
    {name:1,salary:1}
)

db.employees.find().limit(3)  // limits to first 3 documents

db.employees.find().skip(1)  // skips first document

db.employees.find().sort({name:-1})  // -1 for descending order, 1 for ascending order

db.employees.find().limit(3).skip(1).sort({name:-1})  // combined

db.employees.find().count()  // total number of documents

db.employees.find({department: "HR"}) // filter based on department
db.employees.find({department: "IT"}) // filter based on department

db.employees.find(
    {department: {$eq:"HR"}}  // eq equal to
)

db.employees.find(
    {salary: {$gt:"3000"}}  // gt greater than
)

db.employees.find(
    {salary: {$gte:"3000"}}  // gte greater than equal to
)

db.employees.find(
    {salary: {$ne:"3000"}}  // ne not equal to
)

db.employees.find(
    {salary: {$lt:"3000"}}  // lt less than
)

db.employees.find(
    {salary: {$lte:"3000"}}  // lte less than equal to
)
