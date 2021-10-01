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
    alert('Thanks for playing, ' + name + "!");
    document.write('You scored ' + score + ' out of 5 on the Aoife quiz. ')
    if(score === 5){
        document.write('Well done, ' + name +'!');
    } else {
        document.write('Retake the quiz if you want to score higher, ' + name + '.');
    }
}