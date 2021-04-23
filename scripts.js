let eyes = 0;
let hearts = 0;
let eggs = 0;

function generateEyeHeartEgg() {
    // get the viewport-sized form 
    const form = document.forms.choiceform;

    // gets all the choices
    const choices = form.elements.choices;

    // gets the selected value
    const choice = choices.value

    // execute function according to choice
    if (choice === 'eye') {
        addEye();
    } else if (choice === 'heart') {
        addHeart();
    } else {
        addEgg();
    }

    // log to console what you've clicked onto your screen 
    logBasket();
}

function addEye() {
    eyes++;

    // pupil for eyeball
    let eyeballPupil = document.createElement('div');
    eyeballPupil.classList.add('eyeball-pupil');

    // iris for eyeball
    eyeballIris = document.createElement('div');
    eyeballIris.classList.add('eyeball-iris');

    // put pupil in iris
    eyeballIris.appendChild(eyeballPupil);

    // make eyeball
    let eyeball = document.createElement('div');
    eyeball.classList.add('eyeball');

    // put iris in eyeball
    eyeball.appendChild(eyeballIris);

    // container div for eyeball
    let eyeBox = document.createElement('div');
    eyeBox.classList.add('eye-box');
    eyeBox.appendChild(eyeball);

    // put the eyeball in the DOM
    document.getElementById('basket').appendChild(eyeBox);
}

function addHeart() {
    hearts++;

    // square box for heart
    let heartBox = document.createElement('div');
    heartBox.classList.add('heart-box')

    if (hearts < 3) {
        // make the div for the hex code heart
        let hexHeart = document.createElement('div');
        hexHeart.classList.add('hex-heart');
        hexHeart.classList.add('center');
        hexHeart.classList.add('heartbeat');

        // put in the hex code for the heart
        hexHeart.innerHTML = '&#10084;';

        // put the beating hex heart into the heart container div
        heartBox.appendChild(hexHeart);
    } else {
        // first circle div for heart
        let heartCircOne = document.createElement('div');
        heartCircOne.classList.add('heart-circle-one');
        heartCircOne.classList.add('warm');

        // second circle div for heart
        let heartCircTwo = document.createElement('div');
        heartCircTwo.classList.add('heart-circle-two');
        heartCircTwo.classList.add('warm');

        // square div for heart
        let heartSq = document.createElement('div');
        heartSq.classList.add('heart-square');
        heartSq.classList.add('warm');

        // tilted square div for heart
        let tiltedHeart = document.createElement('div');
        tiltedHeart.classList.add('tilted-heart');

        // assemble the heart
        tiltedHeart.appendChild(heartCircOne);
        tiltedHeart.appendChild(heartCircTwo);
        tiltedHeart.appendChild(heartSq);

        // put the heart in the heart div container
        heartBox.appendChild(tiltedHeart);
    }

    // put the heart in the DOM
    document.getElementById('basket').appendChild(heartBox);
}

function addEgg() {
    eggs++;

    // div that contains the inner top of egg
    let eggTopInnerDiv = document.createElement('div');
    eggTopInnerDiv.classList.add('egg-top-inner');

    // div that contains the divs that make up top half of egg 
    let eggTopOuterDiv = document.createElement('div');
    eggTopOuterDiv.classList.add('egg-top-outer');
    
    // assemble top of egg
    eggTopOuterDiv.appendChild(eggTopInnerDiv);

    // div that contains inner bottom of egg
    let eggBottomInnerDiv = document.createElement('div');
    eggBottomInnerDiv.classList.add('egg-bottom-inner');

    // div that contains the divs that make up bottom half of egg 
    let eggBottomOuterDiv = document.createElement('div');
    eggBottomOuterDiv.classList.add('egg-bottom-outer');

    // assemble bottom of egg
    eggBottomOuterDiv.appendChild(eggBottomInnerDiv);

    // div that contains all the divs that make up the egg 
    let eggDiv = document.createElement('div');
    eggDiv.classList.add('egg-box');

    // check if the egg is a power of 2 
    // or if it's egg number 42 
    if (Math.log2(eggs) % 1 === 0) {
        eggDiv.classList.add('shake');
    }

    // put the top and bottom egg divs into the big egg div 
    eggDiv.appendChild(eggTopOuterDiv);
    eggDiv.appendChild(eggBottomOuterDiv);

    // put the egg in the DOM 
    document.getElementById('basket').appendChild(eggDiv);
}

function logBasket() {
    let basketContents = 'you have ';

    if (eyes === 0 && hearts === 0 && eggs === 0) {
        basketContents += 'nothing';
    }
    else {
        if (eyes > 0) {
            basketContents += eyes + ' eye ';
        }
        if (hearts > 0) {
            basketContents += hearts + ' heart ';
        }
        if (eggs > 0) {
            basketContents += eggs + ' egg '
        }
    }
    
    // prints what you have on your screen
    console.log(basketContents);
}