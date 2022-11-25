
const input=document.querySelector(".nombre");
const boton=document.querySelector(".boton");

 
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P",
"D", "X", "B", "N", "J", "Z", "S", "Q", "V",
"H", "L", "C", "K", "E"];


const validarDni=()=>{

    let dni=input.value;

    let letra=dni.substring(dni.length-1);
    console.log(letra)

    let dniSinLetra=dni.substring(0,dni.length-1);
    console.log(dniSinLetra);

    let resto=dniSinLetra%23;
    console.log(resto);

    if(letra===letras[resto]){
       return  true;
    }else{
        alert('Dni incorecto');
        return false;
    }

}

input.addEventListener('blur',validarDni);





const formulario=document.querySelector("#formulario");



/* formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault();
    if (validarDni()) {
        alert('Formulario enviado');  
        evento.target.submit();
        
       
    }else{
        alert('Formulario no  enviado'); 
     
    }

    

}) */
formulario.addEventListener('submit',(evento)=>{
   
    if (!validarDni())  {
        evento.preventDefault();
        alert('Formulario no  enviado'); 
        return;

    }   
    
    
 /*        
        alert('Formulario enviado');  
      return true; */

    

}) 

