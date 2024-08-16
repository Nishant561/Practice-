const input = document.querySelector("#inputs");
const container = document.querySelector(".container");

input.addEventListener("keyup" ,function(event){
   if(event.key == "Enter"){
    list_item(this.value);
   }
})

const list_item = (text="")=>{
    const item = document.createElement("div");
    item.classList.add("list-of-works");
    item.innerHTML =`
    <li>${text}</li>
    <i class="fa-solid cancel fa-xmark"></i>
    `;
    item.querySelector("i").addEventListener("click",()=>{
        item.remove();
    })

    item.addEventListener("click",function(){
        this.classList.toggle("done");
    })
    container.append(item);


}
