db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade:{$cond:[{$gte:["$salary",4000]},"Grade A","Grade B"]} // Conditional grade assignment
        }}
    ]
)

db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade:{
                $cond:{if:{$gte:["$salary",3500]},then:"Grade A",else:"Grade B"}} // Conditional grade assignment
        }}
    ]
)

db.employees.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            salary:1,
            grade:{
                $cond:{if:{$gt:["$salary",3000]},then:"Grade A",else:"Grade B"}} // Conditional grade assignment
        }}
    ]
)

db.employees.aggregate([   
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            $switch:{                                              // switch statement   
                branches:[                                         // multiple conditions
                    {case:{$gt:["$salary",4000]},then:"Grade A"},  // if salary > 4000 then Grade A
                    {case:{$gt:["$salary",2500]},then:"Grade B"},  // if salary > 2500 then Grade B
                    ],      
                default:"Grade C",                                 // default case if none of the above conditions match
            },
        },
    }}
])


db.orders.insertOne({                                  // Insert a single order document
    empId:ObjectId('6980347f2466284dee628ca2'),        // Reference to employee by ObjectId
    product:"laptop",                                  // Product name
    orderValue:21000                                   // Order value
}
)

db.orders.insertOne({                                  // Insert a single order document
    empId:ObjectId('698035a62466284dee628ca3'),        // Reference to employee by ObjectId
    product:"laptop",                                  // Product name
    orderValue:21000                                   // Order value
}
)

db.orders.insertMany([
    {
        empId:ObjectId('698038c92466284dee628ca4'),
        product:"mouse",
        orderValue:21000
    },
    {
        empId:ObjectId('698039b52466284dee628ca5'),
        product:"cpu",
        orderValue:40000
    },
    {
        empId:ObjectId('698039b52466284dee628ca6'),
        product:"pendrive",
        orderValue:35000
    },
     {
        empId:ObjectId('698039b52466284dee628ca8'),
        product:"computer",
        orderValue:50000
    },
    {
        empId:ObjectId('698039b52466284dee628ca9'),
        product:"laptop",
        orderValue:55000
    }
])

