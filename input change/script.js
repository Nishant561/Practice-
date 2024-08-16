const btn = document.querySelector("#btn");

const input = document.querySelectorAll(".inp1");


input.forEach((inputs)=>{
    inputs.addEventListener("change", function(){
        btn.style.display = "block";
    })
})

input.forEach(input =>{
    input.addEventListener("click",()=>{
        if(this.checked){
            this.checked = false;
        }
    })
})