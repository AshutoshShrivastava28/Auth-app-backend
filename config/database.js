const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(
      "mongodb+srv://ashu28shrivastava:Roo1gXQRjeJc07Kb@cluster0.js3xjgr.mongodb.net/authAppDatabase",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(console.log("Database connected successfully"))
    .catch((error) => {
      console.log("Database connection failed");
      console.error(error);
      process.exit(1);
    });
};
