console.log("userValidationFront.js connected!");


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

// **************
const validPass = (element, exReg, value) => {
  if (!exReg.test(value)) {
    $(element).classList.add("text-danger");
  } else {
    $(element).classList.add("text-success");
    $(element).classList.remove("text-danger");
  }
};



// const verifyEmail = async (email) => {
//   try {
//     let response = await fetch("/api/apiUsersController/", {
//       method: "POST",
//       body: JSON.stringify({
//         email: email,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     let result = await response.json();

//     console.log(result);

//     return result.verified;
//   } catch (error) {
//     console.error;
//   }
// };
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
      validField("errorSurname", target);

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
        validField("errorPass2", target);
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

  $("avatar").addEventListener("change", function({target}){
    let reader = new FileReader();
    reader.readAsDataURL(target.files[0]);

    reader.onload = () => {
        $("avatar").src = reader.result
    }
  
  
  
  
  
  })

  // $("form-register").addEventListener("submit", function (e) {

  //   e.preventDefault();
  //   let error = false;
  //   const elements = this.elements;
  //   for (let i = 0; i < elements.length - 2; i++) {
        
  //       if(!elements[i].value.trim() || elements[i].classList.contains('is-invalid')){
  //           elements[i].classList.add('is-invalid')
  //          $('msgError').innerText = 'Hay campos con errores o están vacíos';
  //          error = true;
  //       }
  //   }


  
  
  // !error && this.submit()

  //  Swal.fire({
  //       position: "center",
  //       icon: "info",
  //       title: "Recibirás un email para confirmar tu registración",
  //       showConfirmButton: true,
  //       allowOutsideClick: false,
  //       allowEscapeKey: false,
  //   }).then((result) => {
  //       if (result.isConfirmed) {
  //           this.submit();
  //       }
  //   });
  // })


//   $('form-register').addEventListener('submit', (e) => {
//     e.preventDefault();
//     let error = false;
//     const elements = $('form-register').elements;

    


//   /*   Array.from(elements).forEach(element => {
//     }) */

//     for (let i = 0; i < elements.length - 2; i++) {
        
//         if(!elements[i].value || elements[i].classList.contains('is-invalid')){
//             error = true;
//             elements[i].classList.add('is-invalid')
//             $('msgError').hidden = false;
//             setTimeout(() => {
//                 $('msgError').hidden = true;

//             }, 3000);
//         }
        
//     }

//     !error &&  $('form-register').submit()
// })


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






















// cxcxcxcxcxcxcxccxcxcxcxcusdcuisdgvoshfdriovjhfdoibjvspjbpj<bpjfs

// $('name').addEventListener('blur', function(){
//     switch(true){
//         case !this.value.trim():
//             $('errorName').innerText= 'El nombre es obligatorio';
//             break;
//         case this.value.trim().length < 2:
//             $('errorName').innerText= 'El nombre debe tener al menos 2 caracteres'
//             break;
//         case !exRegs.exRegAlfa.test(this.value):
//             $('errorName').innerText= 'El nombre no tiene el formato correcto';
//             break;
//         default:
//             $('errorName').innerText= null;
//             break;
//     }
// }),
// $('surname').addEventListener('blur', function(){
//   switch(true){
//       case !this.value.trim():
//           $('errorSurname').innerText= 'El apellido es obligatorio';
//           break;
//       case this.value.trim().length < 2:
//           $('errorSurname').innerText= 'El apellido debe tener al menos 2 caracteres'
//           break;
//       case !exRegs.exRegAlfa.test(this.value):
//           $('errorSurname').innerText= 'El apellido no tiene el formato correcto';
//           break;
//       default:
//           $('errorSurname').innerText= null;
//           break;
//   }
// }),
// // $('email').addEventListener("blur", function () {
// //   switch (true) {
// //     case !this.value.trim():
// //       $('email').innerText= "El email es obligatorio";
// //       break;
// //     case !exRegEmail.test(this.value):
// //       $('email').innerText= "Debes ingresar un email válido";
// //       break;
// //     default:
// //       $('email').innerText= null;
// //       break;
// //   }
// // });
// // $('password').addEventListener("blur", function () {
// //   switch (true) {
// //     case !password.value.trim():
// //       $('password').innerText= "El password es obligatorio";
// //       break;
// //     case !exRegPassword.test(password.value):
// //       $('email').innerText= "Debe tener una mayúscula, una minúscula, un número, un carácter especial y al menos 8 caracteres"
// //       break;
// //     default:
// //       $('password').innerText= null;
// //       break;
// //   }
// // });

