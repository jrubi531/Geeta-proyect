export function banner(){
     let div = document.createElement("div");
    div.className = "div-Banner"; 

    let span = document.createElement("span");
    span.textContent = "Geeta";
    div.appendChild(span);

    let aBoton = document.createElement("a");
    aBoton.className = "aboton"; 
    aBoton.href = "componentes/login/login.html";
    aBoton.textContent = "SHOP NOW";
    div.appendChild(aBoton);

    return div;
}
