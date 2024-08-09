const express = require('express')
const app = express();
const port = 5000;
const conn = require('./db/conn');
const tutorRouter = require('./routes/tutors');
const petRouter = require('./routes/pets');

const Tutor = require('./models/Tutor');
const Pet = require('./models/Pet');

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
app.use(express.json())


app.use('/', tutorRouter);
app.use('/pet', petRouter);

app.get('/', (req, res) => {
    res.send('Rota Raiz');
});

conn
  .sync()
  //.sync({ force: true}) //Remove todas as tabelas e reclia as tabelas, apagando todos os dados
  .then(()=>{
    app.listen(port, ()=> {
        console.log(`Application running on port: ${port}`)
    });
}).catch((error)=> console.log(error))

