const { Router } = require("express");
const router = Router();
const passport = require("passport");
const session = require("express-session");

// import all routers;
const authPath = require("./auth.js");
const usersPath = require("./users.js");
const transactionsPath = require("./transactions.js");
const contactsPath = require("./contacts.js");

router.use("/auth", authPath);
router.use("/users", usersPath);
router.use("/transactions", transactionsPath);
router.use("/contacts", contactsPath);

module.exports = router;
