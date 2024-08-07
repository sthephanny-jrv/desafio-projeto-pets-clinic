const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor')

/*router.get('/tutors', (req, res) => {
  res.send('Deu certo.');
  //res.json(banco de dados)
})*/

router.get('/tutors', function (req, res) {
  Tutor.findAll({ raw: true })
    .then((tutors) => {
      tutors.forEach(tutor => {
        delete tutor.createdAt
        delete tutor.updatedAt
      });
      res.json(tutors)
    })
    .catch((error) => console.log(error))
})

router.post('/tutor', (req, res) => {
  let {name, phone, email, date_of_birth, zip_code} = req.body;// todos os dados vão vir por essa propriedade aqui da requisição.
  Tutor.create({
    name,
    phone,
    email,
    date_of_birth,
    zip_code
})
.then(() => res.redirect('/'))
.catch(err => console.log(err));
})
    

module.exports = router;


/*let teste = [];
router.post('/tutor', (req, res) => {
  let {name, phone, email, date_of_birth, zip_code} = req.body;// todos os dados vão vir por essa propriedade aqui da requisição.
  teste.push(name);
  teste.push(String(phone));
  teste.push(email);
  teste.push(String(date_of_birth))
  teste.push(String(zip_code));
  res.json(teste);
})*/
