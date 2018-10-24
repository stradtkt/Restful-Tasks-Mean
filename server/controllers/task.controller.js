const Task = require('mongoose').model('Task');

module.exports = {
  index(req, res) {
    Task.find({})
        .then(tasks => res.json(tasks))
        .catch(console.log('Error in find'));
  },
  show(req, res) {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(console.log('Error in findbyid'));
  },
  update(req, res) {
    Task.findByIdAndUpdate(req.params.book_id, { $set: req.body }, { new: true })
      .then(task => res.json(task))
      .catch(console.log('Error in update'));
  },
  create(req, res) {
    Task.create(req.body)
        .then(task => res.json(task))
        .catch(console.log('Error in new'));
  },
  destroy(req, res) {
    Task.findByIdAndRemove(req.params.id)
        .then(task => res.json(task))
        .catch(console.log('Error in delete'));
  }
};
