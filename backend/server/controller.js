import TEST_DATA from "./testData.js"
import apiConvert from "./apiConvert.js"

let globalId = 2

const handlerFunctions = {

    getPokemon: (req, res) => {
        res.send({
            message: "Here are the pokemon",
            pokemon: TEST_DATA
        })
    },

    addPokemon: (req, res) => {
        // Get values from req.body
        const { nickname, level, pokeName, pokeNum, sprite, ability, type } = req.body
        // Create a new object with those values
        const newPokemon = {
            id: globalId,
            nickname,
            level,
            pokeName,
            pokeNum,
            sprite,
            ability,
            type
        }
        // Increment globalId for next invoice
        globalId++
        // Add the newInvoice object to TEST_DATA
        TEST_DATA.push(newPokemon)
        console.log(TEST_DATA)
        // Send response
        res.send({
            message: 'New Pokemon added successfully',
            newPokemon: newPokemon
        })
    }
}

export default handlerFunctions