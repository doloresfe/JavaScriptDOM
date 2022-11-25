/*4. Realiza un programa que tenga 3 elementos <p> y al hacer salir
 el puntero del ratón
sobre ellos desaparezcan (se oculten) y al hacer doble clic
 (los elimine del DOM).
También deberá tener un botón “Reaparecer” que hará que aparezcan  todos los
elementos desaparecidos (pero no los eliminados).*/

const parrafo1=document.querySelector("#parrafo1");
const parrafo2=document.querySelector("#parrafo2");
const parrafo3=document.querySelector("#parrafo3");
const boton=document.querySelector('button');
let p=document.querySelectorAll('p');

function cerrar1() {
    parrafo1.style.visibility='hidden';
    //console.log(parrafo1.textContent)
    //parrafo1.classList.replace(parrafo1.textContent, '');
   
}
function cerrar2() {
    parrafo2.style.visibility='hidden';
}
function cerrar3() {
    parrafo3.style.visibility='hidden';
}


function mostrar(){
  
     
        parrafo1.style.visibility='visible';
        parrafo2.style.visibility='visible';
        parrafo3.style.visibility='visible';

    
}


function borrar1() {
 
    parrafo1.remove();
    
}

function borrar2() {
 
    parrafo2.remove();
    
}

function borrar3() {
 
    parrafo3.remove();
    
}


parrafo1.addEventListener('mouseout',cerrar1);
parrafo2.addEventListener('mouseout',cerrar2);
parrafo3.addEventListener('mouseout',cerrar3);

boton.addEventListener('click',mostrar);

parrafo1.addEventListener('dblclick',borrar1);
parrafo2.addEventListener('dblclick',borrar2);
parrafo3.addEventListener('dblclick',borrar3);