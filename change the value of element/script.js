var clutter = 0;

document.getElementById("btn").onclick =function change(){
   
    if(clutter === 0){
        document.getElementById("content").innerHTML = "hello Nishant";
        clutter = 1;
        console.log(clutter);
    }
    else{
        document.getElementById("content").innerHTML = "hello everyone";
        clutter = 0;
        console.log("hi");
    }
}