import './App.css';
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import response from './character-response.json'

function App() {
    const heading = "Character Gallery"
    const characters = response.results
    return (
        <div>
            <Header title={heading}/>
            <main className="cardboard">
                <CharacterCard character={characters[0]} />
                <CharacterCard character={characters[1]} />
                <CharacterCard character={characters[2]} />
                <CharacterCard character={characters[3]} />
                <CharacterCard character={characters[4]} />
                <CharacterCard character={characters[5]} />
                <CharacterCard character={characters[6]} />
                <CharacterCard character={characters[7]} />
                <CharacterCard character={characters[8]} />
            </main>
        </div>

    );
}

export default App;
