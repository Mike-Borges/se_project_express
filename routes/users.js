const router = require("express").Router();
const { getCurrentUser, updateProfile } = require("../controllers/users");
// Get current authenticated user
router.get("/me", getCurrentUser);

// Update current user's profile
router.patch("/me", updateProfile);

module.exports = router;
