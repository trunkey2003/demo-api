const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const post = new Schema({
    name: {type:String},
    email: {type:String},
    post: {type:String},
});

module.exports = mongoose.model('post', post);