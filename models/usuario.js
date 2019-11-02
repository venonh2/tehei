
// novo usuario

module.exports = function (express) {
    var Schema = require('mongoose').Schema;
    var usuario = Schema({
        nome: { type: String, required: true },
        email: { type: String, required: true },
        senha: { type: String, required: true },
    });
    return global.db.model('usuario', usuario);
};
