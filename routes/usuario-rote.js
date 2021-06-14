const express = require("express");
const router = express.Router();

const { eAdmin } = require('../middlewares/auth'); //Middleware para verificar se o usuario está logado

const usuarioController = require("../controller/usuario-controller");

//! ROTAS
router.post('/create', eAdmin, usuarioController.createUser);
router.get('/users', eAdmin, usuarioController.getUsuarios);
router.get('/search/:id', eAdmin, usuarioController.getUser);
router.put('/update', eAdmin, usuarioController.updateUser);
router.delete('/delete/:id', eAdmin, usuarioController.deleteUser);
router.post('/logout', eAdmin, usuarioController.logout);

//Exporta a constante router (esta contem todas as rotas do arquivo)
module.exports = router;