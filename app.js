const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./config/db");
const Auth = require("./routes/auth.js");
const Movie = require("./routes/movie.js");
const User = require("./routes/user.js");

dotenv.config();
const app = express();
app.use(cors());


app.use(express.json()); // JSON verilerini analiz etmek için express.json() middleware'ini kullanıyoruz


db();

// app.get("/", (req, res) => {
//     res.send("Hello World");
//     });

app.use('/', Auth);
app.use('/', Movie);
app.use('/settings', User);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
