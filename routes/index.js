const express = require('express');
const petstoreController = require('../controller/petStore.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Hi, welcome !'});
});

router.get('/todo', petStoreController.listPetStore);
router.post('/todo', petStoreController.insertPetStore);
router.put('/todo/:id', petStoreController.updatePetStore);
router.delete('/todo', petStoreController.deletePetStore);

module.exports = router;