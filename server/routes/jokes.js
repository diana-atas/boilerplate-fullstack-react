const express = require('express')

// const db = require('../db/jokes')

const router = express.Router()

// GET /api/v1/jokes
router.get('/', (req, res) => {
  try {
    res.json({ statement: 'Welcome to external APIs!' })
  } catch (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
