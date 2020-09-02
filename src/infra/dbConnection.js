const mongoose = require("mongoose")

const dbConnection = async () => {
  await mongoose.connect(decodeURIComponent,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
}
 
module.exports = dbConnection;
