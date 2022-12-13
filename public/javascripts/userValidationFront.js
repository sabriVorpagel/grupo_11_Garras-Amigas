console.log("userValidationFront.js connected!");


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

// **************
const validPass = (element, exReg, value) => {
  if (!exReg.test(value)) {
    $(element).classList.add("text-danger");
  } else {
    $(element).classList.add("text-success");
    $(element).classList.remove("text-danger");
  }
};


// validaciones
$("name").addEventListener("blur", function ({ target }) {
  switch (true) {
    case !this.value.trim():
      msgError("errorName", "El nombre es obligatorio", target);
      break;
    case this.value.trim().length < 2:
      msgError("errorName","El nombre  debe tener como mínimino  dos caracteres", target);
      break;
    case !exRegs.exRegAlfa.test(this.value):
      msgError("errorName", "El nombre debe tener solo letras", target);
      break;
    default:
      validField("errorName", target);

      break;
      } 
});

$("surname").addEventListener("blur", function ({ target }) {
  switch (true) {
    case !this.value.trim():
      msgError("errorSurname", "El apellido es obligatorio", target);
      break;
    case this.value.trim().length < 2:
      msgError(
        "errorSurname",
        "El apellido como mínimino debe tener dos caracteres",
        target
      );
      break;
    case !exRegs.exRegAlfa.test(this.value):
      msgError("errorSurname", "El apellido debe tener solo letras", target);
      break;
    default:
      validField("errorSurname", target);
      break;
  }
});

$("email").addEventListener("blur", async function ({ target }) {
  switch (true) {
    case !this.value.trim():
      msgError("errorEmail", "El email es obligatorio", target);
      break;
    case !exRegs.exRegEmail.test(this.value):
      msgError("errorEmail", "El email tiene un formato incorrecto", target);
      break;
    case await verifyEmail(this.value):
      msgError("errorEmail", "El email ya está registrado", target);
      break;
    default:
      $('errorName').innerText= null;
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
      msgError("errorPassword", "La contraseña es obligatoria", target);
      break;
    case !exRegs.exRegPass.test(this.value):
      msgError(
        "errorPass",
        "La contraseña debe tener un símbolo, una número, una mayúscula, una minúscula y entre 6 y 8 caracteres",
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

$("password2").addEventListener("blur", function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorPassword2", "Debes verificar la contraseña", target);
        break;
      case this.value.trim() !== $('password2').value.trim():
        msgError(
          "errorPassword2",
          "Las contraseñas no coinciden",
          target
        );
        break;
      default:
        validField("errorPassword2", target);
        break;
    }
  });
  $("street").addEventListener("blur", function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorStreet", "La dirección es obligatoria", target);
        break;
      case this.value.trim().length < 2:
        msgError(
          "errorStreet",
          "La dirección debe tener como minimo dos caracteres",
          target
        );
        break;
      case !exRegs.exRegAlfa.test(this.value):
        msgError("errorStreet", "La dirección debe tener solo letras", target);
        break;
      default:
        validField("errorStreet", target);
        break;
    }
  });
  $('avatar').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorAvatar', 'La imagen es obligatoria', target)
        break;
    
        default:
            $('errorAvatar').innerText= null;
            break;
    }
});
  
  $("city").addEventListener("blur", function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorCity", "La provincia es obligatoria", target);
        break;
      case this.value.trim().length < 2:
        msgError(
          "errorCity",
          "La ciudad debe tener como mínimino  dos caracteres",
          target
        );
        break;
      case !exRegs.exRegAlfa.test(this.value):
        msgError("errorCity", "La ciudad debe tener solo letras", target);
        break;
      default:
        validField("errorCity", target);
        break;
    }
  });
  $("province").addEventListener("blur", function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorProvince", "La provincia es obligatoria", target);
        break;
      case this.value.trim().length < 2:
        msgError(
          "errorProvince",
          "La provincia debe tener como mínimino  dos caracteres",
          target
        );
        break;
      case !exRegs.exRegAlfa.test(this.value):
        msgError("errorProvince", "La provincia debe tener solo letras", target);
        break;
      default:
        validField("errorProvince", target);
        break;
    }
  });
  $("phone").addEventListener("blur", function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorPhone", "El número teléfonico es obligatoria", target);
        break;
      case this.value.trim().length < 5:
        msgError(
          "errorPhone",
          "El teléfono debe tener como mínimino cinco caracteres",
          target
        );
        break;
      case !exRegs.exRegNum.test(this.value):
        msgError("errorPhone", "El teléfono debe  tener solo números", target);
        break;
      default:
        validField("errorPhone", target);
        break;
    }
  });
  $("height").addEventListener("blur", function ({ target }) {
    switch (true) {
      case !this.value.trim():
        msgError("errorHeight", "La altura es obligatoria", target);
        break;
      case !exRegs.exRegNum.test(this.value):
        msgError("errorHeight", "La altura debe  tener solo números", target);
        break;
      default:
        validField("errorHeight", target);
        break;
    }
  });


  
$("form-register").addEventListener("submit", function (e) {

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
  $("btn-show-pass2").addEventListener("click", ({ target }) => {
    if (target.localName === "i") {
      target.classList.toggle("fa-eye");
      $("password2").type = $("password2").type === "text" ? "password" : "text";
    }
  });



