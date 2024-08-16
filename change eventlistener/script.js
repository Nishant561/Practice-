var selector = document.getElementById("selector");
 var para = document.getElementById("para");
selector.addEventListener("change",function(){
    const value = selector.value;
    document.getElementById("city").innerHTML = value;
})

para.addEventListener("mouseover",function(){
    this.innerHTML = "hello my friends";
})