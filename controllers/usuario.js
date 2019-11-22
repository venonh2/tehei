

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
<<<<<<< HEAD
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
=======
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
                                            res.json({success: true, message: 'Usuario criado com sucesso', statusCode: 201 })
                                            res.render('usuario/login');
                                        })
                                        .catch(err => res.json({success: false, message: err, statusCode:500}));
                                })
                                .catch(err => res.json({success: false, message: err, statusCode:500}));
                        }
                    })
            }else{
                res.json({ success: false, message: "Campos nome, email e senha são requeridos", statusCode: 400});
>>>>>>> a9ba9e89e2316703956c003956a9d64549962655
            }
              
        }, // teste 
        
        logar: function (req, res) {
            var email = req.body.email,
                senha = req.body.senha;

            if (email && senha) {
                var user = Usuario.findOne({ email: email });
                if(!user) {
                    console.log("Email incorreto");
                }else{
                    bcrypt.compare(senha, user.senha, function (err, res ) {
                        if(err){
                        console.log("Senha invalida");
                        }else{
                            console.log("A combinação email e senha são corretos!" );
                            req.session.usuario = user.nome;
                            res.render('usuario/logado'); // redirect ?
                        }
                    }),
                }
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