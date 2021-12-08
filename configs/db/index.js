const mongoose = require("mongoose");

const url = "mongodb+srv://viewer:viewer@cluster0.pjbgc.mongodb.net/demo?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(url,{ 
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Succesfully connect to demo database");
  } catch (error) {
    console.log("Fail to connect to MongoDB - database : demo");
  }
}


module.exports = { connect };
