db.employees.aggregate(
    [
        {},
        {},
        {}
    ]
)

db.employees.aggregate(
    [
        {$match:{department:"HR"}}                 // filter documents
    ]
)

db.employees.aggregate(
    [
        {$project:{name:0}}                        // exclude fields
    ]
)


db.employees.aggregate(
    [
        {$project:{_id:0,name:1}}                  // include fields
    ]
)

db.employees.aggregate(
    [
        {$project:{_id:0,department:0,salary:0}}   // exclude fields
    ]
)

db.employees.aggregate(
    [
        {$sort:{name:1}}                
    ]
)

db.employees.aggregate(
    [
        {$skip:1}
    ]
)

db.employees.aggregate(
    [
        {$limit:3}
    ]
)

