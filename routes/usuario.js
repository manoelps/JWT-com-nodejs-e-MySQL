const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken'); //modulo para controle do token de login
const bcrypt = require('bcryptjs'); //modulo para criptografia de senha

const { eAdmin } = require('../middlewares/auth'); //Middleware para verificar se o usuario está logado
const Usuario = require('../models/Usuario'); //importa a model Usuario para que seja possivel trabahar com a tabela usuarios

//! LISTAR TODOS OS USUARIOS
//Middleware
router.get('/users', eAdmin, async (req, res) => {

    //Busca todos os usuarios e organiza do ID maior para o menor
    //. todos os dados serao armazenados em: usuarios
    await Usuario.findAll({ order: [['id', 'DESC']] }).then(function (usuarios) {
        return res.json({
            erro: false,
            usuarios: usuarios
        });
    }).catch(function (error) {
        return res.json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!"
        });
    });
});

//! BUSCAR
router.get('/search/:id', eAdmin, async (req, res) => {

    //usar req.params porque está vindo os dados pela url
    await Usuario.findByPk(req.params.id).then(
        usuario => {
            return res.json({
                erro: false,
                usuario: usuario
            });
        }
    ).catch(function (error) {
        return res.json({
            erro: true,
            mensagem: "Erro: Usuário não encontrado!"
        });
    });
})

//! CADASTRAR
router.post('/create', async (req, res) => {

    var dados = req.body; //pego todos os dados que vem no corpo da requisição

    //criptografa a senha e devolto a senha já criptografda para a variavel dados na mesma posição, no caso senha
    dados.senha = await bcrypt.hash(dados.senha, 8); //criptografa a senha com a força 8

    await Usuario.create(dados).then(function () {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado com sucesso!"
        });
    }).catch(function (error) {
        return res.json({
            erro: true,
            mensagem: "Erro: Usuario não cadastrado!"
        });
    });

});

//! EDITAR
router.put('/update', eAdmin, async (req, res) => {

    //pega todos os dados e coloca na variavel dados
    var dados = req.body;

    //criptografando a senha e retona a mesma para a posicao senha nos dados
    dados.senha = await bcrypt.hash(dados.senha, 8);

    //edite na tabela usuario os dados onde o ID for = ao dados.id
    //await NOME DA MODEL.update
    await Usuario.update(dados, { where: { id: dados.id } }).then(function () {
        return res.json({
            erro: false,
            mensagem: "Usuário editado com sucesso!"
        });
    }).catch(function (error) {
        return res.json({
            erro: true,
            mensagem: "Error: Os dados não foram alterados!"
        });
    });

});

//! DELETAR
router.delete('/delete/:id', eAdmin, async (req, res) => {

    //deleta na tabela usuario os dados onde o ID for = ao dados.id
    //await NOME DA MODEL.delete
    await Usuario.destroy({ where: { id: req.params.id } }).then(function () {
        return res.json({
            erro: false,
            mensagem: "Usuário removido com sucesso!"
        });
    }).catch(function (error) {
        return res.json({
            erro: true,
            mensagem: "Error: Erro ao remover o usuário!"
        });
    });

});

//Exporta a constante router (esta contem todas as rotas do arquivo)
module.exports = router;