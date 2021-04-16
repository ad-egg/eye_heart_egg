let eyes = 0;
let hearts = 0;
let eggs = 0;

function generateEyeHeartEgg() {
    addEgg();

    // log to console what you've clicked onto your screen 
    logBasket();
}

function addEgg() {
    eggs++;

    // div that contains the inner top of egg
    let eggTopInnerDiv = document.createElement("div");
    eggTopInnerDiv.classList.add("egg-top-inner");

    // div that contains the divs that make up top half of egg 
    let eggTopOuterDiv = document.createElement("div");
    eggTopOuterDiv.classList.add("egg-top-outer");
    
    // assemble top of egg
    eggTopOuterDiv.appendChild(eggTopInnerDiv);

    // div that contains inner bottom of egg
    let eggBottomInnerDiv = document.createElement("div");
    eggBottomInnerDiv.classList.add("egg-bottom-inner");

    // div that contains the divs that make up bottom half of egg 
    let eggBottomOuterDiv = document.createElement("div");
    eggBottomOuterDiv.classList.add("egg-bottom-outer");

    // assemble bottom of egg
    eggBottomOuterDiv.appendChild(eggBottomInnerDiv);

    // div that contains all the divs that make up the egg 
    let eggDiv = document.createElement("div");
    eggDiv.classList.add("egg");

    // put the top and bottom egg divs into the big egg div 
    eggDiv.appendChild(eggTopOuterDiv);
    eggDiv.appendChild(eggBottomOuterDiv);

    // put the egg in the DOM 
    document.getElementById("basket").appendChild(eggDiv);
}

function addEye() {
    
}

function addHeart() {

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