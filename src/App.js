import './App.css'
import Header from './components/Header'

import response from './character-response.json'
import CharacterGallery from './components/CharacterGallery'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from './services/fetchAllCharacters'

function App() {
  const heading = 'Character Gallery'
  // const characters = response.results

  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchAllCharacters()
      .then(characters => setCharacters(characters))
      .catch(error => console.log(error))
  }, [])

  const loadCards = () => {
    setCharacters(response.results)
  }
  const deleteCards = () => {
    setCharacters([])
  }
  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )
  const handleSearch = event => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Header title={heading} />
      <button onClick={loadCards}>load</button>
      <button onClick={deleteCards}>delete</button>
      <input onChange={handleSearch} type="text" value={search} />
      <CharacterGallery charcters={filteredCharacters} />
    </div>
  )
}

export default App
