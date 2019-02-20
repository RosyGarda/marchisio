/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var listaColori = "red,turquoise,yellow,blue,cyan,lightpink,violet,#d019db,aqua,lightblue";
//prende la stringa su e la fa diventare un vettore utilizzando la "," come carattere separatore
var colori = listaColori.split(",");

var coloriSfondo = ["red", "green", "yellow", "blue", "white"];

document.querySelectorAll(".cambiaColore").forEach(function(elm,k){
    elm.onclick = function(){
        let indice=parseInt(Math.random()*coloriSfondo.length+1);
        this.style.backgroundColor = coloriSfondo[indice % coloriSfondo.length];
    };
});

document.querySelectorAll(".ball").forEach(function (elm, k) {
            elm.style.backgroundColor = colori[k];
            elm.style.top=(Math.random()*window.innerHeight)+"px";
            elm.style.left=(Math.random()*window.innerWidth)+"px";
    });
    
    