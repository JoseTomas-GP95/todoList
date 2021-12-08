const bcrypt = require('bcrypt')
const postUsersRouter = require('express').Router()
const User = require('../../models/User')

postUsersRouter.post('/', (request, response) => {
	const { username, name, passwordHash } = request.body

  const saltRounds = 10
  bcrypt.hash(passwordHash, saltRounds)
    .then(res => {
      const user = new User({
        username, 
        name,
        passwordHash: res
      })
      const newUser = new User(user)
      newUser.save()
        .then(savedUser => response.json(savedUser))
    })
})

module.exports = postUsersRouter
