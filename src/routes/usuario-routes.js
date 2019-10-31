const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); // para realizar validações no update, isnerção
const usuarioController = require('../controllers/usuario-controllers');

// criando
router.post('/', [
    check('usuario[nome]').isLength({ min: 3, max: 32 }).withMessage('O nome deve ter ao minimo 3 letras'),
    check('usuario[email]').isEmail().withMessage('O email deve ser valido'),
    check('usuario[senha]').isLength({ min: 7, max: 25 }).withMessage(' A senha deve possuir entre 7 a 25 caracters')
], usuarioController.createUsuario);

// teste renderizar usuario
router.get('/', (req, res, next) =>{ // foi trocado o app.get por router.get
    const usuarioData = usuarioController.getData();
    console.log(usuarioData);
    res.render('usuario', usuarioData); // n tirar

});

module.exports = router;