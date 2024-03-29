const mongoose = require("mongoose");
//
const connectionOption = {
  username: process.env.MONGO_USER || "",
  password: process.env.MONGO_PASSWORD || "",
  host: process.env.MONGO_HOST || "",
  db: process.env.MONGO_DB || "",
};

const createURI = ({ username, password, host, db }) => {
  return "mongodb://localhost:27017/" + db;
};

const connect = (options = connectionOption) => {
  const uri = createURI(options);
  return mongoose.connect(uri);
};

module.exports = connect;
