// Basic object structure
// {
//  id: num,
//  nickname: str,
//  level: num,
//  pokeName: str,
//  pokeNum: num,
//  sprite: {},
//  ability: [{}],
//  type: [{}]
// }

// API shortcuts
// PokeName: .name " "
// PokeNum: .id num
// Sprite: .sprites {}
// Ability: .abilities [{}]
// Type: .types [{}]

let TEST_DATA = [
    {
        id: 0, 
        nickname: '', 
        level: 5, 
        pokeName: 'larvesta', 
        pokeNum: 636, 
        sprite: {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/636.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/636.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/636.png",
            "front_shiny_female": null,
        },
        ability: [
            {
              "ability": {
                "name": "flame-body",
                "url": "https://pokeapi.co/api/v2/ability/49/"
              },
              "is_hidden": false,
              "slot": 1
            },
            {
              "ability": {
                "name": "swarm",
                "url": "https://pokeapi.co/api/v2/ability/68/"
              },
              "is_hidden": true,
              "slot": 3
            }
          ], 
          type: [
            {
              "slot": 1,
              "type": {
                "name": "bug",
                "url": "https://pokeapi.co/api/v2/type/7/"
              }
            },
            {
              "slot": 2,
              "type": {
                "name": "fire",
                "url": "https://pokeapi.co/api/v2/type/10/"
              }
            }
          ] 
    },
    {
        id: 1, 
        nickname: '', 
        level: 5, 
        pokeName: 'snivy', 
        pokeNum: 495, 
        sprite: {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/495.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/495.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/495.png",
            "front_shiny_female": null
        }, 
        ability: [
            {
              "ability": {
                "name": "overgrow",
                "url": "https://pokeapi.co/api/v2/ability/65/"
              },
              "is_hidden": false,
              "slot": 1
            },
            {
              "ability": {
                "name": "contrary",
                "url": "https://pokeapi.co/api/v2/ability/126/"
              },
              "is_hidden": true,
              "slot": 3
            }
          ], 
        type: [
            {
              "slot": 1,
              "type": {
                "name": "grass",
                "url": "https://pokeapi.co/api/v2/type/12/"
              }
            }
          ]
    }
]

export default TEST_DATA