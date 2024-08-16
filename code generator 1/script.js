const btn = document.querySelector("#btn");
const body = document.querySelector("body");
btn.addEventListener("click",()=>{
    var color = Math.floor(Math.random()*16777215);
    var colorCode = "#" + color.toString(16);
    body.style.backgroundColor = colorCode;
    document.querySelector(".color-code").innerHTML = colorCode;
    navigator.clipboard.writeText (colorCode);
})