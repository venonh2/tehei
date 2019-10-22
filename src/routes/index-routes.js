const express = require('express'); // la no server ele definou '/' como a primeira rota, agora o index-routes é quem cuida dela
const router = express.Router();

router.get('/', (req, res, next) => { 
    res.status(200).send({
        title: 'MentionsAPI',
        version: '1.0.0'
    });
});

module.exports = router;