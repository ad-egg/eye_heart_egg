let eggs = 0;

function generateEyeHeartEgg() {
    addEgg();

    let basketContents = 'you have ';

    if (eggs < 1) {
        basketContents += 'nothing';
    }
    else {
        basketContents += eggs + ' egg';
    }

    // prints what you have on your screen
    console.log(basketContents);
}

function addEgg() {
    eggs++;

    // div that contains the top left of egg
    let eggTopLeftDiv = document.createElement("div");
    eggTopLeftDiv.classList.add("egg-top-l");

    // div that contains the top right of egg
    let eggTopRightDiv = document.createElement("div");
    eggTopRightDiv.classList.add("egg-top-r");

    // div that contains the divs that make up top half of egg 
    let eggTopDiv = document.createElement("div");
    eggTopDiv.classList.add("egg-top");
    
    // assemble top of egg
    eggTopDiv.appendChild(eggTopLeftDiv);
    eggTopDiv.appendChild(eggTopRightDiv);

    // div that contains bottom left of egg
    let eggBottomLeftDiv = document.createElement("div");
    eggBottomLeftDiv.classList.add("egg-bottom-l");

    // div that contains bottom right of egg
    let eggBottomRightDiv = document.createElement("div");
    eggBottomRightDiv.classList.add("egg-bottom-r");

    // div that contains the divs that make up bottom half of egg 
    let eggBottomDiv = document.createElement("div");
    eggBottomDiv.classList.add("egg-bottom");

    // assemble bottom of egg
    eggBottomDiv.appendChild(eggBottomLeftDiv);
    eggBottomDiv.appendChild(eggBottomRightDiv);

    // div that contains all the divs that make up the egg 
    let eggDiv = document.createElement("div");
    eggDiv.classList.add("egg");

    // put the top and bottom egg divs into the big egg div 
    eggDiv.appendChild(eggTopDiv);
    eggDiv.appendChild(eggBottomDiv);

    // put the egg in the DOM 
    document.getElementById("basket").appendChild(eggDiv);
}

function addEye() {
    
}

function addHeart() {

}