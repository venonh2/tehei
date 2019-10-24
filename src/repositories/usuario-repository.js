const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario'); // pega o export realizado la no models-usuario
// criando
exports.createUsuario = async data => { // 
    const usuario = new Usuario(data);
    await usuario.save();
};

// teste listar
exports.listMentions = async () => {
    const res = await Usuario.find({}, `nome email -_id`); // antes estava só find({}), ou seja traga tudo agor estamos dizendo traga só esses dois
    return res; // veja o '-_id' diz, cara não traga ele, serve para outras tbm
};
// export do usuario
