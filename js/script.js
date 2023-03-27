//<----------------------------------SOUND------------------------------------->//

var soundButton = document.querySelector(".sound");
var soundStatus = false;
var audio = new Audio("./audio/dressup.mp3");

soundButton.addEventListener("click", backgroundSong);

function backgroundSong() {
    if (soundStatus === false) {
        soundButton.src = "images/icons/sound.png"

        audio.play();

        soundStatus = true;
    } else {
        soundButton.src = "images/icons/soundmute.png"

        audio.pause();

        soundStatus = false;
    }

}

//<------------------------------------HATS------------------------------------->//

var hatsStatus = 0;

// halo
var haloSmall = document.querySelector("#halosmall");
var haloBig = document.querySelector("#halobig");

haloSmall.addEventListener("click", haloDress);

function haloDress() {
    hatsStatus = 1;
    hatCheck();
}

// partyhat
var partyhatSmall = document.querySelector("#partyhatsmall");
var partyhatBig = document.querySelector("#partyhatbig");

partyhatSmall.addEventListener("click", partyhatDress);

function partyhatDress() {
    hatsStatus = 2;
    hatCheck();
}


// devilhorns
var devilhornsSmall = document.querySelector("#devilhornssmall");
var devilhornsBig = document.querySelector("#devilhornsbig");

devilhornsSmall.addEventListener("click", devilhornsDress);

function devilhornsDress() {
    hatsStatus = 3;
    hatCheck();
}

// bathduck
var bathduckSmall = document.querySelector("#bathducksmall");
var bathduckBig = document.querySelector("#bathduckbig");

bathduckSmall.addEventListener("click", bathduckDress);

function bathduckDress() {
    hatsStatus = 4;
    hatCheck();
}

// witch
var witchSmall = document.querySelector("#witchsmall");
var witchBig = document.querySelector("#witchbig");

witchSmall.addEventListener("click", witchDress);

function witchDress() {
    hatsStatus = 5;
    hatCheck();
}

function hatCheck() {
    if (hatsStatus == 1) {
        haloBig.classList.remove("hidden");
        partyhatBig.classList.add("hidden");
        devilhornsBig.classList.add("hidden");
        bathduckBig.classList.add("hidden");
        witchBig.classList.add("hidden");

    } else if (hatsStatus == 2) {
        haloBig.classList.add("hidden");
        partyhatBig.classList.remove("hidden");
        devilhornsBig.classList.add("hidden");
        bathduckBig.classList.add("hidden");
        witchBig.classList.add("hidden");

    } else if (hatsStatus == 3) {
        haloBig.classList.add("hidden");
        partyhatBig.classList.add("hidden");
        devilhornsBig.classList.remove("hidden");
        bathduckBig.classList.add("hidden");
        witchBig.classList.add("hidden");

    } else if (hatsStatus == 4) {
        haloBig.classList.add("hidden");
        partyhatBig.classList.add("hidden");
        devilhornsBig.classList.add("hidden");
        bathduckBig.classList.remove("hidden");
        witchBig.classList.add("hidden");

    } else if (hatsStatus == 5) {
        haloBig.classList.add("hidden");
        partyhatBig.classList.add("hidden");
        devilhornsBig.classList.add("hidden");
        bathduckBig.classList.add("hidden");
        witchBig.classList.remove("hidden");
}};

//<----------------------------------SHOES------------------------------------->//

var shoesStatus = 0;

// cloud
var cloudSmall = document.querySelector("#cloudsmall");
var cloudBig = document.querySelector("#cloudbig");

cloudSmall.addEventListener("click", cloudDress);

function cloudDress() {
    shoesStatus = 1;
    console.log("test");
    shoesCheck();
}

// partysocks
var partysocksSmall = document.querySelector("#partysockssmall");
var partysocksBig = document.querySelector("#partysocksbig");

partysocksSmall.addEventListener("click", partysocksDress);

function partysocksDress() {
    shoesStatus = 2;
    console.log("test");
    shoesCheck();
}

// devilshoes
var devilshoesSmall = document.querySelector("#devilshoessmall");
var devilshoesBig = document.querySelector("#devilshoesbig");

devilshoesSmall.addEventListener("click", devilshoesDress);

function devilshoesDress() {
    shoesStatus = 3;
    shoesCheck();
}

// ballerinas
var ballerinasSmall = document.querySelector("#ballerinassmall");
var ballerinasBig = document.querySelector("#ballerinasbig");

ballerinasSmall.addEventListener("click", ballerinasDress);

function ballerinasDress() {
    shoesStatus = 4;
    shoesCheck();
}

// heels
var heelsSmall = document.querySelector("#heelssmall");
var heelsBig = document.querySelector("#heelsbig");

