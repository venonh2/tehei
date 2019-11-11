
// novo usuario
const mongoose = require('mongoose');
//const Usuario = app.models.usuario;

module.exports = function (app) {
    //var Usuario = app.models.usuario;

    var UsuarioController = { // não utilizavel
       login: function (req, res) {
            //  // var usuario = req.session.usuario,
            //   params = { usuario: usuario};
            res.render('usuario/login');
           // var email = req.body.usuario.email,
             //   senha = req.body.usuario.senha;
           /* if (email && senha) {
                var usuario = req.body.usuario;
                usuario['teste'] = [];
                req.session.usuario = usuario;
                res.redirect('/log');
            } else {
                res.redirect('/');
            } */
        }, 

        create: function (req, res) {
            res.render('usuario/create', { usuario: {} });
        }, // teste 
        
        logar: function (req, res) {
            var email = req.body.usuario.email,
                senha = req.body.usuario.senha;
            if (email && senha) {
                var usuario = req.body.usuario;
                usuario['teste'] = [];
                req.session.usuario = usuario;
                res.redirect('/log'); // criar
            } else {
                res.redirect('/');
            }
        }, 
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        }
        
    }
    return UsuarioController;
}