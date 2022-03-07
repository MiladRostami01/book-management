import React from 'react'

import './ProductList.css'

const ProductList = (props) => {
  props.products.map((item) => console.log(item))
  return (
    <section className="product-list">
      <h2>محصولات</h2>
      <ul>
        {props.products.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <span>{item.amount}x</span>
            <span className='delete-btn' onClick={props.onRemoveItem.bind(this, item.id)}>Delete</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProductList
