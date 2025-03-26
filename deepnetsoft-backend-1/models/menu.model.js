const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
});

const MenuHeadingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  items: [MenuItemSchema], 
});

const MenuSchema = new mongoose.Schema({
  category: { type: String, required: true },
  headings: [MenuHeadingSchema], 
});

module.exports = mongoose.model("Menu", MenuSchema);

