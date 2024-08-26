const express = require("express");
require("dotenv").config();
const app = express();

const PORT = 4000;

//import cookie-parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());

require("./config/database").connect();

//route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

//activate
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
