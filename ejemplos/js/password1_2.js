function verPassword(evento) {
    const crearLabel = document.createElement('label');
    const div = document.querySelector("div");

    if (evento.type==="keypress") {
    crearLabel.textContent = String.fromCharCode(evento.keyCode);
    
    div.insertAdjacentElement("afterbegin",crearLabel);
    }

}

document.getElementById("pass").addEventListener("keypress",verPassword);
