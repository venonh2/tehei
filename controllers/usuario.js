
 // novo usuario
const mongoose = require('mongoose');
//const Usuario = app.models.usuario;

 module.exports = function (app){
     var UsuarioController = {
         index: function (req, res) {
          //  // var usuario = req.session.usuario,
          //   params = { usuario: usuario};
            res.redirect('/login');
         },
         create: function(req, res) {
            res.render('usuario/create', { usuario: {} });
         }
     }
     return UsuarioController;
 }