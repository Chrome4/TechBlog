const router = require("express").Router();
const userRoutes = require("./user-routes");
const postroutes = require("./post-routes");

router.use("/users", userRoutes);
router.use("/create", postroutes);

module.exports = router;
