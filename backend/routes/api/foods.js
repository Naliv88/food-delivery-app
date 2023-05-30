const express = require("express");

const {
  listStore,
  getFoodWithStore,
  updateFood,
  addCartFood,
  listCartTrue,
  addCartFoodFalse,
} = require("../../controllers/foods");
const { tryCatchWrapper } = require("../../service/catchWrapper");
const { addHistory, listHistory } = require("../../controllers/history");

const router = express.Router();

// Get all store and foods
router.get("/shop", tryCatchWrapper(listStore));

// Get all in cart
router.get("/cart", tryCatchWrapper(listCartTrue));

// Get a specific food by store
router.get("/shop/:shop", tryCatchWrapper(getFoodWithStore));

// Update a food by ID
router.put("/:foodId", tryCatchWrapper(updateFood));

// Update a cart status in food by ID
router.patch("/cart/:foodId", tryCatchWrapper(addCartFood));

// Update a cart status in false food by ID
router.put("/cart/:foodId", tryCatchWrapper(addCartFoodFalse));

// Post a history 
router.post("/history", tryCatchWrapper(addHistory));

// Get a history 
router.get("/history", tryCatchWrapper(listHistory));

module.exports = router;
