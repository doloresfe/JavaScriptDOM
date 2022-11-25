/*11. Realiza un formulario que pida una dirección de email y 
la valide antes de enviarla:
a) Debe validar si el email sigue el formato texto@servidor.loquesea
b) Además de validar el formato anterior, debe comprobar que 
servidor.loquesea este
como servidor admitido en un array de servidores llamado “listaServidores”.*/

let formulario = document.querySelector("#formulario");

const validarEmail = (email) => {
  let listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];

  //expresion regularar
  const ex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if (!ex.test(email)) return false;

  let servidor = email.split("@");

  if (!listaServidores.includes(servidor[1])) return false;

  return true;
};

formulario.addEventListener("submit", (evento) => {
  let input = document.querySelector(".email");
  if (validarEmail(input.value)) {
    alert("esta incluido");
  } else {
    evento.preventDefault();
    alert("no esta incluido");
  }
});
