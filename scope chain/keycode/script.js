const main = document.querySelector(".main");

window.addEventListener("keydown",(e)=>{
    main.innerHTML = `<div>
    <table border = 1px>
    <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
    </tr>
    <tr>
    <th>${e.key === " "? "space": e.key}</th>
    <th>${e.keyCode}</th>
    <th>${e.code}</th>
    </tr>
    
    </table>
    
    </div>
    `
})