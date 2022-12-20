console.log("productDetail.js connected!");
const $ = (element) => document.getElementById(element);

$("from-delete").addEventListener("submit", function (e) {
     e.preventDefault();


    Swal.fire({
        title: 'Se eliminara el producto!',
        text: "Estas seguro?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quitate tú!'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            'Eliminado!',
            'El producto se elimino con exito! :)',
            'success'
            
        )
        
        }
        this.submit()
    })
})



