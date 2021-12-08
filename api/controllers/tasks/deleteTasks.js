const deleteTasksRouter =  require('express').Router()
const Task = require('../../models/Task')

deleteTasksRouter.delete('/:idTask', (request, response) => {
  const { idTask } = request.params

  Task.findByIdAndDelete(idTask)
  .then(taskDelete => response.status(200).json(taskDelete))
  .catch(error => response.status(400).send(error))
})

module.exports = deleteTasksRouter