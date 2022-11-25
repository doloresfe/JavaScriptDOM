
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
            contenedor.style.visibility='hidden';
           //contenedorLleno.appendChild(bola);
            bola.remove();

    });
