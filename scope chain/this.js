
 /* this in the global scope represent the window 
 object */
console.log(this);


var game = "basketball";

function sayName(){
    var name = "Nishant Baruwal";
    console.log(this);
}

sayName();
