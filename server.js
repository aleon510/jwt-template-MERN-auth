const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;

// setup express

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));

// setup mongoose

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/jwt-auth",
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);
