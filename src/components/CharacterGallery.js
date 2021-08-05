import CharacterCard from './CharacterCard'
import './CharacterGallery.css'

export default function CharacterGallery(props) {
  return (
    <section className="character-gallery">
      {props.charcters.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  )
}
