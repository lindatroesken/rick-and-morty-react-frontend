import './App.css'
import Header from './components/Header'

import response from './character-response.json'
import CharacterGallery from './components/CharacterGallery'
import { useState } from 'react'

function App() {
  const heading = 'Character Gallery'
  // const characters = response.results

  const [characters, setCharacters] = useState([])

  const loadCards = () => {
    setCharacters(response.results)
  }
  const deleteCards = () => {
    setCharacters([])
  }

  return (
    <div>
      <Header title={heading} />
      <button onClick={loadCards}>load</button>
      <button onClick={deleteCards}>delete</button>
      <CharacterGallery charcters={characters} />
    </div>
  )
}

export default App
