const express = require('express');
const mongoose = require('mongoose'); // para usar o mongoose como gerenciador
require('dotenv').config();
const path = require('path');
//const consign = require('consign'); // teste com auto laod de arquivo
//app
const app = express();

app.use(express.json()); // esta incluindo apra ter controle que oque seja enviado apra  obanco seja modelo json
app.use(express.urlencoded({extended: true})) // mesma coisa que acima, e a validação é feito no mentions-routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database, configurando para conectar no atlas
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { // veja ele dando permissão para criar classes e alterar
    useNewUrlParser: true,
      useFindAndModify: false,
       useCreateIndex: true,
       useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose default connection is open')
});

db.on('error', err => {
    console.log(`Mongoose default connection has ocurred \n ${err}`);
});

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Mongoose default connnection is disconnected due to application termination')
    });
    process.exit(0);
});
// load models,  esta importando o mentions para que todo o programa passo usalo
const Mentions = require('./models/mentions');
const Usuario = require('./models/usuario');
//app.use('/mentions', Mentions)

//ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// LOAD DAS ROUTES
const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes); // veja que esse é o index, então só é /
//app.get('/', indexRoutes); //
const mentionsRoutes = require('./routes/mentions-routes');
app.use('/mentions', mentionsRoutes);

// importando o usuario apra uso
const usuarioRoutes = require('./routes/usuario-routes');
app.use('/usuario', usuarioRoutes);

// TESTE AUTO LOAD
/* não funcional
consign().include('models')
  .then('controllers')
  .then('routes')
  .then('repositories')
  .into(app);
*/

module.exports = app;