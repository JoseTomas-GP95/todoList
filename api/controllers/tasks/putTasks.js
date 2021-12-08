const putTasksRouter =  require('express').Router()
const Task = require('../../models/Task')

putTasksRouter.put('/:idTask', (request, response) => {
  const { idTask } = request.params
  const { title, author, description, state } = request.body

  const updateTask = {
    title,
    author,
    description,
    state
  }
  Task.findByIdAndUpdate(idTask, updateTask, { new: true })
  .then(updateTask => response.status(200).json(updateTask))
  .catch(error => response.status(404).send(error))
})

module.exports = putTasksRouter