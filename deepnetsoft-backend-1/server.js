const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
require("dotenv").config();

const menuRoutes = require("./routes/menu.routes");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/menus", menuRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
  console.log(`Server running on port ${PORT}`);
});
