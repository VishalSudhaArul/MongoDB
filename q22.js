db.employees.find({
    name:"John Smith"
})

db.employees.find({
    name:{$regex:"John"}
})

db.employees.find({
    name:{$regex:"John",$options:"i"}
})

db.employees.find({
    name:{$regex:"^M",$options:"i"}
})

db.employees.find({
    name:{$regex:"h$",$options:"i"}
})
