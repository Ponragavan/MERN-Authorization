const mongoose = require("mongoose");

const createDB = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then((con) => {
      console.log(`MongoDB connected to the host : ${con.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = createDB;