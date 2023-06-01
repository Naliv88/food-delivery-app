const { model, Schema } = require('mongoose');

const historySchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  items: [
    {
      name: {
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
      quantity: {
        type: Number,
      },
      idFood: {
        type: String,
      },
      date: {
        type: Number,
        default: false,
      },
    },
  ],
});

const History = model('history', historySchema);

module.exports = History;

