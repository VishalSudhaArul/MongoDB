db.employees.find(
    {
        department:{$in:["HR","IT"]}          // Find employees in HR or IT departments
    }
);

db.employees.find(
    {
        department:{$nin:["HR","IT"]}         // Find employees not in HR or IT departments
    }
);

db.employees.updateOne(
    {email:"mike@gmail.com"},                 // Filter to find the document
    {$set:{department:"Admin"}}               // Update operation to set department to Admin
);

db.createCollection("students")               // Create a new collection named students

db.students.renameCollection("mystudents")    // Rename students collection to mystudents

db.mystudents.drop()                        // Drop the mystudents collection

db.dropDatabase("lpu26a")                    // Drop the database named lpu26a
