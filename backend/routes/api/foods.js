const express = require("express");

const {
  listStore,
  getFoodWithStore,
  updateFood,
  addCartFood,
  listCartTrue,
} = require("../../controllers/foods");
const { tryCatchWrapper } = require("../../service/catchWrapper");

const router = express.Router();

// Get all store and foods
router.get("/", tryCatchWrapper(listStore));

// Get a specific food by store
router.get("/:shop", tryCatchWrapper(getFoodWithStore));

// Get all in cart
router.get("/cart", tryCatchWrapper(listCartTrue));

// Update a food by ID
router.put("/:foodId", tryCatchWrapper(updateFood));

// Update a cart status in food by ID
router.patch("/:foodId/cart", tryCatchWrapper(addCartFood));

module.exports = router;
