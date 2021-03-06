const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const reg = new RegExp('\\.js$', 'i');
const modelsPath = path.resolve('server/models');

// const modelsPath = path.join(__dirname, '../models');

mongoose.connect("mongodb://localhost:27017/tasks", {useNewUrlParser: true});
mongoose.connection.on('connected', () => console.log('MongoDB is connected'));

// mongoose.Promise = global.Promise

fs.readdirSync(modelsPath).forEach(file => {
  if(reg.test(file)) {
    require(path.join(modelsPath, file));
  }
});
