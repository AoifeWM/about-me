'use strict';

function setName(){
    let name = prompt('what is your name?');
    alert('Welcome to my About Me page, ' + name + '!');
    quiz(name);
}

function quiz(name){
    let i = 0;
    let score = 0;
    while(i === 0){
        let tortAnswer = prompt('Does Aoife have 2 tortoises?');
        if(tortAnswer.toLowerCase() == 'yes' || tortAnswer.toLowerCase() === 'y'){
            //console.log('Correct');
            alert('That\'s right!');
            i++;
            score++;
        }else if (tortAnswer.toLowerCase() === 'no' || tortAnswer.toLowerCase() === 'n'){
            //console.log('Incorrect');
            alert('Sorry, you got it wrong :(');
            i++;
        }else{
            alert('Please answer yes or no.');
        }
    }
    i = 0;
    while(i === 0){
        let growAnswer = prompt('Does Aoife grow squash?');
        if(growAnswer.toLowerCase() === 'yes' || growAnswer.toLowerCase() === 'y'){
            //console.log('Incorrect');
            alert('Sorry, you got it wrong :( She grows peppers!');
            i++;
        }else if (growAnswer.toLowerCase() === 'no' || growAnswer.toLowerCase() === 'n'){
            //console.log('Correct');
            alert('That\'s right!');
            i++;
            score++;
        }else{
            alert('Please answer yes or no.');
        }
    }
    i = 0;
    while(i === 0){
        let juggleAnswer = prompt('Can Aoife Juggle?');
        if(juggleAnswer.toLowerCase() === 'yes' || juggleAnswer.toLowerCase() === 'y'){
            //console.log('Correct');
            alert('You\'re right! She sure can!');
            i++;
            score++;
        }else if (juggleAnswer.toLowerCase() === 'no' || juggleAnswer.toLowerCase() === 'n'){
            //console.log('Incorrect');
            alert('Sorry, you got it wrong :(');
            i++;
        }else{
            alert('Please answer yes or no.');
        }
    }
    i = 0;
    while(i === 0){
        let paintAnswer = prompt('Does Aoife like to paint?');
        if(paintAnswer.toLowerCase() === 'yes' || paintAnswer.toLowerCase() === 'y'){
            //console.log('Correct');
            alert('Yep, you got it!');
            i++;
            score++;
        }else if (paintAnswer.toLowerCase() === 'no' || paintAnswer.toLowerCase() === 'n'){
            //console.log('Incorrect');
            alert('Sorry, you got it wrong :(');
            i++;
        }else{
            alert('Please answer yes or no.');
        }
    }
    i = 0;
    while(i === 0){
        let bornAnswer = prompt('Was Aoife born in Portland?');
        if(bornAnswer.toLowerCase() === 'yes' || bornAnswer.toLowerCase() === 'y'){
            //console.log('Incorrect');
            alert('Nope, she was born in Seattle.');
            i++;
        }else if (bornAnswer.toLowerCase() === 'no' || bornAnswer.toLowerCase() === 'n'){
            //console.log('Correct');
            alert('That\'s right! She was born in Seattle.');
            i++;
            score++;
        }else{
            alert('Please answer yes or no.');
        }
    }
    let chances = 0;
    let paintYears = 4;
    for (chances; chances <4; chances++) {
        let guess = prompt(`How many years has Aoife been painting? You have ${4-chances} guesses left.`);
        if (isNaN(Math.round(parseInt(guess)))){
            alert ('Please enter a number!');
            chances--;
        } else if (guess > paintYears){
            alert ('Too high.');
        } else if (guess < paintYears){
            alert ('Too low.');
        } else {
            alert ('You\'re right! ')
            chances = 5;
            score++;
        }
    }
    let spices = ['pepper', 'chili', 'anise', 'nutmeg', 'cinnamon', 'fennel', 'ginger', 'basil', 'mint', 'oregano', 'thyme', 'parsley'];
    let correctAnswers = [];
    for (chances = 0; chances < 6; chances++){
        let guess = prompt(`What are Aoife's favorite herbs and spices? You have ${6-chances} guesses left.`);
        let correct = false;
        for(let i = 0; i < spices.length; i++){
            console.log(`guess: ${guess.toLowerCase()}, index = ${i}, array value = ${spices[i]}, match = ${guess.toLowerCase() === spices[i]}`);
            if(guess.toLowerCase() === spices[i]) {
                console.log('match detected.');
                console.log(`repeat value? ${repeatChecker(i, correctAnswers)}`);
                if(repeatChecker(i, correctAnswers)){
                    correct = true;
                    alert(`You already guessed ${guess}, stop trying to cheat, ${name}!`);
                }else{
                    score++;
                    correct = true;
                    correctAnswers.push(i);
                    alert(`That's right! Aoife loves ${guess}!`);
                }
            }
        }
        if(correct === false){
            alert(`Sorry, ${guess} isn't one of her favorites :(`);
        }
    }


    alert('Thanks for playing, ' + name + "!");
    document.write('You scored ' + score + ' out of 12 on the Aoife quiz. ')
    if(score >= 9){
        document.write('Well done, ' + name +'!');
    } else {
        document.write('Retake the quiz if you want to score higher, ' + name + '.');
    }
}

function repeatChecker(index, correctAnswers){
    for(let j = 0; j < correctAnswers.length; j++){
        if(index === correctAnswers[j]){
            return true;
        }
    }
    return false;
}