//REQUIRING
const mongoose = require("mongoose");

//CONNECTION
mongoose
  .connect("mongodb://127.0.0.1:27017/MyAllStudents")
  .then(() => {
    console.log("connection establisehd successfully");
  })
  .catch((err) => {
    console.log(`there is error and error is ${err}`);
  });

module.exports = mongoose;
