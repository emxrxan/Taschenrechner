"use strict";

class Rechner{
    
    constructor(){
        this._zahlenliste = document.querySelectorAll(".zahl");
        this._operatorliste = document.querySelectorAll(".oper");
    }

    //zahlen werden im Anzeige-Screen hinzugefügt
    zahlen_ermittlen = function () {
        this._zahlenliste.forEach(element => {
            element.addEventListener("click", (list)=>{
                document.querySelector("#screen").innerHTML += list.target.innerHTML;
            });
        });
    }

    //holt die Operation aus dem Rechner
    hole_operator = function(){
        this._operatorliste.forEach(element => {
            element.addEventListener("click", (oper)=>{
                this._berechne(oper.target.innerHTML);
            });
        });
    }

    //Überprüft ob die Eingabe ein korrekt eingegebene Zahl ist
    _überprüfe = function(anzeige){

        if(anzeige.innerHTML.match(/^(\-)?((\d+((\.)(\d+))?(\+|\-|\*|\/)?))*$/)){
            return eval(anzeige.innerHTML);
        } else {
            return "ERROR";
        }
    }

    //berechnet das Ergebnis aus
    _berechne = function(oper){
        if(oper === "="){
            let anzeige = document.querySelector("#screen");
            let result = this._überprüfe(anzeige);
            anzeige.innerHTML = result;

        } else if (oper === "C"){
            document.querySelector("#screen").innerHTML = "";
        } else {
            document.querySelector("#screen").innerHTML += oper;
        }
    }
}