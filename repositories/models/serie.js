const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
    nome: { type: String, required: true },
    autor: { type: String, required: true },
    genero: { type: String, required: true },
    sinopse: { type: String, required: true },
    nota: { type: String, required: true }, // tem que ser integer
    temporada: { type: String, required: true }, // tem que ser integer
    episodios: { type: String, required: true }, // tem que ser integer
    lancamento: { type: String, required: true }
});

module.exports = mongoose.model('Serie', schema);