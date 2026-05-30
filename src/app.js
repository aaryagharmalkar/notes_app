//importing express modules
const express = require("express");

//creating a server
const app = express();

//adding middleware
app.use(express.json());

//import the note model
const noteModel = require("./models/note.model");

//now once we have the model we can use it to perform CRUD operations on the db.
//creating a note

app.post("/notes", async (req, res) => {
  const data = req.body;
  const note = await noteModel.create({
    title: data.title,
    desc: data.desc,
  });
  res.status(201).json({
    response: "Note Created Successfully",
    data: note,
  });
});

app.get("/notes", async (req, res) => {
  res.status(200).json({
    response: "Notes fetched successfully",
    data: await noteModel.find({}),
  });
});

app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    response: "Note deleted successfully",
    data: await noteModel.findByIdAndDelete(id),
  });
});

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const desc = req.body.desc;

  const note = await noteModel.findByIdAndUpdate(id, {
    title: title,
    desc: desc,
    new: true,
  });

  res.status(200).json({
    response: "Note updated successfully",
    data: note,
  });
});

//exporting the app
module.exports = app;
