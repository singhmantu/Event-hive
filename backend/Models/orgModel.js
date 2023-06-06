const {Schema,model} = require('../connection');

const myschema = new Schema({
    title : String,
    owner: String,
    logo: String,
    images: [Object],
    desription: String,
    category: String,
    plan: String,
    createdAt: String,
});

module.export = model('organizers',myschema);
