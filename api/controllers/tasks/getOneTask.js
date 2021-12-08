const getOneTaskRouter =  require('express').Router()
const Task = require('../../models/Task')

getOneTaskRouter.get('/:idTask', (request, response) => {
  let { idTask } = request.params

  Task.findById(idTask)
  .then(task => response.json(task))
  .catch(error => response.status(404).send(error))
})

module.exports = getOneTaskRouter
