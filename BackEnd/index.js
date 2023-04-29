const express = require("express");
const app = express();
const User = require("./Database/user");
const Area = require("./Database/HomeConect");
const shops = require("./Database/Shops");
require("./Database/config");
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save(req.body);
  result = result.toObject();
  resp.send(result);
  console.warn(result);
});

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "no user found" });
    }
  } else {
    resp.send({ result: "no user found" });
  }
});
app.post("/", async (req, resp) => {
  let user = new Area(req.body);
  let result = await user.save(req.body);
  result = result.toObject();
  resp.send(result);
  console.warn(result);
});
app.get("/", async (req, resp) => {
  let user = await Area.find();
  resp.send(user);
});

app.post("/create", async (req, resp) => {
  let store = new shops(req.body);
  let result = await store.save(req.body);
  resp.send(result);
  //console.warn(result);
});
app.get("/create", async (req, resp) => {
  let store = await shops.find();
  resp.send(store);
});


app.listen(5000);
