const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT2 || 5000;
const fs = require("fs");
const bodyParser = require("body-parser");

//* parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//* parse application/json
app.use(bodyParser.json());

app.get("/api/v1/posts", (req, res) => {
  const dataUser = JSON.parse(fs.readFileSync("./posts.json", "utf-8"));
  res.status(200).json(dataUser);
});
//
app.get("/api/v1/posts/:id", (req, res) => {
  const userID = Number(req.params.id);
  const dataUser = JSON.parse(fs.readFileSync("./posts.json", "utf-8"));
  const checkOneUser = dataUser.find((user) => user.id === userID);
  if (checkOneUser) {
    res.status(200).json(checkOneUser);
  } else {
    req.status(404).json({ message: "User not found" });
  }
});

app.post("/api/v1/posts/post", (req, res) => {
  const dataUser = JSON.parse(fs.readFileSync("./posts.json", "utf-8"));

  const userIDAuto = dataUser[dataUser.length - 1].id + 1;

  const title = req.body.title || "";

  const checkTitle = dataUser.find(
    (post) => post.title === title || post.id === userIDAuto
  );

  if (!checkTitle) {
    dataUser.push({ ...req.body, id: userIDAuto });

    fs.writeFileSync("./posts.json", JSON.stringify(dataUser));

    res.status(201).json({ message: "Post created", data: req.body });
  } else {
    res.status(404).json({ message: "title is already used" });
  }
});

app.put("/api/v1/posts/put/:id", (req, res) => {
  const data = fs.readFileSync("./posts.json", "utf-8");
  const dataUser = JSON.parse(data);
  const idParam = req.params.id;
  const updateUser = req.body;
  const userIndex = dataUser.findIndex((user) => user.id == idParam);
  if (userIndex !== -1) {
    dataUser[userIndex] = { ...dataUser[userIndex], ...updateUser };
    fs.writeFileSync("./posts.json", JSON.stringify(dataUser));
    res.status(200).json({
      message: "User updated successfully",
    });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

app.delete("/api/v1/posts/delete/:id", (req, res) => {
  const dataUser = JSON.parse(fs.readFileSync("./posts.json", "utf-8"));

  const userID = Number(req.params.id);

  const deletePost = dataUser.filter((user) => user.id !== userID);

  if (deletePost.length > 0) {
    fs.writeFileSync("./posts.json", JSON.stringify(deletePost));
    res.status(200).json({ message: "Post deleted", data: deletePost });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
