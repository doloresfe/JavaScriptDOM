/*Realiza un formulario con dos elementos “select”. Al cambiar el primero,
 se actualizará  el segundo. Al enviar el formulario, se comprobará 
 que ambos han sido marcados. Cuando no tengan ninguna selección previa, 
 los “select” mostrarán “Select no seleccionado”. 
Los valores del primer “select” serán “Alicante”, “Castellón”, “Valencia”. 
Por defecto no habrá ninguno seleccionado. 
Los valores del segundo “select” son: 
● Para Alicante: “Alicante Capital”, “Elche”, “Orihuela”. 
● Para Castellón: “Castellón Capital”, “Oropesa”, “Vinaroz”. 
● Para Valencia: “Valencia Capital”, “Torrent”, “Mislata”. 
(Aquí saldrá por defecto  seleccionado “Mislata”).*/

const selectLocalidad=document.querySelector("#primero");
const selectSegundo=document.querySelector("#segundo");
const formulario=document.querySelector("#formulario");
const input=document.querySelector("input");

//eliminar los option una vez que se seleccione otra locaclidad
const selectFuncion=()=>{

    


    let resultado;
    //para coger el valor seleccionado
   let selectSeleccionado= selectLocalidad.options[selectLocalidad.selectedIndex].value


    //coger todo los valores para eliminar los valores del segundo select menos el select no seleccionado 
    if (selectSeleccionado==='Alicante' || selectSeleccionado==='Castellon' ||selectSeleccionado==='Valencia') {
        
        Array.from(selectSegundo.options).forEach(element => { 
            element.remove();
            });
     }


   if (selectSeleccionado==='Alicante') {
        console.log("Elegido alicante");

        selectSegundo.insertAdjacentHTML('beforeend',"<option>Alicante Capital</option>");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Elche</option>");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Orihuela</option>");
        resultado= true;
   }else if(selectSeleccionado==='Castellon'){

        
        console.log("Elegido castellon");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Castellón Capital</option>");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Oropesa</option>");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Vinaroz</option>");
        resultado= true;
    }else if(selectSeleccionado==='Valencia'){
        console.log("Elegido valencia");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Mislata</option>");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Valencia Capital</option>");
        selectSegundo.insertAdjacentHTML('beforeend',"<option>Torrent</option>");
        
       resultado= true;
       
    }else{
        resultado= false;
    }    

    return resultado;
}


selectLocalidad.addEventListener('blur',selectFuncion);

formulario.addEventListener('submit',(evento)=>{

    if (selectFuncion()) {
        
        alert('Formulario enviado')
    }else{
        alert('Formulario no enviado');
        evento.preventDefault();
    }
})  
   


