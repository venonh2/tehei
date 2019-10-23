const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario'); // pega o export realizado la no models-usuario
// criando
exports.createUsuario = async data => { // 
    const usuario = new Usuario(data);
    await usuario.save();
};