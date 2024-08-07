const express = require('express');
const router = express.Router();

router.get('/pet', (req, res) => {
  res.send('Teste pet1');
})

module.exports = router;