const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    owner : String,
    cover : String,
    images : Array,
    description : String,
    packages : Array,
    createdAt: Date
});

module.exports = model('organisers', myschema);