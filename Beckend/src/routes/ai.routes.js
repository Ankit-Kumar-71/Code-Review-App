const express = require('express');
const aiContoller = require('../controllers/ai.controller')
const router = express.Router();


router.post("/get-review", aiContoller.getReview)


module.exports = router;