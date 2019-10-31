//const mongoose = require('mongoose'); // caiu em desuso pq o mention-repository tem eles e estamos importando ele
//const Mentions = mongoose.model('Mentions');
const { validationResult } = require('express-validator'); // importando o express-validator, para valdiar dados inseridos da maneira correta ou retornar msg de erro
const repository = require('../repositories/mentions-repository');

//list
exports.listMentions = async (req, res) => {
    try {
        const data = await repository.listMentions(); // veja agora só chama a fução de listar que foi movida

        res.status(200).send(data); // veja o '-_id' diz, cara não traga ele, serve para outras tbm
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar as menções' });
    }

};

// create
exports.createMention = async (req, res) => {
    const { errors } = validationResult(req); // para realizar a validação
    if (errors.length > 0) { // talvez de rro
        return res.status(400).send({ message: errors })
    };
        try {
            await repository.createMention({ // veja o repository só chama a criação mas ele aidna passo os parametros
                friend: req.body.friend, // atenção, estava errado
                mention: req.body.mention
            });

            //  console.log(mention);

            // await mention.save();

            res.status(201).send({ message: 'Menção cadastrada com sucesso' });
        } catch (e) {
            res.status(500).send({ message: 'Falha ao cadastrar a menção' });
        };
};
// update
exports.updateMention = async (req, res) => {
    const { errors } = validationResult(req);
    if(errors.length > 0){
        return res.status(400).send({ message: errors })
    };

    try{
        //const data = awat.repository.updateMentions(req.params.id, req.body); // veja que é passado um id e um valor parao body, ou seja o objeto que sera atualziado
        await repository.updateMention(req.params.id, req.body);
         res.status(200).send({ //return na frente talvez
            message: 'Menção atualizada com sucesso'
        });
    } catch(e){
            res.status(500).send({message: 'Falha ao atualizar a menção'}) // return na frente tabez
    };
};

// delete
exports.deleteMention = async (req, res) => { // ele não colocou tratamento de erro, pq?
    try{
        await repository.deleteMention(req.params.id);
        res.status(200).send({
            message: 'Menção deletada com sucesso '
        });

    } catch(e){
        res.status(500).send({ message: 'Falha ao deletar menção'})
    };
}