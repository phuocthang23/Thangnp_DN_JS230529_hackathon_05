const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const fs = require("fs");
const bodyParser = require("body-parser");

//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//* parse application/json
app.use(bodyParser.json());

// app.get("/api/v1/users", (req, res) => {
//   const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//   res.status(200).json(dataUser);
// });
// //
// app.get("/api/v1/users/:id", (req, res) => {
//   const userID = Number(req.params.id);
//   const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
//   const checkOneUser = dataUser.find((user) => user.id === userID);
//   if (checkOneUser) {
//     res.status(200).json(checkOneUser);
//   } else {
//     req.status(404).json({ message: "User not found" });
//   }
// });

// app.post("/api/v1/users/post", (req, res) => {
//   const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

//   const userIDAuto = dataUser[dataUser.length - 1].id + 1;

//   const email = req.body.email;

//   const checkEmail = dataUser.find((user) => user.email === email);

//   if (!checkEmail) {
//     dataUser.push({ ...req.body, id: userIDAuto });

//     fs.writeFileSync("./users.json", JSON.stringify(dataUser));

//     res.status(201).json({ message: "User created", data: req.body });
//   } else {
//     res.status(404).json({ message: "Email is already used" });
//   }
// });

// app.put("/api/v1/users/put/:id", (req, res) => {
//   const userID = Number(req.params.id);

//   const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

//   let checkOneUser = dataUser.find((user) => user.id === userID);

//   if (checkOneUser) {
//     const data = req.body;

//     checkOneUser = { ...checkOneUser, ...data };

//     dataUser.push(checkOneUser);

//     fs.writeFileSync("./users.json", JSON.stringify(dataUser));

//     res.status(200).json(checkOneUser);
//   } else {
//     res.status(404).json({ message: "User not found" });
//   }
// });

app.get("/api/v1/users", (req, res) => {
  const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
  res.status(200).json(dataUser);
});
//
app.get("/api/v1/users/:id", (req, res) => {
  const userID = Number(req.params.id);
  const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
  const checkOneUser = dataUser.find((user) => user.id === userID);
  if (checkOneUser) {
    res.status(200).json(checkOneUser);
  } else {
    req.status(404).json({ message: "User not found" });
  }
});

app.post("/api/v1/users/post", (req, res) => {
  const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

  const userIDAuto = dataUser[dataUser.length - 1].id + 1;

  const email = req.body.email;

  const checkEmail = dataUser.find((user) => user.email === email);

  if (!checkEmail) {
    dataUser.push({ ...req.body, id: userIDAuto });

    fs.writeFileSync("./users.json", JSON.stringify(dataUser));

    res.status(201).json({ message: "User created", data: req.body });
  } else {
    res.status(404).json({ message: "Email is already used" });
  }
});

app.put("/api/v1/user/put/:id", (req, res) => {
  const data = fs.readFileSync("./users.json", "utf-8");
  const dataUser = JSON.parse(data);
  const idParam = req.params.id;
  const updateUser = req.body;
  const userIndex = dataUser.findIndex((user) => user.id == idParam);
  if (userIndex !== -1) {
    dataUser[userIndex] = { ...dataUser[userIndex], ...updateUser };
    fs.writeFileSync("./users.json", JSON.stringify(dataUser));
    res.status(200).json({
      message: "User updated successfully",
    });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.delete("/api/v1/users/delete/:id", (req, res) => {
  const dataUser = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

  const userID = Number(req.params.id);

  const deleteUser = dataUser.filter((user) => user.id !== userID);

  if (deleteUser.length > 0) {
    fs.writeFileSync("./users.json", JSON.stringify(deleteUser));
    res.status(200).json({ message: "User deleted", data: deleteUser });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
