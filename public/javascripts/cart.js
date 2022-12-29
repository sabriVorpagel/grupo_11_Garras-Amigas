console.log('cart.js conectado!!!!')

document.getElementById('cartModal').addEventListener('show.bs.modal', async (event) => {
    
   try {
    let response =  await fetch('/api/carts')
    let result =  await response.json() 
    console.log(result)
    
   } catch (error) {
        console.error
   }
})