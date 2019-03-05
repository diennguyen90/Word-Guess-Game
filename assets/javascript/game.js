
// arrow of pokemsn
let pokemonList = ['pikachu','mew', 'squirtle','zubat', 'mew', 'dragonite'];

// choosing random pokemon
let ranPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
let chosenPokemon = ranPokemon;
let underscore = [];
let rightWord = [];
let wrongWord = [];
let guessRemaining = 10;

// Dom manipulation
let getUnderscore = document.getElementById('rightLetters');
let getWrongLetters = document.getElementById('wrongLetters');

// create undrescore for length of word
createUnderscore = () =>{
    for (let i = 0; i < chosenPokemon.length; i++){
        underscore.push('_');
    }
    return underscore;
}

// double check with user guess
// used keypress because it does lowercase whereas keydown does allcaps
document.addEventListener('keypress', (event) => {
    // converting keycodes to char
    let keyword = String.fromCharCode(event.keyCode);
    console.log(keyword);
// user guess is correct   
    if(chosenPokemon.indexOf(keyword) > -1){
        // goe into the rightword array
        rightWord.push(keyword);
        // replace underscore with the correct letter ~~~~ still working on a way to push multiple letters of the same by looping
        underscore[chosenPokemon.indexOf(keyword)] = keyword;
        // 
        getUnderscore.innerHTML = underscore.join(' ');
        if(underscore.join('') === chosenPokemon){
            alert('you win')
        }
    } else{
        // push wrong letters to an arrow
        wrongWord.push(keyword);
        // deducts guessess
        guessRemaining -= 1;
        // manipulating the DOM to put the 
        getWrongLetters[0].innerHTML = wrongWord + " ";
        console.log(wrongWord)
    }
    console.log(underscore)
    
})

createUnderscore();
getUnderscore.innerHTML = underscore.join(' ');

console.log(chosenPokemon);

