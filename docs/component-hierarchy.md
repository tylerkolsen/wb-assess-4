Component Hierarchy

PokemonTable
 - TableHeader
 - TableRow
    - EditRowButtons (Delete/Change, Save)
        -Functionality to change between
        - Delete Function
        - Change Function
        - Save Function
    - Nickname
        - Edit on Change
        - Text display otherwise
    - Level
        - Edit on Change
        - Text display otherwise
    - PokeName
        - Edit on Change (Exclusive with PokeNum)
            -Update API info
        - Text Display otherwise
    - PokeNum
        - Edit on Change (Exclusive with PokeName)
            - Update API info
        - Text Display otherwise
    - Sprite
        - Nothing/filler on Change
        - Click on image to change sprite to shiny
    - Ability
        - Nothing/filler on Change
        - Dropdown menu to change ability from API (possibly highlight hidden ability)
    - Type
        - Nothing on Change
        - Display on regular (Maybe grab authentic pic from another source… if time)
 - TableFooter
    - Add Pokemon button
        - Adds row
        - Limit of max for 6

Plan to implement functionality
    1. Table of info on backend
        a. Default information will be provided for one
        b. Other elements will be grabbed from an API request to PokeAPI, then added into an object that is added
    2. Adding a new Pokemon
        a. Get either name or number of pokemon (need logic to prevent none or both)
        b. API request using the name/number
        c. API parsed into an object that can be added
            i. Sprite, Ability and type will have an object as the value, rather than a string
        d. Add/remove entries based on id

Expected object:
{  id: (num) , nickname: (string), level: (num), pokeName: (string), pokeNum: (num), sprite: {object: 2 values (regular, shiny), ability: {Object: unknown number of them} , type: {object: 1 or two types }
