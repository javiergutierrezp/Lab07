const express = require('express')
const wizards = require('./controllers/wizards')

const router = express.Router()

router.get('/wizards', wizards.getWizards)
router.get('/wizards/:id', wizards.getWizard)
router.post('/wizards', wizards.createWizard)
router.patch('/wizards/:id', wizards.updateWizard)
router.delete('/wizards/:id', wizards.deleteWizard)

module.exports = router