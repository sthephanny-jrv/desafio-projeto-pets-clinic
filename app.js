const express = require('express')
const app = express();
const port = 5000;
const conn = require('./db/conn');

const Tutor = require('./models/Tutor');
const Pet = require('./models/Pet');

app.use(
    express.urlencoded({
      extended: true,
    }),
  )
app.use(express.json())

//app.use('/', tutorRouter)
//app.use('/pet', petRouter)
app.get('/', (req, res) => {
    res.send('Rota Raiz');
});

conn.sync().then(()=>{
    app.listen(port, ()=> {
        console.log(`Application running on port: ${port}`)
    });
}).catch((error)=> console.log(error))

