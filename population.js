const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

console.log(createCourse('Node Course', new Author({ name: 'Mosh' })));








// const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/playground')
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));

// const Author = mongoose.model('Author', new mongoose.Schema({
//   name: String,
//   bio: String,
//   website: String
// }));

// const Course = mongoose.model('Course', new mongoose.Schema({
//   name: String,
// }));

// async function createAuthor(name, bio, website) { 
//   const author = new Author({
//     name, 
//     bio, 
//     website 
//   });

//   const result = await author.save();
//   console.log(result);
// }

// async function createCourse(name, author,bio,website) {
//   const course = new Course({
//     name, 
//     author,
//     bio, 
//     website 
//   }); 
  
//   const result = await course.save();
//   console.log(result);
// }

// async function listCourses() { 
//   const courses = await Course
//     .find()
//     .select('name ','author');
//   console.log(courses);
// }



// // createCourse('Node Course', 'authorId')

// listCourses();
// createAuthor('Mosh', 'My bio', 'My Website');