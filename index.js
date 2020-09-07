const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
  response.send(
    request.body.fname +
      "   " +
      request.body.lname +
      "   " +
      request.body.email +
      "   " +
      request.body.phone
  );
});

app.listen(3000, function () {
  console.log("server started...");
});
