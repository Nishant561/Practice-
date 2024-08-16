const day = "4 October 2023 11:00 PM"

const inputs = document.querySelectorAll(".input-1");


function clock(){
    let currentDay = new Date(day);
    let now = new Date();
    let diff= Math.floor((currentDay - now)/1000);
    if(diff<0) return;
    let day_1 = Math.floor(diff/3600/24);
    inputs[0].firstElementChild.value = day_1;
    let hour_1 = Math.floor((diff/3600)%24);
    inputs[1].firstElementChild.value = hour_1;
    let minutes_1 = Math.floor((diff/60)%60);
    inputs[2].firstElementChild.value = minutes_1;
    let second_1 = Math.floor(diff)%60;
    inputs[3].firstElementChild.value = second_1;
}



setInterval(
    ()=>{
        clock();
    },1000
);

clock();