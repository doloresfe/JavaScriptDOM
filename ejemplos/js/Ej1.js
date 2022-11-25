/**1. Realiza un programa que cuando se pulse un 
 * botón con el texto “Nuevo número”,añada un elemento con un 
 * número aleatorio a una lista desordenada (elemento UL). */

 const boton = document.querySelector("button");

 const numeroAleatorio = function() {
    const ul = document.querySelector("ul");

    let numero=Math.round(Math.random()*100);
    
   // ul.innerHTML="<li>"+numero+"</li>"
    ul.insertAdjacentHTML("afterbegin","<li>"+numero+"</li>");
    };
boton.addEventListener('click',numeroAleatorio);

//const nuevoEnlace = document.createElement('ul');
 