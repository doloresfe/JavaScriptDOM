/*6. Realiza un programa con dos botones “Comenzar Saludos” y  
“Parar Saludos”. Al hacer click en “Comenzar Saludos”, 
lance un setInterval que cada 5 segundos muestra un “alert” con “Hola”.
 El botón “Parar Saludos” parará esa secuencia.
 */

 let botonSaludar=document.querySelector(".comenzar");
 let botonParar=document.querySelector(".parar");
let intervalo;

 const saludar=()=>{
    alert('HOLA');  
 }


botonSaludar.addEventListener("click", ()=>{ intervalo= setInterval(saludar, 5000)});

botonParar.addEventListener("click",()=>clearInterval(intervalo));
 
