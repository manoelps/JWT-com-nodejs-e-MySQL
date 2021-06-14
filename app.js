const express = require('express');
const app = express();

const cors = require('cors'); //controla os acessos á API

const administrativo = require("./routes/usuario"); //importa aquivo de rotas administrativas
const login = require("./routes/login"); //importa o arquivo de rota de login

app.use(express.json()); //configura o express para receber dados em json

//Configurado o cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
});

//ROTAS
app.use('/administrativo', administrativo); //Permite usar todas as rotas administrativas
app.use('/autenticacao', login); //Permite usar todas as rotas de login


//SERVER
app.listen(8081, () => {
    console.log("Server On: http://localhost:8081");
});
