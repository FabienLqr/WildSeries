const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayAction");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const programsRouter = require("./programs/router");
const itemsRouter = require("./items/router");
const categoriesRouter = require("./categories/router");

router.use("/programs", programsRouter);
router.use("/items", itemsRouter);
router.use("/categories", categoriesRouter);

/* ************************************************************************* */

module.exports = router;
