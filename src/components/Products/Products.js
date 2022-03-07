import React, {useCallback, useReducer} from 'react'

import ProductForm from './ProductForm'
import Search from './Search'
import ProductList from './ProductList'

const productReducer = (state, action) => {
  switch (action.type){
    case 'SET':
      return action.products
    case 'ADD':
      return [...state, action.product]
    case 'DELETE':
      return state.filter(product => product.id !== action.payload.id)  
    default:
      throw new Error('Error')
  }
}

const Products = () => {
  // const [products, setProducts ] = useState([])

  const [products, dispatch] = useReducer(productReducer, [])

  const addProductHandler = (item) => {
    fetch("https://hook-masood-sadri-default-rtdb.firebaseio.com/products.json",{
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response =>{
      return response.json()
    }).then(responseData => {
      // setProducts(prevProducts => {
      //   return [
      //     ...prevProducts, {
      //       id: responseData.name,
      //       ...item
      //     }
      //   ]
      // })

      dispatch({type: 'ADD',
        product:{
          id: responseData.name,
          ...item
        }
      })
    })
  }

  const searchProductsHandler = useCallback((items) => {
    // setProducts(items)
    dispatch({type: 'SET', products: items})
  }, []) 

  const deleteProductsHandler = (id) => {
    dispatch({type: 'DELETE', payload: {id: id}})
  }

  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler}/>

      <section>
        <Search onLoadedProducts={searchProductsHandler}/>
        <ProductList products={products} onRemoveItem={deleteProductsHandler} />
      </section>
    </div>
  )
}

export default Products
