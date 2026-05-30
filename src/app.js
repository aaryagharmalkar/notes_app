//importing express modules
const express = require('express');
const cors = require('cors')
//creating a server
const app = express();
app.use(express.json());
app.use(cors());
module.exports=app;
