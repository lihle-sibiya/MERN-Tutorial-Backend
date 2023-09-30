// const dbConfig = require("../config/db.config.js");

// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

// const db = {};
// db.mongoose = mongoose;
// db.url = dbConfig.url;
// db.tutorials = require("./tutorialModel.js")(mongoose);

// module.exports = db;


const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorialModel.js")(mongoose, mongoosePaginate);

module.exports = db;