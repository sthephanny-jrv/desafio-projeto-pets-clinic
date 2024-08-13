const express = require('express');
const router = express.Router();
const Tutor = require('../models/Tutor')
const Pet = require('../models/Pet');


router.get('/tutors', async (req, res) => { //Liste todos os tutores
  try {
    const tutors = await Tutor.findAll({raw: true});
    for (const tutor of tutors){
      delete tutor.createdAt
      delete tutor.updatedAt
      tutor.pets = []
      const idTutor = tutor.id 
      const petsTutor = await Pet.findAll({raw: true})
      const pet = petsTutor.filter((p) => {
        delete p.createdAt
        delete p.updatedAt
        if(idTutor === p.tutorId){
          return p
        }
      })
      tutor.pets.push(...pet); 
    }    
    res.json(tutors)
  } catch (error) {
    console.log(error)
  }
})

router.post('/tutor', async (req, res) => { //Crie um novo tutor
  try {
    let {name, phone, email, date_of_birth, zip_code} = req.body;
    const tutorCreated = await Tutor.create({
      name,
      phone,
      email,
      date_of_birth,
      zip_code
    })
    let {createdAt, updatedAt, ...responseReturn} = tutorCreated.toJSON()
    res.json(responseReturn)

  } catch (error) {
    console.log(error)
  }
})
  
router.put('/tutor/:id', async (req, res) => { //Atualiza um tutor existente
  try {
    const tutorId = req.params.id
    let {name, phone, email, date_of_birth, zip_code} = req.body
    const newTutor = {
      name,
      phone,
      email,
      date_of_birth,
      zip_code
    }
    
    await Tutor.update(newTutor, { where: {id: tutorId}});
    
    res.json(newTutor)

  } catch (error) {
    console.log(error)
  }
})

router.delete('/tutor/:id', async (req, res) => { //Deleta um tutor
  try {
    const tutorId = req.params.id
    await Pet.destroy({where: {tutorId: tutorId}})
    await Tutor.destroy({where: {id: tutorId}})
    return res.sendStatus(204);

  } catch (error) {
    console.log(error)
  }
})

module.exports = router;

