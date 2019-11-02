module.exports = app => {
    var home = app.controllers.home;
    var usuario = app.controllers.usuario;
    app.get('/', home.index);
   // app.post('/entrar', home.login);
 //   app.get('/sair', home.logout); // teste
   // app.get('/usuario/login',usuario.login);
    //app.post('/usuario/create', usuario.create);
};
