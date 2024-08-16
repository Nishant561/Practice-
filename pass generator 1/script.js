const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*_/+";
const display = document.getElementById("pass");
const totalVal = document.getElementById("number");
const u = document.getElementById("Ucase");
const l = document.getElementById("Lcase");
const n = document.getElementById("Num");
const s = document.getElementById("Sym");
const btn = document.getElementById("btn");
function generateRandom(dataSet){
    return dataSet[Math.floor(Math.random()*dataSet.length)];

}

function generator(password=""){
    while(password.length < totalVal.value){
        if(u.checked){
            password+= generateRandom(upperSet);
            
        }
        if(l.checked){
            password+= generateRandom(lowerSet);
            
        }
        if(n.checked){
            password+= generateRandom(number);
            
        }
        if(s.checked){
            password+= generateRandom(symbol);   
        }
    }
    let value = password.slice(0,totalVal.value);
    document.getElementById("pass").value = value;
    console.log(document.getElementById("pass").value.length);
}
btn.addEventListener("click",function(){
    generator();
})
