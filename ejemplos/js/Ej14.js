/*14. Valida un campo input type=date de un formulario 
donde pida la fecha de nacimiento*/

const fecha=document.querySelector(".fecha");
const formulario=document.querySelector("#formulario");

const date=fecha.value;

const validarFecha=(fechaNacimiento)=>isNaN(Date.parse(fechaNacimiento));
 

fecha.addEventListener('submit',(evento)=>{

    if (validarFecha(date)) {
        
        alert('Formulario enviado');
        
    }else{
        evento.preventDefault();
        alert('Fecha incorrecta\nFormulario no enviado');
    }

});


    