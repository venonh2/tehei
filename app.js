const express = require('express'); //Framework web
const bodyParser = require('body-parser'); //Middleware para realizar o parse dos dados de formulários (request body)
const mongoose = require('mongoose');//Persistência e modelagem do banco de dados MongoDB
const path = require('path');//Utilitário para utilizar os caminhos de diretórios do projeto
const consign = require('consign');//Autoload de scripts, como por exemplo models, controllers e routes
//const methodOverride = require('method-override');//Para utilizar os verbos HTTP como PUT e DELETE
const cookieParser = require('cookie-parser');//const flash = require('express-flash-notification');//Para gerenciar notificações de uma página para outra
const session = require('express-session');//Para armazenar informações na sessão do cliente
//const error = require('./middleware/error');//Middleware para mostrar páginas "amigáveis" quando ocorre um erro ou not found
const dotenv = require('dotenv');//Utilizar as configurações de ambiente environment
dotenv.config();//Carregar as configurações de ambiente (arquivo .env)

const PORT = process.env.PORT || 3000;//A porta é definida de acordo com a variável ambiente PORT ou por padrão a porta 5000

//configurar e conectar no banco de dados mongo
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
//Armazenar a conexão realizada em uma variável global
global.db = mongoose.connection;


//Iniciar o express
var app = express();
//Configurar todos os utilitários e middlewares dentro do express (variável app)
app.use(express.static(path.join(__dirname, 'public')))
  .use(cookieParser('ntalk'))
  .use(session())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  //.use(methodOverride('_method'))
  //.use(flash(app))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

//Realizar o autoload de todos os arquivos js que estão dentro das pastas
// - /models
// - /controllers
// - /routes
consign().include('models')
  .then('controllers')
  .then('routes')
  .into(app);

//Configurar o express para redirecionar para a rota que irá renderizar a página "amigável" em caso de erro ou not found


//Finalmente exportar o express (app)
module.exports = app;




















// antigo
/*
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const path = require('path');
const consign = require('consign');
const cookieParser = require('cookie-parser');
const session = require('express-session'); // para usar o mongoose como gerenciador
require('dotenv').config();


const app = express();

//app.use(express.json()); // esta incluindo apra ter controle que oque seja enviado apra  obanco seja modelo json
//app.use(express.urlencoded({extended: true})) // mesma coisa que acima, e a validação é feito no mentions-routes

app.use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json());
//app.use(express.urlencoded({ extended: true }));

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

//app.use('/mentions', Mentions)

//ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('tehei'));
app.use(session());
// LOAD DAS ROUTES

// TESTE AUTO LOAD

consign().include('models')
  .then('controllers')
  .then('routes')
  .into(app);


module.exports = app;
*/