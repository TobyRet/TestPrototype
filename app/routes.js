const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.post('/sign-in', function(req, res) {
  res.redirect('/allocations')
})

router.get('/prisoner/:id', function(req, res) {
  let data = {
    prisoner_name: 'Toby',
    dob: '24/01/1980',
    nationality: 'New Zealander'
  }

  res.render('prisoner', data)
})

module.exports = router
