console.log("creatValidator.js");
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
        case this.value.trim().length < 5 :
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

$('description').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorDescripcion', 'La descripcion es obligatoria', target)
        break;
        case this.value.trim().length < 20 :
            error('errorDescripcion', 'La descripcion debe tener como minimo veinte caracteres', target)
        break;
        case !exRegs.exRegAlfa.test(this.value):
            error('errorDescripcion', 'La descripcion deve tener caracteres alfavetico' , target)
        break;
    
        default:
            $('errorDescripcion').innerText= null;
            break;
    }
});

$('category').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorCategory', 'La caregoria es obligatoria', target)
        break;
    
        default:
            $('errorCategory').innerText= null;
            break;
    }
});

$('images').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorImages', 'La imagen es obligatoria', target)
        break;
    
        default:
            $('errorImages').innerText= null;
            break;
    }
});

$('discount').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorDiscount', 'El descuento es obligatoria', target)
        break;
        case !exRegs.exRegNumber.test(this.value):
            error('errorDiscount', 'El descuento deve tener caracteres numericos' , target)
        break;
        default:
            $('errorDiscount').innerText= null;
            break;
    }
});

$('price').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorPrice', 'El precio es obligatoria', target)
        break;
        case !exRegs.exRegNumber.test(this.value):
            error('errorPrice', 'El precio deve tener caracteres numericos' , target)
        break;
        default:
            $('errorPrice').innerText= null;
            break;
    }
});

$('stock').addEventListener('blur', function ({target}) {
    switch (true) {
        case !this.value.trim():
            error('errorStock', 'El stock es obligatoria', target)
        break;
        case !exRegs.exRegNumber.test(this.value):
            error('errorStock', 'El stock deve tener caracteres numericos' , target)
        break;
        default:
            $('errorStock').innerText= null;
            break;
    }
});


$("form-create").addEventListener("submit", function (e) {
    e.preventDefault();
    const error = false
    const elements = this.elements;
        for (let i= 0; i < elements.length -1; i++) {
            if (!elements[i].value.trim()) {
                $('advertencia').innerText ='Todos los campos tiene que estar completos'
                error = true;
            }
            
        }
    !error && this.submit()
    });
