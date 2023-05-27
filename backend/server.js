const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const port = 4000;
const mongoUrl = "mongodb+srv://nalivpv:ghL9u0P0rKEqTLdy@cluster0.xosdj1m.mongodb.net/?retryWrites=true&w=majority";
const dbName = "Food-delivery";

mongoose
  .connect(mongoUrl, {
    dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB database "${dbName}"`);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error(
      `Error connecting to MongoDB database "${dbName}": ${error.message}`
    );
    process.exit(1);
  });
