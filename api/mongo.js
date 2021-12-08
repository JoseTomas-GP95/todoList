const mongoose = require('mongoose')

const uri = process.env.MONGO_DB_URI

mongoose.connect(uri, {
  autoIndex: false, 
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
})
.then(() => console.log('Conexión a la DB'))
.catch(error => console.log(error))