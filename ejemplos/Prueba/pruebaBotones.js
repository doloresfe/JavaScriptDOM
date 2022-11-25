const botonCrear=document.querySelector(".crearBotones");

const botonReiniciar=document.querySelector(".reiniciar");


const numeroBotones=document.querySelector(".inputNBotones");


const body=document.querySelector("body");

let color;

const generarBotones=()=>{

    for (let index = 0; index < numeroBotones.value; index++) {
      
    const boton=document.createElement("button");
    boton.setAttribute("class","botonColor");

    color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    boton.textContent=color;
    body.appendChild(boton);
    console.log(boton);
    boton.style.background=color;

    }


     const botones=document.querySelectorAll(".botonColor");
     console.log(botones)
    for (const iterator of botones) {
        iterator.addEventListener('click',()=> window.style.background='color');
    }

    
}

botonCrear.addEventListener('click',generarBotones)








const reiniciar=()=>{

     

}


botonReiniciar.addEventListener('click',reiniciar);