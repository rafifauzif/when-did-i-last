const express = require('express');
const router = express.Router();
const ctrl = require('./controllers/taskController');

router.get('/tasks', ctrl.getList);
router.post('/tasks', ctrl.create);

router.get('/tasks/:id', ctrl.getDetail);
router.put('/tasks/:id', ctrl.update);
router.delete('/tasks/:id', ctrl.delete);

module.exports = router;