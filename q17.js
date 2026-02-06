//use lms

//users collection
db.users.insertOne({
  _id: "u1",
  name: "Rahul Dev",
  email: "rahul@gmail.com",
  password: "1234",
  role: "student", // student | instructor | admin
});

db.users.insertOne({
  _id: "u2",
  name: "Aryan",
  email: "aryan@gmail.com",
  password: "1234",
  role: "instructor", // student | instructor | admin
});

db.users.insertOne({
  _id: "u3",
  name: "admin",
  email: "admin@gmail.com",
  password: "1234",
  role: "admin", // student | instructor | admin
});

//course collection
db.courses.insertOne({
  _id: "c1",
  title: "MongoDB for Beginners",
  description: "Learn MongoDB from scratch",
  instructorId: "u2",
  price: 1999,
});

db.courses.insertOne({
  _id: "c2",
  title: "Nodejs for Beginners",
  description: "Learn Nodejs",
  instructorId: "u2",
  price: 2000,
});

//modules collection
db.modules.insertOne({
  _id: "m1",
  courseId: "c1",
  title: "Introduction to MongoDB",
  order: 1,
});

db.modules.insertOne({
  _id: "m2",
  courseId: "c1",
  title: "CRUD Operation",
  order: 2,
});

db.modules.insertOne({
  _id: "m3",
  courseId: "c1",
  title: "Aggregate Pipelines",
  order: 3,
});

//lesson collection
db.lessons.insertOne({
  _id: "l1",
  moduleId: "m1",
  title: "What is MongoDB?",
  description: "MongoDB is a document database.",
  order: 1,
});

//enrollment collection
db.enrollments.insertOne({
  studentId: "u1",
  courseId: "c1",
});

//lesson progress collection
db.lessonProgress.insertOne({
  studentId: "u1",
  lessonId: "l1",
  isCompleted: true,
});

//quizzes collection
db.quizzes.insertOne({
  _id: ObjectId,
  lessonId: "l1",
  questions: [
    {
      question: "MongoDB is?",
      options: ["SQL DB", "NoSQL DB", "File System"],
      correctAnswer: "NoSQL DB",
    },
  ],
});

db.courses.aggregate([
    {$lookup:{
        from:"modules",
        localField:"_id",
        foreignField:"courseId",
        as:"modules" 
    }},
    {$unwind:"$modules"},
    {$project:{
        _id:1,
        courseTitle:"$title",
        moduleTitle:"$modules.title",
        //moduleOrder:"$modules.order",
    }}
])


db.users.find()
// all users 
// check enrollments
db.enrollments.find()
//display name of u1 and course of c1

db.enrollments.aggregate([
    {$lookup:{
        from:"users",
        localField:"studentId",
        foreignField:"_id",
        as:"userDetails"
    }},
    {$unwind:"$courseName"},
    {$project:{
        _id:0,
        studentName:"$userDetails.name",
        courseId:"$courseName"
    }},
])

db.enrollments.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "studentId",
      foreignField: "_id",
      as: "users"
    }
  },
  { $unwind: "$users" },

  {
    $lookup: {
      from: "courses",
      localField: "courseId",
      foreignField: "_id",
      as: "courses"
    }
  },
  { $unwind: "$courses" },

  {
    $project: {
      _id: 0,
      studentName: "$users.name",
      courseName: "$courses.title"
    }
  }
]);


db.enrollments.insertOne({
    studentId:"u3",
    courseId:"c3",
})

db.courses.aggregate([
    {$lookup:{
        from:"enrollments",
        localField:"enrollments.courseId",
        forignField:"courseId",
        as:"$courses"
    }},
    {$unwind:"$courses"},
    {$project:{
        id:"$_id",
        courseTitle:{
            $first:"$title"
        }
    }}
])

db.users.find({
    email:"subam@gmail.com",
    password:"1234",
});

// display all courses
db.courses.find()

// show all modules of c1
db.modules.find({courseId:'c1'})

// show all lessons of m1
db.lessons.find({moduleId:'m1'})

// enroll u1 to c1
db.enrollments.insertOne({
    courseId: 'c1',
    studentId:'u1'
})

// mark l1 as complete when u1 hits complete button
db.lessonProgress.updateOne({
    studentId:'u1',
    lessonId:'l1',
    isCompleted:true
})

//check wheather l1 is completed or not
db.lessonProgress.find(
    {lessonId:'l1', studentId:'u1'}
)

//change password 
db.users.updateOne(
    {_id:'u1'},
    {$set:{passworrd:'abc'}}
)

//show profile details pf u1
db.users.find({_id:'u1'})

//Admin Interfaces
//users CRUD
//courses CRUD
//modules CRUD
//lessons CRUD
