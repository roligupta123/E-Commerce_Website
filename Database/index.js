require('dotenv').config();
const express = require("express");
const connect = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

connect();

app.get('/', (req, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log(` Server is running at PORT: ${PORT}`));