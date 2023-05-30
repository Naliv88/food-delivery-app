const History = require('../models/historyModel');

const addHistory = async (req, res) => {
  const historyItems = req.body;

  try {
    const createdItems = await History.create(
      historyItems.map(item => ({
        name: item.name,
        price: item.price,
        shop: item.shop,
        imageUrl: item.imageUrl,
        quantity: item.quantity,
        idFood: item.idFood,
        date: Date.now(),
      }))
    );

    res.status(201).send(createdItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create history items" });
  }
};

const listHistory = async (req, res) => {
  try {
    const data = await History.find();

    if (data) {
      return res.status(200).json(data);
    }

    res.status(404).json({ message: 'Not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve food' });
  }
};

module.exports = {
  addHistory,
  listHistory
};



