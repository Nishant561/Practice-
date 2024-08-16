const mainImg = document.querySelector("#main-img");
const smallImg = document.querySelectorAll(".sImage");

smallImg.forEach((inputs)=>{
    inputs.addEventListener("click",()=>{
        mainImg.src = inputs.src;
    })
})