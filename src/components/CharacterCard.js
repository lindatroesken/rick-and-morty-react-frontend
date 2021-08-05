import './CharacterCard.css'

export default function CharacterCard(props){
    return <section className="character-card">
        <h1 className="character-card__title">{props.character.name}</h1>
        <img className="character-card__image" src={props.character.image} alt={"Image of character "+ props.character.name}/>
        <div className="character-card__properties ">
            <div>Origin: {props.character.origin.name}</div>
            <div>Species: {props.character.species}</div>
            <div>Status: {props.character.status}</div>
        </div>
    </section>
}