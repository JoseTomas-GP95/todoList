require('dotenv').config()
require('./mongo')
const express = require('express')
const app = express()
const cors = require('cors')
/* ------------------------------- CONTROLLERS ------------------------------ */
const getTaskRouter = require('./controllers/tasks/getTasks')
const getOneTaskRouter = require('./controllers/tasks/getOneTask')
const postTasksRouter = require('./controllers/tasks/postTasks')
const putTasksRouter = require('./controllers/tasks/putTasks')
const deleteTasksRouter = require('./controllers/tasks/deleteTasks')
const postUsersRouter = require('./controllers/users/postUser')
const loginRouter = require('./controllers/login/loginUser')

const port = process.env.PORT || 3001
/* ------------------------------- MIDDLEWARE ------------------------------- */
app.use(express.json())
app.use(cors())
app.use('/tasks', getTaskRouter)
app.use('/task', getOneTaskRouter)
app.use('/task', postTasksRouter)
app.use('/task', putTasksRouter)
app.use('/task', deleteTasksRouter)
app.use('/user', postUsersRouter)
app.use('/login', loginRouter)

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})