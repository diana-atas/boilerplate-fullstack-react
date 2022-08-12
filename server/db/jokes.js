const connection = require('./connection')

function getJokes(db = connection) {
  return db('joke').select()
}

module.exports = {
  getJokes,
}
