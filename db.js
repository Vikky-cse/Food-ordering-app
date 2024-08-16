// import dotenv from 'dotenv';
const mongoose = require('mongoose');

// dotenv.config();
// main().catch(err => console.log(err));




const { MONGODB_URI } = process.env;
async function main() {
  await mongoose.connect(MONGODB_URI);


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// export default main;
