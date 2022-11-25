/*5. Realiza un programa que mediante eventos y el uso del objeto event,
 te muestre en todo momento la posición actual del ratón en pantalla.
Para mostrarlo modificaremos de forma dinámica un elemento HTML
 (Ejemplo, un <p>) que nos muestre la posición actual del ratón.*/


 //window.addEventListener("click", (event) => console.log(event));

 const p = document.querySelector("p");
 p.addEventListener("click", (event) => console.log(event));

 //p.addEventListener("click", (event) => console.log("ClientX: "+event.clientX+" ClientY: "+event.clientY));
 