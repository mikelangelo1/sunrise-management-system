// require("dotenv").config();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
// const path = require("path");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(
 cors({
  origin: ["http://localhost:3000"],
  credentials: true,
 })
)

mongoose.connect('mongodb://localhost/local', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
 console.log("MongoDB database connection established successfully")
},
 error => {
  console.log('Could not connect to database: ' + error)
 }
);

const staffRouter = require('./routes/staff')
const studentRouter = require('./routes/student')
const uploadRouter = require('./routes/upload')
const userRouter = require('./routes/user')
// const gradeRouter = require('./routes/grade')
// const expenseRouter = require('./routes/expense')
// const feesRouter = require('./routes/fees')
// require('./routes/student')
// require('./routes/student')

app.use('/staffs', staffRouter)
app.use('/students', studentRouter)
app.use('/upload', uploadRouter)
app.use('/auth', userRouter)
// app.use('/grades', gradeRouter)
// app.use('/expenses', expenseRouter)
// app.use('/fees', feesRouter)




// if (process.env.NODE_ENV === "production") {
//     app.use
// }

app.listen(PORT, () => {
 console.log(`Server is running on port: ${PORT}`);
});

// 404 Error
// app.use((req, res, next) => {
//  next(createError(404));
// });

// app.use(function (err, req,res, next) {
//  console.error(err.message);
//  if (!err.statusCode) err.statusCode = 500;
//  res.status(err.statusCode).send(err.message);
// });