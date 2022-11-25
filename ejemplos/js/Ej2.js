/**2. Realiza un programa que cree dinámicamente una tabla de 100x100. 
 * Cada elemento de la tabla tendrá un número único, que empezará en 1 y 
 * se irá incrementando de 1 en 1. 
 * 
 * Esta página además tendrá un botón que será 
 * “Calcular numero casi primos”. Este botón hará que todas las celdas de la 
 * tabla que tengan números “Casi primos” se pongan con un fondo amarillo. */

 

 const crearTabla = function() {

    const tabla=document.querySelector('table');
    const tbody = document.createElement("tbody");

    let cont=1;
    let fila;

        
        for (let index = 0; index <10; index++) {    
                 fila = document.createElement("tr");
            for (let index1 = 0; index1 <10; index1++) {      
                let celda = document.createElement("td");
                let textoCelda = document.createTextNode(cont);
                
                cont++;

                celda.appendChild(textoCelda);
                
                fila.appendChild(celda);
            } 
            
            tbody.appendChild(fila);
        }   

        tabla.appendChild(tbody);
        tabla.setAttribute("border", "2");
        
        //tbody.appendChild(fila);

    

    };
   
    window.addEventListener('load',crearTabla);
    
//si es primo
    const casiPrimo = function() {

        const tbody=document.querySelector('tbody');

        for (let fila of tbody.children) {
            console.log(fila.children);
            for (let celda of fila.children) {

                
            }
          }
        
     };

    const boton=document.querySelector('button');
    boton.addEventListener("click", casiPrimo);
  