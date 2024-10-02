const express = require("express");
const dotenv = require("dotenv");
const createDB = require("./db");
const router = require("./router/user-router");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
dotenv.config();
createDB();
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

app.use("/api", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});

