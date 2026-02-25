const router = require("express").Router();
const NotFoundError = require("../errors/NotFoundError");
const { login, createUser } = require("../controllers/users");
const { auth } = require("../middlewares/auth");
const {
  validateLogin,
  validateUserBody,
} = require("../middlewares/validation");

const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.post("/signin", validateLogin, login);
router.post("/signup", validateUserBody, createUser);

router.use("/users", auth, userRouter);
router.use("/items", clothingItemsRouter);
router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;
