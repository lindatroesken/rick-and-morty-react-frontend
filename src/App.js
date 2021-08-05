import './App.css'
import Header from './components/Header'

import CharacterGallery from './components/CharacterGallery'
import { useEffect, useState } from 'react'
import { fetchAllCharacters } from './services/fetchAllCharacters'
import Search from './components/Search'

function App() {
  const heading = 'Character Gallery'

  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState('')
  const [checkAlive, setCheckAlive] = useState(false)

  useEffect(() => {
    fetchAllCharacters()
      .then(characters => setCharacters(characters))
      .catch(error => console.log(error))
  }, [])

  const filteredCharactersByName = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  )
  const filteredCharactersAlive = filteredCharactersByName.filter(
    character => !checkAlive || (checkAlive && character.status === 'Alive')
  )

  const handleSearch = event => {
    setSearch(event.target.value)
  }
  const handleIsAlive = () => {
    setCheckAlive(!checkAlive)
  }

  return (
    <div>
      <Header title={heading} />
      <Search
        count={filteredCharactersAlive.length}
        search={search}
        handleSearch={handleSearch}
        checkedAlive={checkAlive}
        handleIsAlive={handleIsAlive}
      />
      {filteredCharactersAlive.length === 0 && <p>no characters found 🙆‍♀️</p>}
      {filteredCharactersAlive.length > 0 && (
        <CharacterGallery charcters={filteredCharactersAlive} />
      )}
    </div>
  )
}

export default App
