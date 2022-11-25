// let id = (id) => document.getElementById(id);

// let classes = (classes) => document.getElementsByClassName(classes);

// let username = id("username"),
//   email = id("email"),
//   password = id("password"),
//   form = id("form"),
//   errorMsg = classes("error"),
//   successIcon = classes("success-icon"),
//   failureIcon = classes("failure-icon");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   engine(username, 0, "Username cannot be blank");
//   engine(email, 1, "Email cannot be blank");
//   engine(password, 2, "Password cannot be blank");
// });

// let engine = (id, serial, message) => {
//   if (id.value.trim() === "") {
//     errorMsg[serial].innerHTML = message;
//     id.style.border = "2px solid red";

//     // icons
//     failureIcon[serial].style.opacity = "1";
//     successIcon[serial].style.opacity = "0";
//   } else {
//     errorMsg[serial].innerHTML = "";
//     id.style.border = "2px solid green";

//     // icons
//     failureIcon[serial].style.opacity = "0";
//     successIcon[serial].style.opacity = "1";
//   }
// };
/*
1)Boton submit-> desahabilitado hasta que se introduzca campo
2)Validaciones
  user name-> No puede tener espacios, ni caracteres ,;.!?
  email-> email valido y hostmail,gmail,yahoo
  password-> 5 caracteres, 1mayuscula,1 minuscula,1numero
  AL PULSAR EL SUBMIT
  3) mensaje de error----|
  clase css--------------|hacer funcion
  desaparezca 3 seg------|

    Mensaje personalizado debajo del iput
*/

//Para desahabilitar el boton
const boton=document.querySelector("button").disabled = true


const inputNombre=document.querySelector('input[name="username"]');
const validarNombre=(nombre)=>{


    for (let index = 0; index < nombre.length; index++) {
        if (nombre.charAt(indice)==" ") {
            return false;
        } 
    }

    const expresion=/'[^,;.!?]'/;

    if (expresion.test(nombre)) return false;

    return true;

}

//funciona
const inputEmail=document.querySelector('input[name="email"]');

const validarEmail=(email)=>{

  const expresion= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+).(\.\w{2,10})+$/;
  const arrayLetra=['hostmail','gmail','yahoo'];

console.log(expresion.test(email))
  if (!expresion.test(email)) return false;

    let letra=email.split('@');
    //para salcar lo que va despues de la @
    let dominio=letra[1].split('.')

    if (!arrayLetra.includes(dominio[0])) return false;

    return true;
}
//inputEmail.addEventListener('blur',()=>validarEmail(inputEmail.value));

