
// novo usuario
module.exports = app => {
    var usuario = app.controllers.usuario;
    app.get('/usuario/create', usuario.sing_up);
    app.post('/usuario/create', usuario.create); // login
<<<<<<< HEAD
    app.post('/usuario/entrar', usuario.login); // login
    app.get('/usuario/sair', usuario.logout);
=======
    app.get('/usuario/login',usuario.login);
    app.post('/usuario/login',usuario.logar);
    app.get('usuario/logado', usuario.logado);
    app.get('/usuario/sair', usuario.logout); // teste
>>>>>>> a9ba9e89e2316703956c003956a9d64549962655
};

