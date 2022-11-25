const $d= document;

console.log($d.getElementById("menu"));
console.log($d.querySelector("#menu"));
console.log($d.querySelectorAll("a"));

//evento en un boton
/** 
const button = document.querySelector("#evento-atributo");
const nombre = function() {
    alert("Hola");
    };
button.addEventListener("click", nombre);
*/

//evento en un boton diego
/** 
const button= document.querySelector("#b");

const nombre = function() {

    const input1 = document.querySelector("#nombre");
    const input2= document.querySelector("#apellido");

    alert("Hola "+input1.value+" "+input2.value);
    };

button.addEventListener("click", nombre);
*/

const button= document.querySelector("#b");

const nombre = function() {

    const input1 = document.querySelector("#nombre");
    const input2= document.querySelector("#apellido");

    <label>Hola {input1.value} {input2.value}</label>
}
button.addEventListener("click", nombre);