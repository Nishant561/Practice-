var endDate = "1 October 2023 11:00 PM"
var inputs = document.querySelectorAll("input");
function clock(){
    const end = new Date(endDate);
    const now = new Date();
    var diff = Math.floor((end - now)/1000);
    if(diff<0) return;
    var day = Math.floor((diff/3600/24));
    inputs[0].value = day;
    var hour = Math.floor(diff/3600) %24;
    inputs[1].value = hour;
    var minutes = Math.floor(diff/60)%60;
    inputs[2].value = minutes;
    var second = Math.floor(diff)%60;
    inputs[3].value = second;
    
}

clock();


setInterval(
    ()=>{
        clock();
    },1000
)