const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/sign-in', function(req, res) {
  res.redirect('/allocations')
})

router.get('/prisoner/:id', function(req, res) {
  let data = {
    prisonerName: 'Davidson, William',
    dob: '25/07/1985',
    nationality: 'Welsh',
    release_date: '21/05/2020',
    alerts: '3',
    mainOffence: 'Burglary',
    caseAllocation: 'NPS',
    mappaNominal: 'Yes',
    tierCalculation: 'C',
    prisonerAllocation: 'Probation Officer POM'
  }

  res.render('prisoner', data)
})

module.exports = router
