//-----------------------------------------PARTYMODE----------------------------------------\\

var partyButton = document.querySelector(".party");
var goBack = document.querySelector(".goback");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var audio = new Audio("./audio/partysong.mp3");
var jump = document.querySelector(".jump");
var jump2 = document.querySelector(".jump2");


var partyStatus = false;

partyButton.addEventListener("click", partyTime);

function partyTime(){
    if (partyStatus === false) {
        body.classList.add("confetti");

        h1.style.color = "white";
        h2.style.color = "white";
        
        partyButton.style.color = "white";
        partyButton.style.background = "black";
        partyButton.style.border = "5px solid white";

        goBack.style.color = "white";
        goBack.style.background = "black";
        goBack.style.border = "5px solid white";

        audio.play();

        jump.classList.add("dancing");
        jump2.classList.add("dancing2");

        partyButton.innerHTML = "Pause";

        partyStatus = true;

    } else {
        body.classList.remove("confetti");

        h1.style.color = "black";
        h2.style.color = "black";

        partyButton.style.color = "black";
        partyButton.style.background = "white";
        partyButton.style.border = "5px solid black";

        goBack.style.color = "black";
        goBack.style.background = "white";
        goBack.style.border = "5px solid black";

        audio.pause();

        jump.classList.remove("dancing");
        jump2.classList.remove("dancing2");

        partyButton.innerHTML = "Dance";

        partyStatus = false;
    }
}   

//-----------------------------------------INDEX.HTML CLOTHES----------------------------------------\\

// Hieronder zoeken we naar een URL parameter, met behulp van de searchParams, zo kunnen we de status van alle dingen uit de URL halen
var url = new URL(window.location.href);
var hatsStatus = url.searchParams.get("hatsStatus");
var shoesStatus = url.searchParams.get("shoesStatus");
var acces1Status = url.searchParams.get("acces1Status");
var acces2Status = url.searchParams.get("acces2Status");
var acces3Status = url.searchParams.get("acces3Status");
var acces4Status = url.searchParams.get("acces4Status");
var acces5Status = url.searchParams.get("acces5Status");
var dogStatus = url.searchParams.get("dogStatus");




var haloBig = document.querySelector("#halobig");

var partyhatBig = document.querySelector("#partyhatbig");

var devilhornsBig = document.querySelector("#devilhornsbig");

var bathduckBig = document.querySelector("#bathduckbig");

var witchBig = document.querySelector("#witchbig");


var cloudBig = document.querySelector("#cloudbig");

var partysocksBig = document.querySelector("#partysocksbig");

var devilshoesBig = document.querySelector("#devilshoesbig");

var ballerinasBig = document.querySelector("#ballerinasbig");

var heelsBig = document.querySelector("#heelsbig");


var wingsBig = document.querySelector("#wingsbig");

var tongueBig = document.querySelector("#tonguebig");

var deviltailBig = document.querySelector("#deviltailbig");

var bubblesBig = document.querySelector("#bubblesbig");

var catBig = document.querySelector("#catbig");


var brownDog = document.querySelector("#dachshund");


// Voor zowel hat of shoes check, kijk hij welke status er is. En voor elke status haalt hij de hidden op de juiste hoedjes en schoenen weg.


function hatCheck() {
    if (hatsStatus == 1) {
        haloBig.classList.remove("hidden");

    } else if (hatsStatus == 2) {
        partyhatBig.classList.remove("hidden");

    } else if (hatsStatus == 3) {
        devilhornsBig.classList.remove("hidden");

    } else if (hatsStatus == 4) {
        bathduckBig.classList.remove("hidden");

    } else if (hatsStatus == 5) {
        witchBig.classList.remove("hidden");
}};

function shoesCheck() {
    if (shoesStatus == 1) {
        cloudBig.classList.remove("hidden");

    } else if (shoesStatus == 2) {
        partysocksBig.classList.remove("hidden");

    } else if (shoesStatus == 3) {
        devilshoesBig.classList.remove("hidden");

    } else if (shoesStatus == 4) {
        ballerinasBig.classList.remove("hidden");

    } else if (shoesStatus == 5) {
        heelsBig.classList.remove("hidden");
}};

// %2 checkt voor even/oneven >> [!== 0] staat voor is niet even, dus oneven.
// Op sript.js hebben we de status elke keer als je klik + 1 gedaan, mbv status ++; Dus zo kunnen we checken of de gebruiker de accesoires wilt of niet.


function acces1check(){
    if(acces1Status%2 !== 0){
        wingsBig.classList.remove("hidden");
    }
}
function acces2check(){
    if(acces2Status%2 !== 0){
        tongueBig.classList.remove("hidden");
    }
}
function acces3check(){
    if(acces3Status%2 !== 0){
        deviltailBig.classList.remove("hidden");
    }
}
function acces4check(){
    if(acces4Status%2 !== 0){
        bubblesBig.classList.remove("hidden");
    }
}
function acces5check(){
    if(acces5Status%2 !== 0){
        catBig.classList.remove("hidden");
    }
}

//------------------------------------INDEX.HTML DOG-----------------------------------\\

function dogCheck() {
    if (dogStatus == "hondje2") {

        brownDog.src = "images/dogs/dachshund2.png";

        dogStatus = "hondje3";

    } else if (dogStatus == "hondje3") {

        brownDog.src = "images/dogs/dachshund3.png"

        dogStatus = "hondje1" ;

    } else {
        brownDog.src = "images/dogs/dachshund.png"

        dogStatus = "hondje2" ;

    }

}


window.addEventListener("load", hatCheck);
window.addEventListener("load", shoesCheck);
window.addEventListener("load", acces1check);
window.addEventListener("load", acces2check);
window.addEventListener("load", acces3check);
window.addEventListener("load", acces4check);
window.addEventListener("load", acces5check);
window.addEventListener("load", dogCheck);