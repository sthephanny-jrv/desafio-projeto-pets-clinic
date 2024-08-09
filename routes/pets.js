const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');

router.post('/:tutorId', async (req, res) => { //Cria um pet e adiciona um tutor a ele
  try {
    let {name, species, carry, weight, date_of_birth} = req.body; 
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

router.put('/:petId/tutor/:tutorId', async (req, res) => { //Atualiza a informação de um pet
  try {
    const petId = req.params.petId
    const tutorId = req.params.tutorId
    let {name, species, carry, weight, date_of_birth} = req.body
    const newPet = {
      name,
      species,
      carry,
      weight,
      date_of_birth
    }
    
    await Pet.update(newPet, { where: {id: petId, tutorId: tutorId}});
    
    res.json(newPet)

  } catch (error) {
    console.log(error)
  }
})

router.delete('/:petId/tutor/:tutorId', async (req, res) => { //Deleta um pet de um tutor
  try {
    const petId = req.params.petId
    const tutorId = req.params.tutorId
    
    await Pet.destroy({ where: {id: petId, tutorId: tutorId}})
    
    return res.sendStatus(204);

  } catch (error) {
    console.log(error)
  }
})

module.exports = router;