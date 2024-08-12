<h1 align="center">Projeto Pets Clinic</h1>
<p><img alt="Static Badge" src="https://img.shields.io/badge/license%20-%20ISC%20-%20green"> <img alt="Static Badge" src="https://img.shields.io/badge/version-1.0.0-blue"> <img alt="Static Badge" src="https://img.shields.io/badge/release%20date-august-turquoise"></p>

<p align="center">Este repositório é do projeto Pets Clinic do desafio da semana 4 da trilha NODE.JS + AWS_JUL24.</p>

<p align="center">
    <a href="#sobre">Sobre</a> /
    <a href="#tecnologias">Tecnologias</a> /
    <a href="#pré-requisitos">Pré-requisitos</a> /
    <a href="#passo-a-passo">Passo a passo</a> /
    <a href="#rotas">Rotas</a> /
    <a href="#autor">Autor</a>
</p>
 
# Sobre

Este projeto é a parte Back-End de uma Clínica de Animais. Nele podem ser feitas criações e atualizações de tutores e seus pets, deletar algum tutor (desvinculando o tutor e seus pets) ou deletar algum pet de um tutor específico. Além disso, nele também é possível mostrar todos os tutores da clínica, juntamente com seus pets relacionados.

# Tecnologias

Foi desenvolvido na linguagem [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) juntamente com [Node.js](https://nodejs.org/en/about), o framework [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction), e o Object-Relational Mapping (ORM) [Sequelize](https://sequelize.org/) conectado ao banco de dados relacional [MySQL](https://www.mysql.com/).

Toda a documentação foi feita com [Swagger](https://swagger.io/specification/).

Versões das dependências utilizadas:
- express: 4.19.2
- mysql2: 3.11.0
- sequelize: 6.37.3
- nodemon: 3.1.4
- swagger-ui-express: 5.0.1
- yamljs: 0.3.0

OBS.: Caso o código não funcione devido à atualizações das versões das dependências (versão atual), instale cada dependência com a versão utilizada na criação do projeto. Assim o código funcionará sem nenhum erro.

# Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en), [XAMPP](https://www.apachefriends.org/) e [Postman](https://www.postman.com/downloads/).

Além disso, é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

# Passo a passo

Passo a passo para executar o projeto:

- Baixe o projeto em arquivo zip e abra a pasta no editor de código ou clone este repositório usando o [URL](https://github.com/sthephanny-jrv/desafio-projeto-pets-clinic.git).

- Abra o XAMPP e inicialize o MySQL, cliando em "start".

Siga as instruções abaixo para rodar o projeto:

1 - No seu editor de código abra o terminal da pasta do projeto.

2 - Digite o comando: npm install. Para baixar os pacotes/dependências do projeto.

3 - Para rodar o projeto escolha um dos comandos abaixo e digite no terminal do projeto:
- npm start
- node app.js

Feito isso a plicação deve estar rodando na porta 5000 (localholst:5000)

4 - Abra o Postman para utilizar o projeto através das rotas.

# Rotas 

Rotas da API REST

Para os tutores:
- GET /tutors -> Liste todos os tutores
- POST/tutor -> Crie um novo tutor
- PUT/tutor/:id -> Atualiza um tutor existente
- DELETE/tutor/:id -> Deleta um tutor

Para os pets:
- POST/pet/:tutorId-> Cria um pet e adiciona um tutor a ele
- PUT/pet/:petId/tutor/:tutorId -> Atualiza a informação de um pet
- DELETE/pet/:petId/tutor/:tutorId -> Deleta um pet de um tutor

# Autor
Projeto desenvolvido por Sthephanny Jamilly. [Veja meu LinkedIn](https://www.linkedin.com/in/sthephanny-jamilly)

