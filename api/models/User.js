const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    unique : true,
    required : true,
  },
  name: String,
  surname: String,
  passwordHash: String,
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'	
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const User = model('User', userSchema)
module.exports = User