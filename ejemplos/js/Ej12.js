/*12. Realiza un formulario que tenga dos campos de texto.
 Deberá validar antes de enviarse 
si uno de los campos es un anagrama del otro y enviarse solo si lo es.
 Se ignorarán mayúsculas, minúsculas y espacios. */

const texto1=document.querySelector(".texto1");
const texto2=document.querySelector(".texto2");
const formulario=document.querySelector("#formulario");

const comprobarCampos=()=>{

    let campo1=texto1.value.toLowerCase();
    let campo2=texto2.value.toLowerCase();
   
    //espacion blanco
    let campo1_sinEspacio=campo1.replace(' ','');
    let campo2_sinEspacio=campo2.replace(' ','');


    if (campo1_sinEspacio.length!==campo2_sinEspacio.length) {
        
        alert("longitud diferente");
        return false;
        
    }else{
         
       let cont=0;
        while ( campo1_sinEspacio.length> cont ){
 
             if (campo2_sinEspacio.indexOf(campo1_sinEspacio[cont])==-1) {
                 
                 return false;
             }
             cont++;
    }
    return true;
}
}

texto2.addEventListener('blur',comprobarCampos);


formulario.addEventListener("submit",(evento)=>{
//&& (texto1.length===0 && texto2.length===0)
        if (comprobarCampos()) {
            alert("Formulario enviado");
           
        }else{
            alerta("no se puede enviar el formulario");
            evento.preventDefault();
            
            
        }
})
