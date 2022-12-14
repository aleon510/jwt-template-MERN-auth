const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE.ENV === "production") {
  app.use(express.static("client/build"));
}

// setup express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));

// setup mongoose

// setup routes

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);
