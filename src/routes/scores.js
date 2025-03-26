const express = require('express');
const router = express.Router();

const controller = require('../controllers/scores');

router.get('/check-score/:number', controller.checkScore);
router.get("/statistics/:subject", controller.getStatistics);
router.get("/top-students", controller.getTopStudents);


module.exports = router;