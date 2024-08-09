const express = require('express');
const router = express.Router();
//const Tutor = require('../models/Tutor');
const Pet = require('../models/Pet');

router.post('/:tutorId', async (req, res) => { //Cria um pet e adiciona um tutor a ele
  try {
    let {name, species, carry, weight, date_of_birth} = req.body; // todos os dados vão vir por essa propriedade aqui da requisição.
    const tutorId = req.params.tutorId
    const pet = await Pet.create({
        name,
        species,
        carry,
        weight,
        date_of_birth,
        tutorId
    })
    let {createdAt, updatedAt, ...responseReturn} = pet.toJSON()
    res.json(responseReturn)

  } catch (error) {
    console.log(error)
  }
}); 


module.exports = router;