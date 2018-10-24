const { taskController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/tasks', taskController.index)
  .get('/tasks/:id', taskController.show)
  .put('/tasks/:id', taskController.update)
  .post('/tasks/new', taskController.create)
  .delete('/tasks/:id', taskController.destroy);

