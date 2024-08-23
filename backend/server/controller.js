import TEST_DATA from "../../docs/data-mockup.js"
import apiConvert from "./apiConvert.js"

let data = TEST_DATA

let globalId = 2

const handlerFunctions = {

    getPokemon: (req, res) => {
        res.send({
            message: "Here are the pokemon",
            pokemon: data
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
        data.push(newPokemon)
        // Send response
        res.send({
            message: 'New Pokemon added successfully',
            newPokemon: newPokemon
        })
    },

    deletePokemon: (req, res) => {
        // destruct the value of 'id' from the params
        const { id } = req.params
        // Filter out the invoice with that id from TEST_DATA
        data = data.filter((pokemon) => pokemon.id !== +id)
        console.log(data)
        // Send my response
        res.send({
            message: 'Pokemon deleted',
            pokemon: data
        })
    },

    editPokemon: (req, res) => {
        // Grab invoice data from req.body
        const { id, nickname, level, pokeName, pokeNum, sprite, ability, type } = req.body
        // Find index of this pokemon by its id
        const idx = data.findIndex((poke) => poke.id === +id)
    
        // Grab that pokemon at the idx
        let pokemon = data[idx]
        
        // Update its values
        pokemon.nickname = nickname
        pokemon.level = level
        pokemon.pokeName = pokeName
        pokemon.pokeNum = pokeNum
        pokemon.sprite = sprite
        pokemon.ability = ability
        pokemon.type = type
      
        res.send({
            message: 'pokemon updated successfully',
            updatedPokemon: pokemon
        })
    }
}

export default handlerFunctions