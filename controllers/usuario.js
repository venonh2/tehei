
// novo usuario
const mongoose = require('mongoose');
//const Usuario = app.models.usuario;

module.exports = function (app) {
    //var Usuario = app.models.usuario;

    var UsuarioController = { // não utilizavel
       login: function (req, res) {
            res.render('usuario/login');
    
        }, 

        create: function (req, res) {
            res.render('usuario/create', { usuario: {} });
            var dados = req.body.usuario;
            usuario = new app.models.usuario(dados);
            usuario.save();
        }, // teste 
        
        logar: function (req, res) {
            var email = req.body.usuario.email,
                senha = req.body.usuario.senha;
            if (email && senha) {
                var usuario = req.body.usuario;
                usuario['teste'] = [];
                req.session.usuario = usuario;
                res.render('usuario/logado'); // redirect ?
                
            } else {
                res.redirect('/')
            }
        }, 
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        },
       
    }
    return UsuarioController;
}