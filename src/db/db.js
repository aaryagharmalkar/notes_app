const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://aarya:Aarya%401010@complete-backend.madpdtz.mongodb.net/notesDB",
  );
  console.log("DB connected successfully!🚀");
}

module.exports = connectDB;
