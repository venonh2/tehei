const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Schema = new Schema({
    nome: { type: String,  required: true ,trim: true},
    email: {type: String, required: true, trim: true},
    senha: {type: String, required: true},
});

module.exports = mongoose.model('Usuario', schema);