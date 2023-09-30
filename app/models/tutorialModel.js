const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

var schema = mongoose.Schema({
    title: String,
    description: String,
    published: Boolean
}, { timestamps: true });

// Add pagination plugin
schema.plugin(mongoosePaginate);


//If you use front-end that needs id field instead of _id, :::override toJSON
schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Tutorial = mongoose.model("tutorial", schema);

module.exports = Tutorial;