
const express = require("express");
const router = express.Router();

const loginController = require("../controller/loginController")

router.post('/',loginController.login)
router.get('/',)

module.exports = router