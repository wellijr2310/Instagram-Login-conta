const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const path = require("path");

const usersModel = require("./models/usersModel");

app.use(bodyParser.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "./public")));
app.set("views", path.join(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/login", async (req, res) => {
  const data = req.body;

  await usersModel.setUsers(data);
  res.redirect("/");
});
app.get("/admin", async (req, res) => {
  const users = await usersModel.getUsers();
  console.log(users);
  res.render("admin", { users: users });
});

app.listen(3000, () => console.log("server running on port 3000!"));
