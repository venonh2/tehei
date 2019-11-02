
 // novo usuario
const mongoose = require('mongoose');
//const Usuario = app.models.usuario;

 module.exports = function (app){
     var UsuarioController = {
         login: function (req, res) {
          //  // var usuario = req.session.usuario,
          //   params = { usuario: usuario};
            res.render('usuario/login');
         },
         create: function(req, res) {
            res.render('usuario/create', { usuario: {} });
         }
     }
     return UsuarioController;
 }