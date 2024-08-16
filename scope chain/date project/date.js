setInterval(()=>{
    let date = new Date();
    document.querySelector(".time").innerHTML = date.toLocaleTimeString();
},1000)