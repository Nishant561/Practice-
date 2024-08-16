const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789";
const symbol = "!@#$%^&*()_+/";
var totalChar = document.getElementById("numbers");
var upperCase = document.getElementById("uppercase");
var lowerCase = document.getElementById("lowercase");
var numberCase = document.getElementById("number");
var symbolCase = document.getElementById("symbols");
var btn = document.getElementById("btn");

const passwordGenerator = (dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)];
    
}

const password = (password="" )=>{
    while(password.length < totalChar.value){
        if(upperCase.checked){
            password += passwordGenerator(upperSet);
            
        }
        if(lowerCase.checked){
            password += passwordGenerator(lowerSet);
        }
        if(numberCase.checked){
            password += passwordGenerator(number);
        }
        if(symbolCase.checked){
            password += passwordGenerator(symbol);
        }
        
    }
    var pss =password.slice(0,totalChar.value);
    document.getElementById("pass1").value = pss;
    
    
}

btn.addEventListener("click",function(){
    password();
})