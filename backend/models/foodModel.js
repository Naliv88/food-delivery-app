
const { model, Schema } = require("mongoose");

const foodSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  shop: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  cart: {
    type: Boolean,
    default: false,
  },
});

const Food = model("food", foodSchema);

module.exports = Food;
