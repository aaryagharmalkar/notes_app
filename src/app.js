//importing express modules
const express = require('express');

//creating a server
const app = express();
app.use(express.json());
module.exports=app;