'use strict';
const $ = function (foo) {
    return document.getElementById(foo);
}
const roll = function (foo) {
    return Math.floor(Math.random() * foo) + 1;
}
const rollm = function () {
    let dicedivs = document.getElementsByClassName('die');
    for (let i = 0; i < NOOFDICE; ++i) {
        if (!frozen[i]) {
            let r = roll(6);
            dicedivs[i].innerHTML = r;
            dice[i] = r;               // record the roll
        }
    }
    console.log(dice);
    console.log(frozen);
}

const record = function () {
                                       // let's do the magic
    btn.removeEventListener('click', play);
    btn.style.backgroundColor = 'pink';
    console.log('kilroy was here, scoring');
    setTimeout( function () {
        btn.addEventListener('click', play);
        btn.style.backgroundColor = 'white';
        }, 10000);

    // create a function here that scores 1-6'es


    // I tried, but I need more practice and to gain theoretical knoweledge, I'm really a beginner. I will start to practice codeacademy 
    // daily and hopefully catch up with everything. This was me trying to create a function  
    // but I lack knoweledge to use it so I wil try to explain what I was trying. Sorry if It's a waste 
    // of time. 
    // I came to conclusion that we should probably use nested loop.

    let dicesNumbers = ['dice1','dice2','dice3','dice4','sice5']; // I'm aware this should not be a string, it should
    // point to current number on dice so I'll pretend it does point to numbers :( 
    let one = [1,1,1,1,1]; // this is so I could compare if there is number one on the dice  
    let onesSum = [];      // empty array where the score of how many ones there is would be recorded
    let two
    let three              // I did not finish this cause I'm sure there is a better way to do this 
    let four
    let five
    let six
    for (let i = 0; i < dicesNumbers.length; i++) {  // variable with index to start from;  condition at which the loop stops ; looping for one
        for let j = 0; j < one.length; j++) {  // same thing but with if statement
            if ( dicesNumbers[i] === one[j]) { // if any number is the same
                    onesSum.push(one[j])       // it pushes them to empty array
            }
        } 
    }
};

         // There should be a function that makes sum but my brain went to overdrive, this is my current best.

const play = function () {
        if (++plays % PLAYS !== 0) {
            console.log('regular');
            rollm();
        } else {
            console.log('record force, record');
            rollm();
            record();
        }
};

const freeze = function (e) {
    let i = e.target.id.charAt(e.target.id.length - 1)
    if (frozen[i]) {
        e.target.style.backgroundColor = 'white';
        frozen[i] = false;
    } else {
        e.target.style.backgroundColor = 'lightblue';
        frozen[i] = true;
    }
};

const makeDie = function (i) {
    let die = document.createElement('div');
    die.setAttribute('class', 'die');
    die.setAttribute('id', 'n'+i);
    die.addEventListener('click', freeze);
    return die;
};
const makeButton = function (text, handler) {
    let btn = document.createElement('button');
    let txt = document.createTextNode(text);
    btn.appendChild(txt);
    btn.addEventListener('click', play);
    return btn;
};

const NOOFDICE = 5;
const PLAYS = 3;
let plays = 0;
let dice = [];
let frozen = [];
let btn;
for (let i = 0; i < NOOFDICE; ++i) {
    dice.push(0);
    frozen.push(false);
}

const doThis = function () {
    for (let i = 0; i < NOOFDICE; ++i) {
        $('diceCup').appendChild(makeDie(i));
    }
    btn = makeButton('Roll');
    $('main').appendChild(btn);
    $('cpryear').innerHTML = `&copy; nml ${new Date().getFullYear()}`;
    play();
}

window.addEventListener('load', doThis);