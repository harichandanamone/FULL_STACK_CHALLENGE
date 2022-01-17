var express = require('express');
var router = express.Router();
const Task = require("../models/task");
// var monk  = require('monk');
// var db = monk('localhost:27017/todoapp');

/* GET home page. */
router.get('/api', function(req, res, next) {
  //res.json(todoList );
  //res.json({ message: "Hello from chanduuu!" });
  res.json(todoList);
});


router.post("/", async (req, res) =>{
  try {
      const task = await new Task(req.body).save();
      res.send(task);
  } catch (error) {
      res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
      const tasks = await Task.find();
      res.send(tasks);
  } catch (error) {
      res.send(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
      const task = await Task.findOneAndUpdate(
          { _id: req.params.id },
          req.body
      );
      res.send(task);
  } catch (error) {
      res.send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
      const task = await Task.findByIdAndDelete(req.params.id);
      res.send(task);
  } catch (error) {
      res.send(error);
  }
});



module.exports = router;
