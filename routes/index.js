const router = require("express").Router();
const { NOT_FOUND } = require("../utils/errors");
const { login, createUser } = require("../controllers/users");
const { auth } = require("../middlewares/auth");

const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

// Public routes (no auth required)
router.post("/signin", login);
router.post("/signup", createUser);

// Protected routes (auth required)
router.use("/users", auth, userRouter);
router.use("/items", clothingItemsRouter);
router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "Requested resource not found" });
});

module.exports = router;
