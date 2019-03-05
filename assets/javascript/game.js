function play(){
// arrow of pokemsn
let pokemonList = ['pikachu','mew', 'squirtle','zubat', 'mew', 'dragonite'];
// choosing random pokemon
let ranPokemon = pokemonList[Math.floor(Math.random() * pokemonList.length)];
let chosenPokemon = ranPokemon;
let underscore = [];
let rightWord = [];
let wrongWord = [];
let lives = 10;
let playSound = new Audio('./assets/images/Pikachu-PIKA.wav')
console.log(playSound)
// Dom manipulation
let getUnderscore = document.getElementById('rightLetters');
let getWrongLetters = document.getElementById('wrongLetters');
let getLives = document.getElementById('lives');
document.getElementById('lives').innerHTML = lives;
document.getElementById('wrongLetters').innerHTML = '';

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
    // only alphabets are allowed ~ all other keys are null
    if(keyword !== 'a' && keyword !== 'b' && keyword !== 'c' &&keyword  !== 'd' && keyword !== 'e' &&keyword !== 'f' &&keyword !== 'g' && keyword !== 'h' && keyword !== 'i' && keyword !== 'j' &&  keyword!== 'k' 
    && keyword !== 'l' && keyword !== 'm' && keyword !== 'n' && keyword !== 'o' &&  keyword !== 'p' && keyword !== 'q' && keyword !== 'r' && keyword !== 's' && keyword !== 't' && keyword !== 'u' && keyword !== 'v' 
    && keyword !== 'w' && keyword !== 'x' && keyword !== 'y' && keyword !== 'z')
    { 
        alert('alphabets only!')
        return null;
    }
// user guess is correct   
    if(chosenPokemon.indexOf(keyword) > -1){
        // goe into the rightword array
        rightWord.push(keyword);
        // replace underscore with the correct letter ~~~~ still working on a way to push multiple letters of the same by looping
        underscore[chosenPokemon.indexOf(keyword)] = keyword;
        // play sound when rightword = keyword
        playSound.play();
        getUnderscore.innerHTML = underscore.join(' ');
        if(underscore.join('') === chosenPokemon){
            alert('you win')
        }
    } 
    else{
        for(let j = 0; j < wrongWord.length; j++){
            if (keyword === wrongWord[j]){
                return null;
            } else{
                console.log ('none in the array')
            }
        }
        // push wrong letters to an array
        wrongWord.push(keyword);
        // deducts guessess
        lives -= 1;
        // manipulating the DOM to put wrong letters into an array
        getWrongLetters.innerHTML = wrongWord.join(' ')
        getLives.innerHTML = " " + lives
        if(lives === 0){
            alert("you lost try again")
        }
    }

    console.log(underscore)
    
})



createUnderscore();
getUnderscore.innerHTML = underscore.join(' ');
console.log(chosenPokemon);
}