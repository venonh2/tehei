// novo usuario
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Usuario = mongoose.model('usuario');

module.exports = function (app) {
    //var Usuario = app.models.usuario;

    var UsuarioController = { // não utilizavel
       login: function (req, res) {
            res.render('usuario/login');
    
        }, 

        sing_up: function(req, res){
            res.render('usuario/create');
        },
        create: function (req, res) {
            if(req.body.email && req.body.senha){
                Usuario.findOne({'email': req.body.email })
                    .then(user => {
                        if(user) {
                            res.json({ success: false, message:"Esse email já esta em uso"});
                        }else{
                            bcrypt.hash(req.body.senha, 8)
                                .then(hash => {
                                    var encryptedSenha = hash;

                                    var newUser = new app.models.usuario({
                                        nome: req.body.nome,
                                        email: req.body.email,
                                        senha: encryptedSenha
                                    });

                                    newUser.save()
                                        .then(() => {
<<<<<<< HEAD
                                            console.log('Usuario criado com sucesso')
=======
                                            //res.json({success: true, message: 'Usuario criado com sucesso', statusCode: 201 })
>>>>>>> 63b67b681f3ddf4410220022799f78fe16852cc9
                                            res.render('usuario/login');
                                        })
                                        .catch(err => res.json({success: false, message: err, statusCode:500}));
                                })
                                .catch(err => res.json({success: false, message: err, statusCode:500}));
                        }
                    })
            }else{
                res.json({ success: false, message: "Campos nome, email e senha são requeridos", statusCode: 400});
            }
              
        }, // teste 
        
        logar: function (req, res) {
            if (req.body.email && req.body.senha) {
                Usuario.findOne({'email': req.body.email}).then(function(user) {
                    req.session.usuario = user.nome;
                    return bcrypt.compare(req.body.senha, user.senha);
                })
                .then(function(samePassword) {
                    console.log(String(samePassword));
                    if(!samePassword) {
                        req.session.destroy();
                        console.log("Senha incorreta");
                        res.status(403).send();
                    }else{
                    res.render('usuario/logado');
                    console.log("A combinação email e senha são corretos!" );
                    res.send();
                    }
                    
                })
                .catch(function(error){
                    res.json({ success: false, message:"Esse email não está cadastrado"});
                    console.log("Error authenticating user: ");
                    console.log(error);
                });
            }else {
                    res.redirect('/');
            }
        }, 

        logado: function (req, res) {
            res.render('usuario/logado')
        },

        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/usuario/login');
        },
       
    }
    return UsuarioController;
}