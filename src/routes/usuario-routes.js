const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); // para realizar validações no update, isnerção
const usuarioController = require('../controllers/usuario-controllers');

// criando
router.post('/', [
    check('nome').isLength({ min: 3, max: 32 }).withMessage('O nome deve ter ao minimo 3 letras'),
    check('email').isEmail().withMessage('O email deve ser valido'),
    check('senha').isLength({ min: 7, max: 25 }).withMessage(' A senha deve possuir entre 7 a 25 caracters')
], usuarioController.createUsuario);

// teste renderizar usuario
router.get('/usuario', (req, res, next) =>{ // foi trocado o app.get por router.get
    const usuarioData = usuarioController.getData();
    res.render('usuario', usuarioData);
});

module.exports = router;