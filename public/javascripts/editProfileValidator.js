console.log("editProfileValidator.js");
const $ = (element) => document.getElementById(element);

const exRegs = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegNumber : /^[0-9]+$/
}

const error = (element, msg) => {
    $(element).innerText= msg ;
    
}

$('name').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorNombre', 'El nombre es obligatorio', target)
        break;
        case this.value.trim().length < 3 :
            error('errorNombre', 'El nombre como minimo debe tener cinco caracteres', target)
        break;
        case !exRegs.exRegAlfa.test(this.value):
            error('errorNombre', 'El nombre deve tener caracteres alfavetico' , target)
        break;
    
        default:
            $('errorNombre').innerText= null;
            break;
    }
});

$('surname').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorSurname', 'El apellido es obligatorio', target)
        break;
        case this.value.trim().length < 4 :
            error('errorSurname', 'El apellido como minimo debe tener cinco caracteres', target)
        break;
        case !exRegs.exRegAlfa.test(this.value):
            error('errorSurname', 'El apellido deve tener caracteres alfavetico' , target)
        break;
    
        default:
            $('errorSurname').innerText= null;
            break;
    }
});

$("street").addEventListener("blur", function ({ target }) {
    switch (true) {
        case !this.value.trim():
            error("errorStreet", "La dirección es obligatoria", target);
        break;
        case this.value.trim().length < 2:
            error( "errorStreet", "La dirección debe tener como minimo dos caracteres", target );
        break;
        case !exRegs.exRegAlfa.test(this.value):
            error("errorStreet", "La dirección debe tener solo letras", target);
        break;
        
        default:
            $("errorStreet").innerText= null;
        break;
    }
});

$("phone").addEventListener("blur", function ({ target }) {
    switch (true) {
        case !this.value.trim():
            error("errorPhone", "El número teléfonico es obligatoria", target);
        break;
        case this.value.trim().length != 10:
            error( "errorPhone", "El teléfono debe tener 10 caracteres", target);
        break;
        case !exRegs.exRegNum.test(this.value):
        error("errorPhone", "El teléfono debe  tener solo números", target);
        break;
        
        default:
            $("errorPhone").innerText= null ;
        break;
    }
});

