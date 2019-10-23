const { validationResult } = require('express-validator');
const repository = require('../repositories/usuario-repository');

// create
exports.createUsuario() = async (req, res) => { // adicionar validação depois
    try{
        await repository.createUsuario({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.doby.senha,
        });
        res.status(201).send({ message: 'usuário cadastrado com sucesso' });
    } catch (e){
        res.status(500).send({ message: 'Falha ao cadastrar o usuário' });
    }
}