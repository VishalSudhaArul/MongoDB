db.employees.insertOne({
    name:"John Smith",
    email: "john@gmail.com",
    department: "IT",
    salary: 1456,
    location: ["FL", "OH"],
    date: Date()
});

// db.employees.insertMany([{},{},{}])

db.employees.insertOne({
    name:"Vishnu",
    email: "vishnu@gmail.com",
    department: "IT",
    salary: 14565,
    location: ["FL", "OH"],
    date: Date()
},{
    name:"Abinav",
    email: "abinav@gmail.com",
    department: "IT",
    salary: 25684,
    location: ["FL", "OH"],
    date: Date()
},{
    name:"Vichu",
    email: "vichu@gmail.com",
    department: "IT",
    salary: 28965,
    location: ["FL", "OH"],
    date: Date()
});


db.employees.insertOne({
  name: "John Smith",
  email: "john@gmail.com",
  department: "IT",
  salary: 1456,
  location: ["FL", "OH"],
  date: Date(),
});

//db.employees.insertMany([{},{},{}])

db.employees.insertMany([
  {
    name: "Mike Joseph",
    email: "mike@gmail.com",
    department: "IT",
    salary: 2456,
    location: ["FL", "TX"],
    date: Date(),
  },
  {
    name: "Cathy G",
    email: "cathy@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["AZ", "TX"],
    date: Date(),
  },
]);

//

db.employees.insertMany([
  {
    name: "Chastity Jim",
    email: "chastity@gmail.com",
    department: "HR",
    salary: 3000,
    location: ["OH", "TX"],
    date: Date(),
  },
  {
    name: "Brian",
    email: "brian@gmail.com",
    department: "IT",
    salary: 3456,
    location: ["FL", "TX"],
    date: Date(),
  },
]);

