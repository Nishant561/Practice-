const btn = document.querySelector("#btn");
const main = document.querySelector(".main");
btn.addEventListener("click", ()=>{
    addNotes();
})


const addNotes = (text="")=>{
    const note = document.createElement("div");
    note.classList.add("container");
    note.innerHTML =`
    <div class="tool">
    <i class="fa-solid save fa-floppy-disk"></i>
    <i class="fa-solid delete fa-trash"></i>
</div>
<textarea>${text}</textarea>
    `;
    note.querySelector(".delete").addEventListener("click",()=>{
        note.remove();
        saveNotes();
    })

    note.querySelector(".save").addEventListener("click",()=>{
        saveNotes();
    })
    main.appendChild(note);
    saveNotes();
}

const saveNotes = ()=>{
    const text = document.querySelectorAll(".container textarea");
    
    const data = [];
    text.forEach((note)=>{
        data.push(note.value);
    })

    if(data.length ===0){
        localStorage.removeItem("nishant");
        
    }
    else{

        localStorage.setItem("nishant",JSON.stringify(data));
    }
    
}

(function(){
    const data1 = JSON.parse(localStorage.getItem("nishant"));
    if(data1 === null){
        addNotes();
    }
    else{

        data1.forEach((notes1)=>{
            addNotes(notes1);
        })
    }


})()