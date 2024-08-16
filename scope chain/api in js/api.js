const main = document.querySelector(".main")


let url = 'https://randomuser.me/api/';

let xhr = new XMLHttpRequest();

xhr.open('GET',url)
xhr.onreadystatechange = function(){
    let data = JSON.parse(this.responseText)
    
    if(xhr.readyState === 4){
     main.innerHTML =`<img src="${data.results[0].picture.large}">
     <h5>${data.results[0].name.first}</h5>
     
     `

    }
}
xhr.send()