const jwt = require('jsonwebtoken')
const postTasksRouter =  require('express').Router()
const Task = require('../../models/Task')
const User = require('../../models/User')

postTasksRouter.post('/', async (request, response) => {
  const { title, author, description, state } = request.body

  const task = {
    title,
    author,
    description,
    state,
  }

  const authorization = request.get('authorization')
  let token = null

  if(authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.split(' ')[1]
  }

  const decodedToken = jwt.verify(token, process.env.SECRET)

  if(!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const { id: idUser } = decodedToken
  const user = await User.findById(idUser)

  task.userId = user

  const newTask = new Task(task)
  newTask.save()
  .then(taskSaved => response.json(taskSaved))
  .catch(error => console.log(error))
})

module.exports = postTasksRouter