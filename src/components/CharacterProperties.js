import './CharacterProperties.css'
export default function CharacterProperties(props){
    return  <div className="character-card__properties ">
        <div>Origin: {props.character.origin.name}</div>
        <div>Species: {props.character.species}</div>
        <div>Status: {props.character.status}</div>
    </div>
}