const { Profiler } = require("react")

db.employees.find(                    // Find all employees
        {},                           // Empty filter to select all documents
        {name:1,department:1}         // Projection to include only name and department fields
)                   

db.employees.find(                    // Find all employees
        {},                           // Empty filter to select all documents
        {name:1,dept:"$department"}   // Projection to include name and rename department field to dept    
)   

showCollections
empSkills
orders
Profile
users

db.users.insertOne(
    {
        name:"Yash",
        age:20,
        address:{addr1:"50 Verdin Ct",city:"Coloumbus",state:"OH"}
    }
)

db.users.insertOne(
    {
        name:"Deva",
        age:20,
        address:{addr1:"51 Middle Ct",city:"Madley",state:"Khansaar"}
    }
)

db.users.insertOne(
    {
        name:"Vichu",
        age:20,
        address:{addr1:"52 Front Ct",city:"Chennai",state:"Tamil Nadu"}
    }
)

db.users.find({},                           // Find all users
    {name:1,                                // Projection to include only name field
     age:1,                                 // Projection to include only age field
     "address.city":1                       // Projection to include only city field from address
});

db.users.find({},                          
    {name:1,                                
     age:1,                                 
        city:"$address.city"                 // Renaming address.city to city in the output  
    });


db.users.find({},{                         
    name:1,                                
    age:1,                                 
    city:"$address.city",                   // Renaming address.city to city in the output
    state:"$address.state"                  // Renaming address.state to state in the output 
    });


//Add Skills array for all users
//and populate Java, Python

db.users.updateMany(
    {},
    {$push:{skills:{$each:["Java","Python"]}}}  // Push Java and Python into skills array for all users
)

db.users.updateMany(
    {},
    {$set:{skills:["Java","Python"]}}      // Set skills array to Java and Python for all users
)

// add .net for deva
db.users.updateOne(
    {name:"Deva"},
    {$push:{skills:".net"}}    // add .net to skills array
)

db.users.updateOne(
    {name:"Deva"},
    {$addtoset:{skills:".net"}}  // add .net only if it doesn't exist
)

db.users.find({},{
    _id:0,
    name:1,
    skills:1
})

db.users.aggregate({          // aggregation pipeline to achieve the same projection
    $project:{_id:0,          // projection stage
        name:1,
        skills:1
}})                       

db.users.aggregate(
    {$project:{_id:0,name:1,skills:1}}, // projection stage
    {$unwind:"$skills"}                  // unwind stage to flatten skills array
)
