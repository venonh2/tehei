const { check, validationResult } = require('express-validator');
const mongoose = require('mongoose');
//const Usuario = app.models.usuario;

module.exports = function (app) {
    //var Usuario = app.models.usuario;

    var UsuarioController = { // não utilizavel
       login: function (req, res) {
            res.render('usuario/login');
    
        }, 

        create: function (req, res) {
            const errors = validationResult(req); //aaaaa
            res.render('usuario/create', { usuario: {} });
            var dados = req.body.usuario;
            usuario = new app.models.usuario(dados);
            

            usuario.save(function (err) {
            if (err) {
                console.log("Error! " + err.message);
                return err;
            }
            else {
                console.log("Created user");
                res.redirect('usuario/login');
            }
        });
        }, // teste 
        
        logar: function (req, res) {
            const errors = validationResult(req); // aaaa
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
        validate: [ //aaaaaaaaaaaaaaaaaaaa
            check('usuario[email]', 'O email deve ser válido').isEmail(),
            check('usuario[nome]', 'Campo nome é obrigatório').not().isEmpty(),
            check('usuario[sobrenome]', 'Campo sobrenome é obrigatório').not().isEmpty()
        ]
       
    }
    return UsuarioController;
}