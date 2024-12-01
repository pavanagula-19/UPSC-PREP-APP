const express = require("express");
const {
  registerUser,
  loginUser,
  getProfile,
  getAllUsers,
} = require("../controllers/user-controller");

const { protect } = require("../middleware/auth-middleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.get("/users", protect, getAllUsers);

module.exports = router;
