db.orders.aggregate([        
    {$project:{               // projection stage
        _id:0,                // exclude _id field
        empid:1,              // include empid field
        orderValue:1          // include orderValue field
    }}
])

db.orders.aggregate([
    {$lookup:{
        from:"employees",     // target collection to join
        localField:"empId",   // field from orders collection
        foreignField:"_id",   // field from employees collection
        as:"employeeDetails"  // output array field
    }}
])

db.orders.aggregate([
    {$lookup:{
        from:"orders",        // target collection to join
        localField:"_id",     // field from employees collection
        foreignField:"empId", // field from orders collection
        as:"order"            // output array field
    }}
])

// To Join Two Collections
db.employees.aggregate([
    {$lookup:{
        from:"orders",        // target collection to join
        localField:"_id",     // field from employees collection
        foreignField:"empId", // field from orders collection
        as:"orders"           // output array field
    }}
])

db.employees.aggregate([
    {$lookup:{
        from:"orders",        // target collection to join
        localField:"_id",     // field from employees collection
        foreignField:"empId", // field from orders collection
        as:"orders"           // output array field
    }},
    {$unwind:"$orders"},
    {$project:{
    name:1,
    orders:1
    }}
])


db.employees.aggregate([
    {$lookup:{
        from:"orders",        // target collection to join
        localField:"_id",     // field from employees collection
        foreignField:"empId", // field from orders collection
        as:"orders"           // output array field
    }},
    {$unwind:"$orders"},
    {$project:{
    name:1,
        product:"$orders.product",
        orderValue:"$orders.orderValue"
    }}
])


db.employees.aggregate([
    {$lookup:{                                   // lookup stage
        from:"orders",                           // target collection to join
        let:{uid:"$_id"},                        // define variable uid as _id from employees
        pipeline:[{                              // sub-pipeline for lookup
            $match:{                             // match stage in the pipeline
                $expr:{$eq:["$empid","$$uid"]}   // correlate empid with uid
            }
        }],
        as:"orders"                              // output array field
    }}
])

db.employees.aggregate([
    {$lookup:{                                   // lookup stage
        from:"orders",                           // target collection to join
        let:{uid:"$_id"},                        // define variable uid as _id from employees
        pipeline:[{                              // sub-pipeline for lookup
            $match:{                             // match stage in the pipeline
                $expr:{$eq:["$empid","$$uid"]}   // correlate empid with uid
            }
        }],
        as:"orders"                              // output array field
    }},
    {$project:{
        name:1,
        product:"$orders.product",
        orderValue:"$orders.orderValue"
    }}
])


db.employees.aggregate([
  {$lookup: {
      from: "orders",
      let: { uid: "$_id" },
      pipeline: [{
          $match: {
            $expr: { $eq: ["$empId", "$$uid"] }
          }}
      ],
      as: "orders"
    }},
  {
    $project: {
      name: 1,
      product: "$orders.product",
      orderValue: "$orders.orderValue"
    }}
])


db.empDetails.insertMany([
    {
        city:"chennai"
    }
])



db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empId",
        as:"orders"
    }},
     {$lookup:{
        from:"empDetails",
        localField:"_id",
        foreignField:"empId",
        as:"empDetails"
    }},
     {$unwind:"$orders"},
    {$unwind:"$empDetails"},
    {$project:{_id:0,
        empId:1,
        name:1,
        product:"$orders.product",
        orderValue:"$orders.orderValue",
        city:"$empDetails.city",
        state:"$empDetails.state"

    }},
   
])
