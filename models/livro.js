/*
module.exports = function (express) {
    var Schema = require('mongoose').Schema;
    var livro = Schema({
        nome: { type: String, required: true },
        //capitulo: { type: String, required: true },// tem que ser integer
        autor: { type: String, required: true },
        genero: { type: String, required: true },
        sinopse: { type: String, required: true },
        nota: { type: String, required: true }, // tem que ser integer
        ano: { type: String, required: true },
        paginas: { type: String, required: true }
    });
    return global.db.models.livro || global.db.model('livro', livro);
};
*/