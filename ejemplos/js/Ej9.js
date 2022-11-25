/*9. Realiza un programa que tenga una imagen de una bola de papel 
y una papelera vacía. Cuando se arrastre la bola de papel a la papelera 
vacía, deberá cambiar la imagen de la papelera vacía a una papelera llena.*/
let bola = document.querySelector (".bola");
bola.draggable=true; //hacemos el elemento arrastrable
let contenedor = document.querySelector (".contenedorVacio");
let contenedorLleno=document.querySelector(".contenedorLLeno");


    contenedorLleno.style.visibility='hidden';

    contenedor.addEventListener("dragover", e=>{
            e.preventDefault();//para que ejecute el drop
 
    });

    contenedor.addEventListener("drop", e=>{
            contenedorLleno.style.visibility='visible'; 
            contenedor.remove();
            //contenedorLleno.appendChild(bola);
            bola.remove();

    });


