const start = document.querySelector("#start");

const stop = document.querySelector("#stop");
let valid
const randomColor = function(){
    let hex = "0123456789ABCDEF";
    let color = "#"
    for (let i=0; i<6 ;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;
}

start.addEventListener("click",()=>{
    if(!valid){

        valid = setInterval(changeColor,1000);
    }

    function changeColor(){

        document.body.style.backgroundColor = randomColor();
    }
})

stop.addEventListener("click",()=>{
    clearInterval(valid);
    valid= null;
})