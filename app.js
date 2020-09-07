const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/leewayheartz", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const leewayHzSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  mobile: Number,
});

const Assignment = mongoose.model("Assignment", leewayHzSchema);
const assignment = new Assignment({
  fname: "sarla",
  lname: "sister",
  email: "sister@gmail.com",
  mobile: 9608583322,
});

assignment.save();
