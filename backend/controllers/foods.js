const Food = require('../models/foodModel');

const listStore = async (req, res) => {
  try {
    const data = await Food.find();
    const uniqueShops = [...new Set(data.map(food => food.shop))];
console.log(uniqueShops);
    if (uniqueShops) {
      return res.status(200).json(uniqueShops);
    }

    res.status(404).json({ message: 'Not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve food' });
  }
};

const getFoodWithStore = async (req, res) => {
  const { shop } = req.params;

  try {
    const data = await Food.find();
    const filteredFoods = data.filter(food => food.shop === shop);

    if (filteredFoods) {
      return res.status(200).json(filteredFoods);
    }

    res.status(404).json({ message: 'Not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve food' });
  }
};

const updateFood = async (req, res, next) => {
  const body = req.body;
  const { foodId } = req.params;

  try {
    const data = await Food.findByIdAndUpdate(
      { _id: foodId },
      { ...body },
      { new: true }
    );
    if (data) {
      return res.status(200).json(data);
    }
    res.status(404).json({ message: 'Not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update food' });
  }
};

const addCartFood = async (req, res) => {
  const { foodId } = req.params;

  try {
    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    food.cart = !food.cart;

    const updatedFood = await food.save();

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update cart status' });
  }
};

const addCartFoodFalse = async (req, res) => {
  const { foodId } = req.params;

  try {
    const food = await Food.findById(foodId);

    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }

    food.cart = false;

    const updatedFood = await food.save();

    res.status(200).json(updatedFood);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update cart status' });
  }
};

const listCartTrue = async (req, res) => {
  console.log("object");
  try {
    const filteredFoods = await Food.find({ cart: true });

    if (filteredFoods) {
      return res.status(200).json(filteredFoods);
    }

    res.status(404).json({ message: 'Not found' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve food' });
  }
};

module.exports = {
  listStore,
  getFoodWithStore,
  updateFood,
  addCartFood,
  listCartTrue,
  addCartFoodFalse
};
