//REQUIRING
const mongoose = require("mongoose");
const validator = require("validator");

//USING AND CREATING SCHEMA
const forStudents = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  skill: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "this email is already exist please enter new email"],
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error(" this is Invalid email please enter valid email");
      }
    },
  },
  hobby: {
    type: String,
    required: true,
    trim: true,
  },
  data: {
    type: Date,
    default: new Date(),
  },
});

//CREATING INSTANCE
const MyStudent = mongoose.model("AllStudent", forStudents);

//EXPORT
module.exports = MyStudent;
