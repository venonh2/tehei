
// novo usuario
module.exports = app => {
    var usuario = app.controllers.usuario;
    app.post('/usuario/create', usuario.create); // login
    app.post('/usuario/entrar', usuario.login); // login
};

