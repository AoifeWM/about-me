'use strict';
let i = 0;
let score = 0;
let user = prompt('what is your name?');
alert('Welcome to my About Me page, ' + user + '!');
// function setName() {
//   tortoises();
//   squash();
//   juggle();
//   paint();
//   portland();
//   paintYears();
//   spices();
// }

function tortoises() {
  while (i === 0) {
    let tortAnswer = prompt('Does Aoife have 2 tortoises?');
    if (tortAnswer.toLowerCase() == 'yes' || tortAnswer.toLowerCase() === 'y') {
      //console.log('Correct');
      alert("That's right!");
      i++;
      score++;
    } else if (
      tortAnswer.toLowerCase() === 'no' ||
      tortAnswer.toLowerCase() === 'n'
    ) {
      //console.log('Incorrect');
      alert('Sorry, you got it wrong :(');
      i++;
    } else {
      alert('Please answer yes or no.');
    }
  }
}

function squash() {
  i = 0;
  while (i === 0) {
    let growAnswer = prompt('Does Aoife grow squash?');
    if (
      growAnswer.toLowerCase() === 'yes' ||
      growAnswer.toLowerCase() === 'y'
    ) {
      //console.log('Incorrect');
      alert('Sorry, you got it wrong :( She grows peppers!');
      i++;
    } else if (
      growAnswer.toLowerCase() === 'no' ||
      growAnswer.toLowerCase() === 'n'
    ) {
      //console.log('Correct');
      alert("That's right!");
      i++;
      score++;
    } else {
      alert('Please answer yes or no.');
    }
  }
}

function juggle() {
  i = 0;
  while (i === 0) {
    let juggleAnswer = prompt('Can Aoife Juggle?');
    if (
      juggleAnswer.toLowerCase() === 'yes' ||
      juggleAnswer.toLowerCase() === 'y'
    ) {
      //console.log('Correct');
      alert("You're right! She sure can!");
      i++;
      score++;
    } else if (
      juggleAnswer.toLowerCase() === 'no' ||
      juggleAnswer.toLowerCase() === 'n'
    ) {
      //console.log('Incorrect');
      alert('Sorry, you got it wrong :(');
      i++;
    } else {
      alert('Please answer yes or no.');
    }
  }
}

function paint() {
  i = 0;
  while (i === 0) {
    let paintAnswer = prompt('Does Aoife like to paint?');
    if (
      paintAnswer.toLowerCase() === 'yes' ||
      paintAnswer.toLowerCase() === 'y'
    ) {
      //console.log('Correct');
      alert('Yep, you got it!');
      i++;
      score++;
    } else if (
      paintAnswer.toLowerCase() === 'no' ||
      paintAnswer.toLowerCase() === 'n'
    ) {
      //console.log('Incorrect');
      alert('Sorry, you got it wrong :(');
      i++;
    } else {
      alert('Please answer yes or no.');
    }
  }
}

//function portland() {
i = 0;
while (i === 0) {
  let bornAnswer = prompt('Was Aoife born in Portland?');
  if (bornAnswer.toLowerCase() === 'yes' || bornAnswer.toLowerCase() === 'y') {
    //console.log('Incorrect');
    alert('Nope, she was born in Seattle.');
    i++;
  } else if (
    bornAnswer.toLowerCase() === 'no' ||
    bornAnswer.toLowerCase() === 'n'
  ) {
    //console.log('Correct');
    alert("That's right! She was born in Seattle.");
    i++;
    score++;
  } else {
    alert('Please answer yes or no.');
  }
}
//}

//function paintYears() {
let chances = 0;
let paintYears = 4;
for (chances; chances < 4; chances++) {
  let guess = prompt(
    `How many years has Aoife been painting? You have ${
      4 - chances
    } guesses left.`
  );
  if (isNaN(guess)) {
    alert('Please enter a number!');
    chances--;
  } else if (guess > paintYears) {
    alert('Too high.');
  } else if (guess < paintYears) {
    alert('Too low.');
  } else {
    alert("You're right! ");
    chances = 5;
    score++;
  }
}
//}

//function spices() {
let chances = 0;
let spices = [
  'pepper',
  'chili',
  'anise',
  'nutmeg',
  'cinnamon',
  'fennel',
  'ginger',
  'basil',
  'mint',
  'oregano',
  'thyme',
  'parsley',
  'garlic',
];

for (let j = 6; j > chances; j--) {
  let guess = prompt("What is one of Aoife's favorite herbs or spices?");
  let correct = false;
  for (let i = 0; i < spices.length; i++) {
    if (guess.toLowerCase() === spices[i]) {
      score++;
      correct = true;
      alert(`That's right! Aoife loves ${guess}!`);
    }
  }
  if (correct === false) {
    alert(`Sorry, that is incorrect.  You have ${[j - 1]} guesses remaining.`);
  }
  if (correct) break;
}

alert(`The possible answers were: ${spices}`);

alert(`Thanks for playing, ${user}!`);
document.write('You scored ' + score + ' out of 7 on the Aoife quiz. ');
//   if (score >= 9) {
//     document.write('Well done, ' + name + '!');
//   } else {
//     document.write(
//       'Retake the quiz if you want to score higher, ' + name + '.'
//     );
//   }
//}
