// require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB= require('./config/db');


const app = express();

// Connect DB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`Server is running on port: ${PORT}`);
});

// app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(
 cors({
  // origin: ['https://skms.netlify.app http://localhost:3001/'],
//   origin: ['http://localhost:3000'],
  origin: ['https://skms.netlify.app'],


  methods: ["GET", "PATCH", "OPTIONS", "POST", "PUT", "DELETE"],
  credentials: true,
 })
)

app.get("/", (req, res) => {
 res.send("Server is running.");
})



const userRouter = require('./routes/api/user')
const userAuth = require('./routes/api/auth')
const staffRouter = require('./routes/api/staff')
const studentRouter = require('./routes/api/student')
const uploadRouter = require('./routes/api/upload')
// const gradeRouter = require('./routes/grade')
// const expenseRouter = require('./routes/expense')
// const feesRouter = require('./routes/fees')
// require('./routes/student')
// require('./routes/student')

app.use('/api/auth', userRouter)
app.use('/api/login', userAuth)
app.use('/staffs', staffRouter)
app.use('/students', studentRouter)
app.use('/upload', uploadRouter)


// app.use('/grades', gradeRouter)
// app.use('/expenses', expenseRouter)
// app.use('/fees', feesRouter)




// if (process.env.NODE_ENV === "production") {
//     app.use
// }

// if (process.env.NODE_ENV === "production") {
//  app.use(express.static("client/build"));
//  app.get("*", (req, res) => {
//    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
//  });
// }



// 404 Error
// app.use((req, res, next) => {
//  next(createError(404));
// });

// app.use(function (err, req,res, next) {
//  console.error(err.message);
//  if (!err.statusCode) err.statusCode = 500;
//  res.status(err.statusCode).send(err.message);
// });