const express = require('express'); // la no server ele definou '/' como a primeira rota, agora o index-routes é quem cuida dela
const router = express.Router();

/*
router.get('/', (req, res, next) => { 
    res.status(200).send({
        title: 'Tehei',
        version: '1.0.0'
    });
});
 */
router.get('/', (req, res, next) => { // veja como perdeu o function
    res.render('index', { // antes estava sender, ou seja só enviando dados para o servidor, agora o renderdiz que vamos renderimas dados (html)
        title: "Tehei",
       version: "0.0.0",
    });

});



module.exports = router;