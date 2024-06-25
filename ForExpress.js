//REQUIRING

const express = require("express");
const app = express();
const forConnection = require("./MongooseConn");
const student = require("./ForSchema");

//VARIABLES
const port = process.env.PORT || 3000;

//MIDDLEWARES
app.use(express.json());

//ROUTING
app.get("/", async (req, res) => {
  res.send(" i am riaz ahmad and welcome by serani tech house");
});

//POST METHOD
app.post("/riazAndFriends", async (req, res) => {
  try {
    const StudentOne = new student(req.body);
    const result = await StudentOne.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(err);
  }
});

//GET METHODE
app.get("/riazAndFriends", async (req, res) => {
  try {
    const result = await student.find();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

//PATHC AND PUT METHODE
app.patch("/riazAndFriends/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const result = await student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

//DELETE METHODE
app.delete("/riazAndFriends/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const DeleteItem = await student.findByIdAndDelete(_id);
    res.status(201).send(DeleteItem);
  } catch (error) {
    res.status(500).send(error);
  }
});

//LISTENING THE PORT
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`i am listening at the port no ${port}`);
  }
});
