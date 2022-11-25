/*8. Realiza un programa que al hacer doble click en la pantalla del 
navegador, cambie elfondo a un color aleatorio.*/

const body=document.querySelector('body');


const colorAleatorio=()=>{
    
    let numero1=Math.round(Math.random()*255);
    let numero2=Math.round(Math.random()*255);
    let numero3=Math.round(Math.random()*255);

    body.style.background='rgb('+numero1+','+numero2+','+numero3+')'; 
    
}
window.addEventListener('dblclick',colorAleatorio);