// $('phone').addEventListener('blur', function(){
//     switch(true){
//         case !this.value.trim():
//             $('errorPhone').innerText= 'El número teléfonico es obligatorio';
//             break;
//         case !exRegs.exRegNum.test(this.value):
//             $('errorPhone').innerText= 'El número teléfonico no tiene el formato correcto';
//             break;
//         default:
//             $('errorPhone').innerText= null;
//             break;
//     }
// }),
// $('height').addEventListener('blur', function(){
//   switch(true){
//       case !this.value.trim():
//           $('errorHeight').innerText= 'La altura es obligatoria';
//           break;
//       case !exRegs.exRegNum.test(this.value):
//           $('errorHeight').innerText= 'La altura no tiene el formato correcto';
//           break;
//       default:
//           $('errorHeight').innerText= null;
//           break;
//   }
// }),
// $('avatar').addEventListener('blur', function(){
//     switch(true){
//         case !this.value.trim():
//             $('errorAvatar').innerText= 'La foto de perfil es obligatoria';
//             break;
//         default:
//             $('errorAvatar').innerText= null;
//             break;
//     }
// }),
// $('street').addEventListener('blur', function(){
//     switch(true){
//         case !this.value.trim():
//             $('errorStreet').innerText= 'El domicilio es obligatorio';
//             break;
//         case this.value.trim().length < 2:
//             $('errorStreet').innerText= 'El domicilio debe tener al menos 2 caracteres'
//             break;
//         case !exRegs.exRegAlfa.test(this.value):
//             $('errorStreet').innerText= 'El domicilio no tiene el formato correcto';
//             break;
//         default:
//             $('errorStreet').innerText= null;
//             break;
//     }
// }),
// $('city').addEventListener('blur', function(){
//   switch(true){
//       case !this.value.trim():
//           $('errorCity').innerText= 'La localidad es obligatoria';
//           break;
//       case this.value.trim().length < 2:
//           $('errorCity').innerText= 'La localidad debe tener al menos 2 caracteres'
//           break;
//       case !exRegs.exRegAlfa.test(this.value):
//           $('errorCity').innerText= 'La localidad no tiene el formato correcto';
//           break;
//       default:
//           $('errorCity').innerText= null;
//           break;
//   }
// }),
// $('province').addEventListener('blur', function(){
//   switch(true){
//       case !this.value.trim():
//           $('errorProvince').innerText= 'La provincia es obligatoria';
//           break;
//       case this.value.trim().length < 2:
//           $('errorProvince').innerText= 'La provincia debe tener al menos 2 caracteres'
//           break;
//       case !exRegs.exRegAlfa.test(this.value):
//           $('errorProvince').innerText= 'La provincia no tiene el formato correcto';
//           break;
//       default:
//           $('errorProvince').innerText= null;
//           break;
//   }
// })

// $('#form-register').addEventListener('submit', function (e){
//     e.preventDefault();
//     const elements = this.elements;
//     for (let i = 0; i < elements.length; i++) {
//         if(!elements[i].value.trim()){
//             $('errorForm').innerText= 'Algunos de los campos no es valido';
//             console.log('no está todo bien')
//         }else{
//             this.submit()
//         }
//     }
// })
  