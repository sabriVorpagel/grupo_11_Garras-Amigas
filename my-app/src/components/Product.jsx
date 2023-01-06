import React from 'react'

export const Product = (product) => {

  const image = (product.images && product.images.length > 0 && product.images[0]) ? 
    product.images[0].url : 'http://localhost:3030/api/products/image/default.png';

  return (
    <div className='item'>
        <img src={image} alt={product.name}/>
        <p>{ product.name }</p>
    </div>
  )
}