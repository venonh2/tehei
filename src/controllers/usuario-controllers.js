const { validationResult } = require('express-validator');
const repository = require('../repositories/usuario-repository');

// create
exports.createUsuario = async (req, res) => { // adicionar validação depois
    const { errors } = validationResult(req);
    if(errors.length > 0){
        return res.status(400).send({ message: errors })
    };
    try{
        await repository.createUsuario({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
        });
        res.status(201).send({ message: 'usuário cadastrado com sucesso' });
    } catch (e){
        res.status(500).send({ message: 'Falha ao cadastrar o usuário' });
    };
};