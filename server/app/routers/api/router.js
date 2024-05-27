const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayAction");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;
