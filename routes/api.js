const express = require('express');
const router = express.Router();

const apiController = require('../app/controllers/api.controller');

/* GET users listing. */
router.get('/post',apiController.showPost);

module.exports = router;
