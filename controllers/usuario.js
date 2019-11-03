
// novo usuario
const mongoose = require('mongoose');
//const Usuario = app.models.usuario;

module.exports = function (app) {
    var UsuarioController = { // não utilizavel
        login: function (req, res) {
            //  // var usuario = req.session.usuario,
            //   params = { usuario: usuario};
            res.render('usuario/login');
        },
        create: function (req, res) {
            res.render('usuario/create', { usuario: {} });
        },
        login: function (req, res) {
            var email = req.body.usuario.email,
                nome = req.body.usuario.nome;
            if (email && nome) {
                var usuario = req.body.usuario;
                usuario['contatos'] = [];
                req.session.usuario = usuario;
                res.redirect('/contatos');
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