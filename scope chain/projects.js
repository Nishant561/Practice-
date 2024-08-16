const button = document.querySelectorAll(".button");
const body = document.querySelector('body');

const but1 = Array.from(button);

but1.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
    })
})