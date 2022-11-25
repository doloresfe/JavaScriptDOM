const formulario=document.querySelector('form');


const inputnombre=document.querySelector('input[name="fullname"]');
inputnombre.addEventListener('blur',()=>{

    if (validarNombre(inputnombre.value)) {
        return true;
    }
});
const validarNombre=(nombre)=>{

    const parrafo=document.querySelector(".nombre");
    const parrafoError=document.createElement('p');
    parrafo.appendChild(parrafoError);

    const expresion=/[^0-9]/ig;

    if (nombre=="") {
        parrafoError.style.color='red';
        parrafoError.textContent='Vacio';
        setTimeout(() => {
            parrafoError.remove();    
          }, 5000);
        return false;
    }else if(nombre.length>80){
        parrafoError.style.color='red';
        parrafoError.textContent='Mayor longitud';
        setTimeout(() => {
            parrafoError.remove();    
          }, 5000);
        return false;
    }else if(!expresion.test(nombre)){
        parrafoError.style.color='red';
        parrafoError.textContent='Numeros no permitidos';
        setTimeout(() => {
            parrafoError.remove();    
          }, 5000);
        return false;
    }else{
            parrafoError.remove();    
         
        return true;
    }
}





const inputEmail=document.querySelector('input[name="email"]');
const validarEmail=(email)=>{


    const parrafo=document.querySelector(".email");
    const parrafoError=document.createElement('p');
    parrafo.appendChild(parrafoError);


    const expresion = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+).(\.\w{2,10})+$/;

    if (!expresion.test(email)) {
        parrafoError.style.color='red';
        parrafoError.textContent='Email mal definido';
        setTimeout(() => {
            parrafoError.remove();    
          }, 5000);
        return false;
    }else{
            parrafoError.remove();    
        return true;
    }

}

inputEmail.addEventListener('blur',()=>{

    if (validarEmail(inputEmail.value)) {
        return true;
    }
})




const inputTlf=document.querySelector('input[name="phone"]');

const validarTlf=(tlf)=>{


    const parrafo=document.querySelector(".tlf");
    const parrafoError=document.createElement('p');
    parrafo.appendChild(parrafoError);


    if (tlf.length==9) {
        return true;
    }else{
        parrafoError.style.color='red';
        parrafoError.textContent='Telefono mal definido';
        setTimeout(() => {
            parrafoError.remove();    
          }, 5000);
        return false;
    }
}

inputTlf.addEventListener('blur',()=>{

    if (validarTlf(inputTlf.value)) {
        return true;
    }
})



const inputFoco=document.querySelector('input[name="affair"]');

const validarFoco=(foco)=>{

    const parrafo=document.querySelector(".foro");
    const parrafoError=document.createElement('p');
    parrafo.appendChild(parrafoError);

    const expresion=/[^\ || /]/ig;

    //comprobar la expreson regular
   if (foco=="") {
    parrafoError.style.color='red';
    parrafoError.textContent='Vacio';
    setTimeout(() => {
        parrafoError.remove();    
      }, 5000);
    return false;
   }else if(foco.length>120){
    parrafoError.style.color='red';
    parrafoError.textContent='Mayor longitud';
    setTimeout(() => {
        parrafoError.remove();    
      }, 5000);
    return false;
   }else{
    return true;
   }
}

inputFoco.addEventListener('blur',()=>{

    if (validarFoco(inputFoco.value)) {
        return true;
    }
});



const inputMensaje=document.querySelector('textarea[name="message"]');

const validarMensaje=(mensaje)=>{

    const parrafo=document.querySelector(".mensaje");
    const parrafoError=document.createElement('p');
    parrafo.appendChild(parrafoError);

   if (mensaje=="") {
    parrafoError.style.color='red';
    parrafoError.textContent='Vacio';
    setTimeout(() => {
        parrafoError.remove();    
      }, 5000);
    return false;
   }else if(mensaje.length>300){
    parrafoError.style.color='red';
    parrafoError.textContent='Mayor longitud';
    setTimeout(() => {
        parrafoError.remove();    
      }, 5000);
   }else{
    return true;
   }
}

inputMensaje.addEventListener('blur',()=>{

    if (validarMensaje(inputMensaje.value)) {
        return true;
    }
});




formulario.addEventListener('submit',(evento)=>{


    if (validarNombre(inputnombre.value) && validarEmail(inputEmail.value) &&
    validarTlf(inputTlf.value) && validarFoco(inputFoco.value) && validarMensaje(inputMensaje.value)) {
       
        return true;
    }else{
        evento.preventDefault();
    }
})