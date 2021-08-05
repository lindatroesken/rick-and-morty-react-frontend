import './CharacterCard.css'
import CharacterProperties from "./CharacterProperties";

export default function CharacterCard(props){
    return <section className="character-card">
        <h1 className="character-card__title">{props.character.name}</h1>
        <img className="character-card__image" src={props.character.image} alt={"Image of character "+ props.character.name}/>
        <CharacterProperties character={props.character}/>
    </section>
}