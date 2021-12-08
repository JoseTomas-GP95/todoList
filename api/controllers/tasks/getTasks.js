const getTasksRouter =  require('express').Router()
const Task = require('../../models/Task')

getTasksRouter.get('/waiting', (request, response) => {
  Task.find({ state: 'waiting' })
  .then(tasks => response.json(tasks))
  .catch(error => console.log(error))
})

getTasksRouter.get('/process', (request, response) => {
  Task.find({ state: 'process' })
  .then(tasks => response.json(tasks))
  .catch(error => console.log(error))
})

getTasksRouter.get('/completed', (request, response) => {
  Task.find({ state: 'completed' })
  .then(tasks => response.json(tasks))
})

getTasksRouter.get('/:userId/:state', (request, response) => {
  const { userId, state } = request.params

  Task.find({ userId: userId, state })
  .then(tasks => {
    response.json(tasks)
  })
  .catch(error => response.status(404).send(error))
})

getTasksRouter.get('/', (request, response) => {
  Task.find({})
  .then(tasks => {
    response.json(tasks)
  })
  .catch(error => response.status(404).send(error))
})

getTasksRouter.post('/', (request, response) => {
  const { title, author, description, completed, state } = request.body
  
  const task = {
    title,
    author,
    description,
    completed,
    state
  }

  const newTask = new Task(task)
  newTask.save()
  .then(taskSaved => response.json(taskSaved))
  .catch(error => console.log(error))
})

module.exports = getTasksRouter