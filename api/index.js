require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./src/app");

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`server started`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to mongoDB", err);
    process.exit(1);
  });
