const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');

const express = require('express')
const app = express();
const port = 5000;
const conn = require('./db/conn');
const tutorRouter = require('./routes/tutors');
const petRouter = require('./routes/pets');

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
app.use(express.json())

const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', tutorRouter);
app.use('/pet', petRouter);

conn
  .sync()
  //.sync({ force: true}) //Remove todas as tabelas e reclia as tabelas, apagando todos os dados
  .then(()=>{
    app.listen(port, ()=> {
        console.log(`Application running on port: ${port}`)
    });
}).catch((error)=> console.log(error))

