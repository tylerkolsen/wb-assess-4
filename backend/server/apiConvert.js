import axios from "axios"
import TEST_DATA from "../../docs/data-mockup.js"

// This is now superfluous, but I want to keep it in to show my process for
// figuring out how to get the poke API request to work

// I want to make a call to the pokemon API, and convert data into a form
// to be used by my app.

// I expect to send nickname and level. For the actual API request, I want to 
// send either the name or number. I'm going to have logic to disable/remove
// the input of the one not in use

let globalId = 2

const apiConvert = (nickname, level, pokeName, pokeNum) => {
    let pokeData = {}

    pokeName && pokeNum ? (
        alert('Please put in a Pokemon name or number')
    ) : (

    // This ternary statement determines whether pokeName has a value 
    // assigned. If so, it sends an API request via the name, otherwise
    // the number. This then builds the empty object pokeData into the correct
    // syntax to be used in the 'database'
    pokeName ? (
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then((res) => {
                pokeData.id = globalId
                pokeData.nickname = nickname
                pokeData.level = level
                pokeData.pokeName = res.data.name
                pokeData.pokeNum = res.data.id
                pokeData.sprite = res.data.sprites
                pokeData.ability = res.data.abilities
                pokeData.type = res.data.types
                globalId++
                // I want to add the new data to our 'database' TEST_DATA
                

            }
                
            )
    ) : (
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNum}`)
            .then((res) => {
                pokeData.id = globalId
                pokeData.nickname = nickname
                pokeData.level = level
                pokeData.pokeName = res.data.name
                pokeData.pokeNum = res.data.id
                pokeData.sprite = res.data.sprites
                pokeData.ability = res.data.abilities
                pokeData.type = res.data.types
                globalId++
                // I want to add the new data to our 'database' TEST_DATA
               
            }

            )

    ))
}

export default apiConvert