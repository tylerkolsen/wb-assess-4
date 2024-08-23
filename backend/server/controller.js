import TEST_DATA from "./testData"

const handlerFunctions = {

    getPokemon: (req, res) => {
        res.send({
            message: "Here are the pokemon",
            pokemon: TEST_DATA
        })
    }
}

export default handlerFunctions