
const express = require("express");
const router = express.Router();

const contactUsController = require("../controller/contactusController")

router.post('/',contactUsController.addContactUs)
router.get('/',contactUsController.fetchData)

module.exports = router