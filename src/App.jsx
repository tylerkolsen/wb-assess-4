import './App.css'
import PokeTable from './Components/PokeTable'

// API shortcuts
// PokeName: .name " "
// PokeNum: .id num
// Sprite: .sprites {}
// Ability: .abilities [{}]
// Type: .types [{}]

let TEST_DATA = [
    {id: 0, nickname: '', level: '5', pokeName: 'larvesta', pokeNum: '636', sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png', 
        ability: 'flame-body', type: 'bug, fire' }
]

function App() {

    return (
    <>
        <h2>Display your team!</h2>
        <div>
            <PokeTable />
        </div>   
    </>
    )
}

export default App
