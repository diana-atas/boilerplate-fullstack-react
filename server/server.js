const express = require('express')
const path = require('path')
// const request = require('superagent')

const jokeRoutes = require('./routes/jokes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/api/v1/jokes', jokeRoutes)

module.exports = server
