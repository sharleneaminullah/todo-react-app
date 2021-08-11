const mongoose = require("mongoose");

/* Contains the information for Database connection */

const ConnectToDB = () => {

const server = '127.0.0.1:27017';
const database = 'todoapp';      
mongoose
  .connect((`mongodb://${server}/${database}`), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(err => {
    console.error('Database connection error')
  });
}

module.exports = ConnectToDB;