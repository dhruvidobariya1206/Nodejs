const express = require("express");
const app = express();

app.get("", (req, resp) => {
  console.log(req.query.name);
  if (req.query.name == "Dhruvi") {
    resp.send("Hello World");
  } else {
    resp.send("Hello "+req.query.name);
  }
});

app.get("/about", (req, resp) => {
  resp.send("About page");
});

app.get("/help", (req, resp) => {
  resp.send("Help page");
});

app.listen(5000);
