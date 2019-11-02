/*
module.exports = function (express) {
    var Schema = require('mongoose').Schema;
    var filme = Schema({
        nome: { type: String, required: true },
        diretor: { type: String, required: true },
        genero: { type: String, required: true },
        sinopse: { type: String, required: true },
        nota: { type: String, required: true }, // tem que ser integer
        ano: { type: String, required: true },
        duracao: { type: String, required: true }
    });
    return global.db.models.filme || global.db.model('filme', filme);
}; */