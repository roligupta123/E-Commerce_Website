require("dotenv").config();
const express = require('express');
const path = require("path")
const cors = require("cors")
const productRouter = require("./routes/products/products")
const authRouter = require("./routes/authentication/userAuthentication")
const { connection } = require("./config/connection");
const cookieParser = require("cookie-parser");


const app = express();

connection();

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));



app.use("/api/", productRouter)
app.use("/auth/", authRouter)


module.exports = app;

