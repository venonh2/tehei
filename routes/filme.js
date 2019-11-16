module.exports = function (app) {
    var filme = app.controllers.filme;
   // app.get('/filme', filme.index);
   	app.post('/filme/create', filme.create);

 };