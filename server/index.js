const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");

//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//* parse application/json
app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/api", (req, res) => {
  const dataUser = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  res.status(200).json(dataUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
