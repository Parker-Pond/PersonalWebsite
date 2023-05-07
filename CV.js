const newbyRoster= ["pikachu", "squirtle", "charmander", "charmander"]

const updatedRoster = ["pikachu", "squirtle", "charmander", "bulbasaur", "pidgey", "ratata"] 

function pokeBagLimit(pokemon, newpokemon){
     if (pokemon.length<= 6 && newpokemon == 0){
        let update = pokemon.slice() 
        return update
    } else if (pokemon.length < 6 && newpokemon !=0){
        let update = pokemon.push(newpokemon)
        return pokemon.slice() + "two"
    } 
     else if (pokemon.length = 6){
        let update = pokemon.pop()+ pokemon.push(newpokemon);
        return pokemon.slice()
    } 
    else{
        return "well that didn't work"
    }
}

console.log(pokeBagLimit(newbyRoster, ""))
console.log(pokeBagLimit(updatedRoster, "Mewtou"))