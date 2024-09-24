// const mongoose = require("mongoose");

// mongoose.connect(
//   process.env.MONGOURL ||
//     "mongodb+srv://balaji2004:balaji2004@visitors.4lvly.mongodb.net/?retryWrites=true&w=majority&appName=visitors"
// );

// const connection = mongoose.connection;

// connection.on("connected", () => {
//   console.log("Db connected");
// });
// connection.on("erroe", () => {
//   console.log("Db error");
// });
// module.exports = mongoose;



const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOURL)

const connection = mongoose.connection;
connection.on('connected', () => console.log("DB Connected"))
connection.on('error', () => console.log("DB Error"))

module.exports = mongoose