const Sequelize = require('sequelize');
const connection = new Sequelize('trialdb', 'KupidoExportLLC', {
  dialect: 'postgres'
});

connection
.authenticate()
.then(function(){
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database: ', err);
})

const Favchars = connection.define('favchars', {
  favchar: Sequelize.STRING,
  why: Sequelize.TEXT
});

Favchars.sync({force: true})
  .then(function(){
    return Favchars;
  })

module.exports = Favchars;
