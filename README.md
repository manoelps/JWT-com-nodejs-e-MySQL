# JWT-com-nodejs

SEQUENCIA DO PROJETO

=> Criar Projeto: 
npm init

=> Gerenciar as requisições, rotas e URLs [https://www.npmjs.com/package/express]: 
npm install express --save

=> Instalar a dependente para JWT, [https://www.npmjs.com/package/jsonwebtoken]: 
npm install jsonwebtoken --save

=> Gerencia variáveis de ambiente [https://www.npmjs.com/package/dotenv]: 
npm install dotenv --save

=> Permitir acesso a API [https://www.npmjs.com/package/cors]: 
npm install cors --save

=> Criando o banco de dados MySQL
CREATE DATABASE supermercado CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

=> Instala o drive do banco de dados MySQL [https://www.npmjs.com/package/mysql2]: 
npm install mysql2 --save

=> Instalar a biblioteca sequelize para gerenciar o banco de dados [https://www.npmjs.com/package/sequelize]: 
npm install sequelize --save

=> Instalar o modulo para criptografar a senha [https://www.npmjs.com/package/bcrypt]: 
npm install bcryptjs --save

=> Rodar o projeto: 
node app.js ou nodemon app.js

Consumindo a API:

ROTAS:

# login
[POST] '/autenticacao/login' 

{
    "usuario": "manoelps@live.com",
    "senha": "123456"
}

# cadastrar usuario
[POST] '/administrativo/create' 

{
    "nome":  "Manoel Pereira dos Santos",
	"email": "mpsantos@live.com",
    "senha": "123456"
}

# listar usuarios
[GET] '/administrativo/users' 

# buscar usuario
[GET] '/administrativo/search/1'

# atualizar cadastro
[PUT] '/administrativo/update' 

{
	"id": 1,
    "nome":  "Manoel Pereira dos Santos",
	"email": "mpsantos@live.com",
    "senha": "654321"
}

# remover usuario
[DELETE] '/administrativo/delete/1'