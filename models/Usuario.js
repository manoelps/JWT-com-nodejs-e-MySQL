const Sequelize = require('sequelize');
const db = require('./db'); //Importa o arquivo de configuração do banco de dados

//Cria a model de criacao da tabela usuarios
const Usuario = db.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

//! Cria a tabela, RODAR SO UMA VEZ
//Usuario.sync();

//Exporta a model Usuario
module.exports = Usuario;