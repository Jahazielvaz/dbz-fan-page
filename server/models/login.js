const Sequelize = require('sequelize');
const sequelize = new Sequelize('trialdb', 'KupidoExportLLC', {
  dialect: 'postgres'
})


sequelize
.authenticate()
.then(function(){
  console.log('Connection has been established');
})
.catch(function(err){
  console.log('Connection has failed at', err);
})

const Login = sequelize.define('login', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.INTEGER
})


module.export = Login;
