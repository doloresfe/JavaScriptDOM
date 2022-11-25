/**3. Realiza un programa que cree 100 elementos “checkbox” con números aleatorios.
Además, la página tendrá un botón “Marcar todos” y un botón “Desmarcar todos”,
con su correspondiente funcionalidad.*/

const formulario=document.querySelector('form');
const NUMERO=10;
let input;
const numero=function () {
    
    for (let index = 0; index < NUMERO; index++) {
        //creamos los input
         input=document.createElement("input");
         //creamos los label
         const label=document.createElement("label");
        //metemos los input en el form
        formulario.appendChild(label);
        //metemos los label en los input
         formulario.appendChild(input);
         //ponemos el atributo de input a checkbox
         input.setAttribute("type","checkbox");
        //creamos los numero aleatorio
        let numeroAleatorio=Math.round(Math.random()*10);
        //metemos los numero aleatorio en los input
        input.insertAdjacentHTML("afterbegin",numeroAleatorio);
        //metemos el los label de atributo los numero toxados
        label.setAttribute("for",numeroAleatorio);
        //sacamos el contenido
        label.textContent=numeroAleatorio;
    
    }
}
window.addEventListener('load',numero);


const marcarTodos=function () {
  
document.querySelectorAll('input[type=checkbox]').forEach(function(checkElement) {
        checkElement.checked = true;
    }
        )
};

const botonMarcar=document.querySelector("#marcar");
botonMarcar.addEventListener('click',marcarTodos);


const desmarcarTodo=function () {
  
    document.querySelectorAll('input[type=checkbox]').forEach(function(checkElement) {
            checkElement.checked = false;
    }
        )
};
    
const botonDesacer=document.querySelector("#desmarcar");
botonDesacer.addEventListener('click',desmarcarTodo);