heelsSmall.addEventListener("click", heelsDress);

function heelsDress() {
    shoesStatus = 5;
    shoesCheck();
}

function shoesCheck() {
    if (shoesStatus == 1) {
        cloudBig.classList.remove("hidden");
        partysocksBig.classList.add("hidden");
        devilshoesBig.classList.add("hidden");
        ballerinasBig.classList.add("hidden");
        heelsBig.classList.add("hidden");

    } else if (shoesStatus == 2) {
        cloudBig.classList.add("hidden");
        partysocksBig.classList.remove("hidden");
        devilshoesBig.classList.add("hidden");
        ballerinasBig.classList.add("hidden");
        heelsBig.classList.add("hidden");

    } else if (shoesStatus == 3) {
        cloudBig.classList.add("hidden");
        partysocksBig.classList.add("hidden");
        devilshoesBig.classList.remove("hidden");
        ballerinasBig.classList.add("hidden");
        heelsBig.classList.add("hidden");

    } else if (shoesStatus == 4) {
        console.log(shoesCheck);
        cloudBig.classList.add("hidden");
        partysocksBig.classList.add("hidden");
        devilshoesBig.classList.add("hidden");
        ballerinasBig.classList.remove("hidden");
        heelsBig.classList.add("hidden");

    } else if (shoesStatus == 5) {
        cloudBig.classList.add("hidden");
        partysocksBig.classList.add("hidden");
        devilshoesBig.classList.add("hidden");
        ballerinasBig.classList.add("hidden");
        heelsBig.classList.remove("hidden");
    }
}

//<------------------------------ACCESSOIRES--------------------------------->//

var acces1Status = 0;
var acces2Status = 0;
var acces3Status = 0;
var acces4Status = 0;
var acces5Status = 0;

// wings
var wingsSmall = document.querySelector("#wingssmall");
var wingsBig = document.querySelector("#wingsbig");

wingsSmall.addEventListener("click", wingsDress);

function wingsDress() {
    wingsBig.classList.toggle("hidden");
    acces1Status ++;
}

// tongue
var tongueSmall = document.querySelector("#tonguesmall");
var tongueBig = document.querySelector("#tonguebig");

tongueSmall.addEventListener("click", tongueDress);

function tongueDress() {
    tongueBig.classList.toggle("hidden");
    acces2Status ++;
}

// deviltail
var deviltailSmall = document.querySelector("#deviltailsmall");
var deviltailBig = document.querySelector("#deviltailbig");

deviltailSmall.addEventListener("click", deviltailDress);

function deviltailDress() {
    deviltailBig.classList.toggle("hidden");
    acces3Status ++;
}

// bubbles
var bubblesSmall = document.querySelector("#bubblessmall");
var bubblesBig = document.querySelector("#bubblesbig");

bubblesSmall.addEventListener("click", bubblesDress);

function bubblesDress() {
    bubblesBig.classList.toggle("hidden");
    acces4Status ++;
}

// cat
var catSmall = document.querySelector("#catsmall");
var catBig = document.querySelector("#catbig");

catSmall.addEventListener("click", catDress);

function catDress() {
    catBig.classList.toggle("hidden");
    acces5Status ++;
}

//<----------------------------------DOG------------------------------------->//

var brownDog = document.querySelector("#dachshund");
var dogStatus = "hondje1";

brownDog.addEventListener("click", spotDog);

function spotDog() {
    if (dogStatus == "hondje1") {

        brownDog.src = "images/dogs/dachshund2.png";

        dogStatus = "hondje2";

    } else if (dogStatus == "hondje2") {

        brownDog.src = "images/dogs/dachshund3.png"

        dogStatus = "hondje3" ;

    } else {
        brownDog.src = "images/dogs/dachshund.png"

        dogStatus = "hondje1" ;

    }

}

// <---------------------------------POPUP------------------------------>//

var colorDog = document.querySelector("p");

setTimeout (() => {
    colorDog.style.display = "none"
}, 3500) 


// <---------------------------------BUTTON------------------------------>//

var readybutton = document.querySelector(".ready");

readybutton.addEventListener("click", ready);

function ready() {
    location.href = `ready.html?hatsStatus=${hatsStatus}&shoesStatus=${shoesStatus}&dogStatus=${dogStatus}&acces1Status=${acces1Status}&acces2Status=${acces2Status}&acces3Status=${acces3Status}&acces4Status=${acces4Status}&acces5Status=${acces5Status}&dogStatus${dogStatus}`;
    // `` tags zijn nieuw in JS, hiermee kan je tekst en variabelen in een regel zetten, zonder + en gezeur
    // Hier sturen we de status van de keuzes mee voor het meenemen naar de andere pagina. Dat doen we met URL parameters
    
}