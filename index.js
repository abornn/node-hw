const express = require("express");
const http = require("http");
const app = express();
var port = 8080;

let server = app.listen(port, () => {
  console.log("listening on port  " + port);
});

app.use(express.static(__dirname))
app.use("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
});
