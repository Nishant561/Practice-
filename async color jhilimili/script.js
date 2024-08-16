const start = document.querySelector("#start");
const stops = document.querySelector("#stop");
let color;
const inter = ()=>{
    color =  setInterval(change,1000);
}
const stopChange = ()=>{
    clearInterval(color);
}
start.addEventListener("click",inter);

stops.addEventListener("click",()=>{
    stopChange();
})


const change = ()=>{
    let randomNumber = Math.floor(Math.random()*16777215);
    let colorCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = colorCode;
}