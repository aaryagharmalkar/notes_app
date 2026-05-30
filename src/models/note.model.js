// before storing any data in the db we need to tell the db what the data will look like.
// For that we need to create a schema.
// A schema is a blueprint of how the data will look like.
// It defines the structure of the document, default values, validators, etc.

// require mongoose
const mongoose = require("mongoose");

/*
    notes = {
    title : title of the note,
    desc : description of the note
    }
*/
//create a scheme
const noteSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

//create a model : a model is smthg that is used to interact with the db.
// it is created using the schema.

const Note = mongoose.model("Note", noteSchema); // mongoose.model(modelName, schema)

//once we have the model we can use it by exporting it to perform CRUD operations on the db.

module.exports = Note;
