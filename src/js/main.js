"use strict";

//Darkmode
let button_dark = document.querySelector("#dark-light");
button_dark.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("darkmode");
});


//Erstellt ein neues Rechner Objekt
let run = new Rechner();
run.zahlen_ermittlen();
run.hole_operator();
