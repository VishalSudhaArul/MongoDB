db.employees.find(
    {department:"HR",salary:{$gt:3000}}
)

db.employees.find(
    {$and: [{department:"HR"},{salary:{$gt:3000}}]}  // AND condition
)

db.employees.find(
    {$or: [{department:"HR"},{salary:{$gt:3000}}]}  // OR condition
)
