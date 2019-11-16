//Novo filme

module.exports = function (express) {
    var Schema = require('mongoose').Schema;
    var filme = Schema({
        nome: { type: String, required: true },
        diretor: { type: String, required: true },
        genero: { type: String, required: true },
        sinopse: { type: String, required: true },
       // nota: { type: String, required: true }, // tem que ser integer
        ano: { type: String, required: true },
        //duracao: { type: String, required: true }
        capa:{//Sava no banco o url da imagem
            type: String,
            require: true,
            trim: true
        }
    });
    return global.db.model('filme', filme);
}; 