function verPassword(evento) {
    if (evento.type==="keypress") {
        console.log(String.fromCharCode(evento.keyCode));
    }
}

document.getElementById("pass").addEventListener("keypress",verPassword);
