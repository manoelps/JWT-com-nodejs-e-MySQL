const { Sequelize } = require('sequelize');
require('dotenv').config(); //Permite usar variaveis ambiente para aumentar seguranca do meu projeto

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
});

// sequelize.authenticate().then(function () {
//     console.log("conexao com o banco realizada com sucesso");
// }).catch(function (error) {
//     console.log("erro ao conectar o banco de dados: " + error);
// });

//exporta a conexao com o banco de dados
module.exports = sequelize;