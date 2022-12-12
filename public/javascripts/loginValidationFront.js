console.log("loginValidationFront.js connected!");


const $ = (element) => document.getElementById(element);


// anula el envio de form hasta validarlo
$("form-register").addEventListener("submit", function (e) {
  e.preventDefault();
});


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
const cleanField = (element, target) => {
  $(element).innerText = null;
  target.classList.remove('is-invalid', 'is-valid')
};

const validField = (element,{target}) => {
  cleanField(element, target)
  target.classList.add('is-valid');
  
};
$("email").addEventListener("blur", async function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorEmail", "El email es obligatorio(js)", target);
        break;
      case !exRegs.exRegEmail.test(this.value):
        msgError("errorEmail", "El email tiene un formato incorrecto(js)", target);
        break;
      case await verifyEmail(this.value):
        msgError("errorEmail", "El email ya está registrado(js)", target);
        break;
      default:
        validField("errorEmail", target);
        break;
    }
  });
  
  $("password").addEventListener("focus", () => {
    $("msgPass").hidden = false;
  });
  
  $("password").addEventListener("blur", function ({ target }) {
    $("msgPass").hidden = true;
    switch (true) {
      case !this.value.trim():
        msgError("errorPassword", "La contraseña es obligatoria(js)", target);
        break;
      case !exRegs.exRegPass.test(this.value):
        msgError(
          "errorPass",
          "La contraseña debe tener un símbolo, una número, una mayúscula, una minúscula y entre 6 y 8 caracteres(js)",
          target
        );
        break;
      default:
        validField("errorPassword", target);
        break;
    }
  });
  
  $("password").addEventListener("keyup", function ({ target }) {
    validPass("mayu", exRegs.exRegMayu, target.value);
    validPass("minu", exRegs.exRegMinu, target.value);
    validPass("num", exRegs.exRegNum, target.value);
    validPass("esp", exRegs.exRegEsp, target.value);
    validPass("min", exRegs.exRegMin, target.value);
    validPass("max", exRegs.exRegMax, target.value);
  });
  
  $('form-register').addEventListener('submit', function (e) {
    e.preventDefault();
    let error = false;
    let elements = this.elements;
  
    for (let i = 0; i < elements.length - 2; i++) {
        if(!elements[i].value){
            elements[i].classList.add('is-invalid');
            $('msgError').innerHTML = "Todos los campos son obligatorios";
            error = true
        }
    }
  
    for (let i = 0; i < elements.length - 2; i++) {
       
        if(elements[i].classList.contains('is-invalid')){
            error = true
        }
    }
    if(!error){
      $('msgError').innerHTML = null
  }
  })