// as chamadas que estavam sendo realiadas pelo controller agora serão realizadas pelo repositry, isso é aplicação de design patterns
const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions'); // estou pegano aquele export realizado no mentions-mode, para pdoer usar aqui
// lsitando
exports.listMentions = async () => {
    const res = await Mentions.find({}, `friend mention -_id`); // antes estava só find({}), ou seja traga tudo agor estamos dizendo traga só esses dois
    return res; // veja o '-_id' diz, cara não traga ele, serve para outras tbm
};
//criando
exports.createMention = async data => {
    const mention = new Mentions(data);
    await mention.save();
};
// atualizando
exports.updateMention = async(id, data) => {
    await Mentions.findByIdAndUpdate(id, {
        $set: data
    });
};

// deletando
exports.deleteMention = async(id, data) => {
    await Mentions.findOneAndRemove(id); // delete n seria melhor ?
};