"use strict"

function balikKata(kata) {
 
    let temp = ''
    for(var i=kata.length-1 ; i>=0; i--){
      temp+=kata[i]
    }
    return temp
    
   }
   
   // TEST CASES
   console.log(balikKata('Novus ordo seclorum'));
   console.log(balikKata('Mevin Yanuar')); 
   console.log(balikKata('memento mori')); 
   