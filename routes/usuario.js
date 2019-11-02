
// novo usuario
module.exports = app => {
    var usuario = app.controllers.usuario;
    app.get('/usuario', usuario.index);
  //  app.post('/usuario/create', usuario.create);
};

