const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : {type : Types.ObjectId, ref : 'users'},
    org : {type : Types.ObjectId, ref : 'organisers'},
    rating : String,
    text : String,
    createdAt: Date
});

module.exports = model('reviews', myschema);