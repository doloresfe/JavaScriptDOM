/**1. Realiza un programa que cuando se pulse un 
 * botón con el texto “Nuevo número”,añada un elemento con un 
 * número aleatorio a una lista desordenada (elemento UL). */

 const boton = document.querySelector("button");

 const numeroAleatorio = function() {
    const ul = document.querySelector("ul");
    const arrayColores=['blue','yellow','red','pink','green','orange','gray','purple']

    let numero=Math.round(Math.random()*100);
    let numeroColor=Math.round(Math.random()*arrayColores.length)
    let color=arrayColores[numeroColor];
   // ul.innerHTML="<li>"+numero+"</li>"
    ul.insertAdjacentHTML("afterbegin","<li style= color:"+color+">"+numero+"</li>");
    };
boton.addEventListener('click',numeroAleatorio);

//const nuevoEnlace = document.createElement('ul');
 