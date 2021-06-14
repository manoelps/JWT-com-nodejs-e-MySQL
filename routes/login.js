const express = require("express");
const router = express.Router();

const jwt = require('jsonwebtoken'); //modulo para controle do token de login
const bcrypt = require('bcryptjs'); //modulo para criptografia de senha
require('dotenv').config(); //Permite usar variaveis ambiente para aumentar seguranca do meu projeto

const { eAdmin } = require('../middlewares/auth'); //Middleware para verificar se o usuario está logado
const Usuario = require('../models/Usuario'); //importa a model Usuario para que seja possivel trabahar com a tabela usuarios

//! FAZ LOGIN NA APLICAÇÃO
router.post('/login', async (req, res) => {

    //busca apenas 1 registro onde o email seja = ao usuario passado na posicao usuario no body
    const usuario = await Usuario.findOne({ where: { email: req.body.usuario } });

    //verifica se o usuario veio null
    if (usuario === null) {
        return res.json({
            erro: true,
            mensagem: "Erro: Usuário ou senha incorreta!"
        });
    }

    //usa compare do bcrypt para comparar :
    //Usa a negação ! se a senha enviada não for iqual a senha que está no banco, usa o model: usuario.CAMPO DE SENHA
    if (!(await bcrypt.compare(req.body.senha, usuario.senha))) {
        return res.json({
            erro: true,
            mensagem: "Erro: Usuário ou senha incorreta!"
        });
    }

    var privateKey = process.env.SECRET; //Esta chave privada deve ser unica no projeto, para que nenhum projeto na internet o tenha

    //cria o token, passando como parametro, o ID do usuario vindo do banco de dados + a chave primaria
    var token = jwt.sign({ id: usuario.id }, privateKey, {
        expiresIn: '7d' //7d = 7 dias coloca o tempo de vida do token, se usar 600s (em segundos) = 10 minutos
    });

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token: token
    });

});

//Exporta a constante router (esta contem todas as rotas do arquivo)
module.exports = router;