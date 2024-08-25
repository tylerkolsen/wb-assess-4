import './App.css'
import PokeTable from './Components/PokeTable'
import TEST_DATA from '../docs/data-mockup'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
    // This will grab the TEST_DATA from the server
    // Due to how state works, from the display in the code along, we need to add
    // useEffect here and in the InvoiceTable.jsx files in order to get the
    // data to pass down correctly
    const [pokemonData, setPokemonData] = useState([])

    useEffect(() => {
        axios.get('/api/pokemon')
        .then((res) => {
            setPokemonData(res.data.pokemon)
        })
    }, [])

    return (
    <>
        <img id="titlePic" src="https://fontmeme.com/permalink/240825/9c559741a002c6890b61592aba2573dc.png" alt="" />
        <div>
            <PokeTable initialData={pokemonData}/>
        </div>   
    </>
    )
}

export default App
