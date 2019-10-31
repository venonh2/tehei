const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    nome: { type: String, required: true },
    diretor: { type: String, required: true },
    genero: { type: String, required: true },
    sinopse: { type: String, required: true },
    nota: { type: String, required: true }, // tem que ser integer
    ano: { type: String, required: true },
    duracao: { type: String, required: true }
});

module.exports = mongoose.model('Filme', schema);