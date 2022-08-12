import React, { useEffect, useState } from 'react'

import { fetchJoke } from '../apiClient'

function App() {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    fetchJoke()
      .then((data) => {
        setJoke(data)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])
  console.log('joke.joke', joke.joke)
  return (
    <>
      <h1>{joke.joke}</h1>
    </>
  )
}

export default App
