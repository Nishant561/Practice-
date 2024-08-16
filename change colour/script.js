function changeColor(){
    const demo = document.querySelector(".demo");
    const demo1 = demo.style.backgroundColor;
    if(demo1 == "red"){
        demo.style.backgroundColor = "green";
    }
    else{
        demo.style.backgroundColor= "red";
    }

}