function color(){
    var randomNumber = Math.floor(Math.random()*16777215);
    var colorCode = "#" + randomNumber.toString(16);
    
    document.querySelector(".main").style.backgroundColor = colorCode;
    document.getElementById("color_code").innerText = colorCode;
    navigator.clipboard.writeText(colorCode);
}

color();