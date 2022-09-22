const prompt = require('prompt-sync')({ sigint: true });

let name = prompt('Hey there... What\'s your name? ');

name = name.toLowerCase();
let firstLetter = name.charAt(0);
name = name.replace(firstLetter, firstLetter.toUpperCase());

console.log(`Hi, ${name}! Let's play a game!\nIt's called the Hangman!`);
console.log("The rules are: I will think of a word, while you guess a letter.\nAnd for everytime you're wrong you'll lose 1 guess...\nBut don't worry... I'll give you 5 guesses in total.\nLet's go!");

let hangmanFree = `
      \\O/
       |
      / \\
 `;

let randomWord = Math.floor(Math.random() * 10);

randomWord = ['javascript', 'python', 'java', 'dotnet', 'csharp', 'apple', 'windows', 'samsung', 'ai'][randomWord];

randomWord = randomWord.split('');

let randomWordHidden = [];
for (let j of randomWord) {
  randomWordHidden.push('*');
}
console.log(`This is the word you will need to guess: ${randomWordHidden.join('')}`);

let guessesLeft = 5;
let guess = prompt('Guess a letter: ');
guess = guess.toLowerCase();

while (guessesLeft > 0) {
  if (randomWord.includes(guess)) {
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === guess) {
        randomWordHidden[i] = guess;
      }
    }
    console.log('\nNice one! You got it.');
    console.log(`This is what the word looks like now: ${randomWordHidden.join('')}\nGive me another one.`);
    if (randomWordHidden.join('') === randomWord.join('')) {
      console.log(`\nWow ${name}! You did it...\nYou freed the hangman!\nThe word was: ${randomWord.join('')}`);
      console.log(hangmanFree);
      break;
    }
  } else {
    guessesLeft--;
    console.log('\nOh no.. That was wrong.. try again.');
    console.log(`You have ${guessesLeft} guesses left.`);
    switch (guessesLeft) {
      case 4: console.log('  _______'); break;
      case 3: console.log('  _______\n  |     |\n  |     O'); break;
      case 2: console.log('  _______\n  |     |\n  |     O\n  |     |'); break;
      case 1: console.log('  _______\n  |     |\n  |     O\n  |    /|'); break;
      case 0: console.log('  _______\n  |     |\n  |     O\n  |    /|\\'); break;
      default: break;
    }
  }
  console.log('');
  guess = prompt('Guess a letter: ');
  guess = guess.toLowerCase();
}

let hangman = `  ______
  |     |
  |     O
  |    /|\\
  |    / \\
  |_______
 `;

if (guessesLeft === 0) {
  console.log('\nOh no... You hanged the hangman!?\nNot cool!');
  console.log(hangman);
}