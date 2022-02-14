const express = require('express');
const petStoreController = require('../controller/petStore.controller');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Hi, welcome !'});
});

router.get('/petStores', petStoreController.listPetStore);
router.post('/petStores', petStoreController.insertPetStore);
router.put('/petStores/:id', petStoreController.updatePetStore);
router.delete('/petStores/:id', petStoreController.deletePetStore);

module.exports = router;    