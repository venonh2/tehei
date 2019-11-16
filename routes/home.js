module.exports = app => {
    var home = app.controllers.home;
    var usuario = app.controllers.usuario;
    var filme = app.controllers.filme;
    app.get('/', home.index);
   // app.post('/entrar', home.login);
 //   app.get('/sair', home.logout); // teste
    app.get('/usuario/login',usuario.login);
    app.post('/usuario/login',usuario.logar);
    app.get('/usuario/create', usuario.create);
    app.get('/filme/create', filme.create);

    

};
