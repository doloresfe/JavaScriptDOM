const boton = document.querySelector("button");
const ul = document.querySelector("ul");


 const numeroAleatorio = function() {
    const arrayColores=['blue','yellow','red','pink','green','orange','gray','purple']
    
    let numero=Math.round(Math.random()*100);
    let numeroColor=Math.round(Math.random()*arrayColores.length)
    let color=arrayColores[numeroColor];
    ul.insertAdjacentHTML("beforeend"," <button style= background-color:"+color+">"+numero+"</button>");

    
    };
boton.addEventListener('click',numeroAleatorio);



  
const texto = function() {
    const botonNumero = document.querySelector("ul button");
        alert(botonNumero.textContent);  
   
};
ul.addEventListener('click',texto);
