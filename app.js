const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const { PORT = 3001 } = process.env;

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(express.json());

// Temporary authorization middleware
app.use((req, res, next) => {
  req.user = {
    _id: "69544391be979bbc0a03cf31", // Example user ID - Hardcoded - replace with real auth logic
  };
  next();
});
app.use("/", mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
