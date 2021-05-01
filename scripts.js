function generateEyeHeartEgg() {
    // count number of eye divs
    let eyes = document.getElementsByClassName('eye-box').length;

    // count number of heart divs
    let hearts = document.getElementsByClassName('heart-box').length;

    // count number of egg divs
    let eggs = document.getElementsByClassName('egg-box').length;

    // get the viewport-sized form 
    const form = document.forms.choiceform;

    // gets all the choices
    const choices = form.elements.choices;

    // gets the selected value
    const choice = choices.value

    // execute function according to choice
    if (choice === 'eye') {
        eyes += 1;
        addEye(eyes);
    } else if (choice === 'heart') {
        hearts += 1;
        addHeart(hearts);
    } else {
        eggs += 1;
        addEgg(eggs);
    }

    // log to console what you've clicked onto your screen 
    logBasket(eyes, hearts, eggs);
}

function addEye(eyes) {
    // pupil for eyeball
    let eyeballPupil = document.createElement('div');
    eyeballPupil.classList.add('eyeball-pupil');

    // iris for eyeball
    eyeballIris = document.createElement('div');
    eyeballIris.classList.add('eyeball-iris');

    // put pupil in iris
    eyeballIris.appendChild(eyeballPupil);

    // get a random number between 1 - 100, don't want zero division error!
    const randomNumber = Math.floor(Math.random() * (100 - 1)) + 1;

    // make eye, add class for eyeball or human eye later
    let eye = document.createElement('div');

    // put iris in eye
    eye.appendChild(eyeballIris);

    // shadow for eye, add class for eyeball or human eye later
    let eyeShadow = document.createElement('div');

    // light for eye, add class for eyeball or human eye later
    let eyeLight = document.createElement('div');

    // put eye light in eye shadow div
    eyeShadow.appendChild(eyeLight);

    if ((eyes % randomNumber === 0 || randomNumber % eyes === 0) && randomNumber != 1 && eyes != 1) {
        eye.classList.add('tilted-human-eye');

        eyeShadow.classList.add('human-eye-shadow');

        eyeLight.classList.add('human-eye-light');
    } else {
        eye.classList.add('eyeball');

        eyeShadow.classList.add('eyeball-shadow');

        eyeLight.classList.add('eyeball-light');
    }

    // container div for eyeball
    let eyeBox = document.createElement('div');
    eyeBox.classList.add('eye-box');
    eyeBox.appendChild(eye);
    eyeBox.appendChild(eyeShadow);

    // put the eyeball in the DOM
    document.getElementById('basket').appendChild(eyeBox);
}

function addHeart(hearts) {
    // square box for heart
    let heartBox = document.createElement('div');
    heartBox.classList.add('heart-box')

    if (hearts < 3 || isPrime(hearts)) {
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

function addEgg(eggs) {
    // div that contains the inner top of egg
    let eggTopInnerDiv = document.createElement('div');
    
    // div that contains inner bottom of egg
    let eggBottomInnerDiv = document.createElement('div');

    if (eggs === 42) {
        eggTopInnerDiv.classList.add('easter-egg-top-inner');    
        eggBottomInnerDiv.classList.add('easter-egg-bottom-inner');
    } else {
        eggTopInnerDiv.classList.add('egg-top-inner');
        eggBottomInnerDiv.classList.add('egg-bottom-inner');
    }

    // div for top of egg box-shadow
    let eggTopShadow = document.createElement('div');
    eggTopShadow.classList.add('egg-top-shadow')

    // div that contains the divs that make up top half of egg 
    let eggTopOuterDiv = document.createElement('div');
    eggTopOuterDiv.classList.add('egg-top-outer');
    
    // assemble top of egg
    eggTopOuterDiv.appendChild(eggTopInnerDiv);
    eggTopOuterDiv.appendChild(eggTopShadow);

    // div for bottom of egg box-shadow
    let eggBottomShadow = document.createElement('div');
    eggBottomShadow.classList.add('egg-bottom-shadow');

    // div that contains the divs that make up bottom half of egg 
    let eggBottomOuterDiv = document.createElement('div');
    eggBottomOuterDiv.classList.add('egg-bottom-outer');

    // assemble bottom of egg
    eggBottomOuterDiv.appendChild(eggBottomInnerDiv);
    eggBottomOuterDiv.appendChild(eggBottomShadow);

    // div that contains the divs that make up the egg 
    let eggDiv = document.createElement('div');
    eggDiv.classList.add('egg');

    // check if the egg is a power of 2 
    if (Math.log2(eggs) % 1 === 0) {
        eggDiv.classList.add('shake');
    }

    // put the top and bottom egg divs into the big egg div 
    eggDiv.appendChild(eggTopOuterDiv);
    eggDiv.appendChild(eggBottomOuterDiv);

    // container div for egg
    let eggBoxDiv = document.createElement('div');
    eggBoxDiv.classList.add('egg-box');
    eggBoxDiv.appendChild(eggDiv);

    // put the egg in the DOM 
    document.getElementById('basket').appendChild(eggBoxDiv);
}

function isPrime(n) {
    // check that hearts is a number and that it is not infinity
    if (isNaN(n) || !isFinite(n)) {
        return false;
    }

    // get whole number square root of hearts, only need to iterate up to this high
    let sqRoot = Math.ceil(Math.sqrt(n));

    // get rid of the easy cases
    if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0) {
        return false;
    }

    // loop to find if it is a prime number, only iterate through odd numbers
    for (let i = 7; i < sqRoot; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function logBasket(eyes, hearts, eggs) {
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