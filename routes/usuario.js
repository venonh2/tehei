
// novo usuario
module.exports = app => {
    var usuario = app.controllers.usuario;
    app.get('/usuario', usuario.login); // login
    app.post('/usuario/create', usuario.create); // cadastro
};

