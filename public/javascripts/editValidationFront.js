const $ = (element) => document.getElementById(element);

const exRegs = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegNum: /[0-9]/,
};

$('name').addEventListener('blur', function(){
    switch(true){
        case !this.value.trim():
            $('errorName').innerText= 'El nombre es obligatorio';
            break;
        case this.value.trim().length < 5:
            $('errorName').innerText= 'El nombre debe tener al menos 5 caracteres'
            break;
        case !exRegs.exRegAlfa.test(this.value):
            $('errorName').innerText= 'El nombre no tiene el formato correcto';
            break;
        default:
            $('errorName').innerText= null;
            break;
    }
})
$('description').addEventListener('blur', function(){
    switch(true){
        case !this.value.trim():
            $('errorDescription').innerText= 'El descripción es obligatorio';
            break;
        case this.value.trim().length < 20:
            $('errorDescription').innerText= 'La descripción debe tener al menos 20 caracteres'
            break;
        default:
            $('errorDescription').innerText= null;
            break;
    }
})
$('category').addEventListener('blur', function(){
    switch(true){
        case !this.value.trim():
            $('errorCategory').innerText= 'La categoria es obligatorio';
            break;
        default:
            $('errorCategory').innerText= null;
            break;
    }
})
$('images').addEventListener('blur', function(){
    switch(true){
        case !this.value.trim():
            $('errorImages').innerText= 'La imagen es obligatorio';
            break;
        default:
            $('errorImages').innerText= null;
            break;
    }
})
$('price').addEventListener('blur', function(){
    switch(true){
        case !this.value.trim():
            $('errorPrice').innerText= 'El precio es obligatorio';
            break;
        case !exRegs.exRegNum.test(this.value):
            $('errorPrice').innerText= 'El precio no tiene el formato correcto';
            break;
        default:
            $('errorPrice').innerText= null;
            break;
    }
})
$('stock').addEventListener('blur', function(){
    switch(true){
        case !this.value.trim():
            $('errorStock').innerText= 'El stock es obligatorio';
            break;
        case !exRegs.exRegNum.test(this.value):
            $('errorStock').innerText= 'El stock no tiene el formato correcto';
            break;
        default:
            $('errorStock').innerText= null;
            break;
    }
})
$('discount').addEventListener('blur', function(){
    switch(true){
        case !this.value.trim():
            $('errorDiscount').innerText= 'El descuento es obligatorio';
            break;
        case !exRegs.exRegNum.test(this.value):
            $('errorDiscount').innerText= 'El descuento no tiene el formato correcto';
            break;
        default:
            $('errorDiscount').innerText= null;
            break;
    }
})

$('main__caja__formulario').addEventListener('submit', function (e){
    e.preventDefault();
    const elements = this.elements;
    for (let i = 0; i < elements.length; i++) {
        if(!elements[i].value.trim()){
            $('errorForm').innerText= 'Algunos de los campos no es valido';
            console.log('no está todo bien')
        }else{
            this.submit()
        }
    }
})
