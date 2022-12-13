console.log("loginValidationFront.js connected!");


const $ = (element) => document.getElementById(element);

// expresiones regulares
const exRegs = {
  exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
  exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
  exRegPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,8}/,
  exRegMayu: /[A-Z]/,
  exRegMinu: /[a-z]/,
  exRegNum: /[0-9]/,
  exRegEsp: /[$@$!%*?&]/,
  exRegMin: /.{6,}/,
  exRegMax: /.{8}/,
};

// funcion para el mensaje de error
const msgError = (element, msg, target) => {
  $(element).innerText = msg;
  target.classList.add("is-invalid");
};



//  funcion para remover las clases invalidas
const validField = (element, target) => {
  $(element).innerText = null;
  target.classList.remove("is-invalid");
  target.classList.add("is-valid");
};

// validaciones
$("email").addEventListener("blur", async function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorEmail", "El email es obligatorio(js)", target);
        break;
      case !exRegs.exRegEmail.test(this.value):
        msgError("errorEmail", "El email tiene un formato incorrecto(js)", target);
        break;
      default:
        validField("errorEmail", target);
        break;
    }
  });
  
  $("password").addEventListener("blur", function ({ target }) {
    
    switch (true) {
      case !this.value.trim():
          msgError("errorPassword", "La contraseña es obligatoria(js)", target);
          default:
            validField("errorPassword", target);
            break;
        }
});

  $('form-login').addEventListener('submit', function (e) {
    e.preventDefault();
    let error = false;
    const elements = this.elements;
      for (let i = 0; i < elements.length - 2; i++) {
          
          if(!elements[i].value.trim() || elements[i].classList.contains('is-invalid')){
              elements[i].classList.add('is-invalid')
             $('errorSubmit').innerText = "Todos los campos son obligatorios";
             error = true;
          }
      }
    !error && this.submit()
  
  });


  // VER LA CONTRASEÑA
  $("btn-show-pass").addEventListener("click", ({ target }) => {
    if (target.localName === "i") {
      target.classList.toggle("fa-eye");
      $("password").type = $("password").type === "text" ? "password" : "text";
    }
  });