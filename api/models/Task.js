const { model, Schema } = require('mongoose')

const taskSchema = new Schema({
  title: String,
  author: String,
  description: String,
  state : {
    type: String,
    enum: ['waiting','process', 'completed'],
    default: 'waiting',
  },
  userId: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

const Task = model('Task', taskSchema)
module.exports = Task
