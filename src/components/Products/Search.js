import React, { useState, useEffect, useRef } from 'react'

import Card from '../UI/Card'

import './Search.css'

const Search = React.memo(({onLoadedProducts}) =>{
  const [searchItems, setSearchItems] = useState('')

  const inputRef = useRef() // mentor was mistaken

  useEffect(() => {
    const timer = setTimeout(() => {
  
      // if(searchItems === inputRef.current.value){  // mentor was mistaken
      const query = searchItems.length === 0 ? '' : `?orderBy="title"&equalTo="${searchItems}"`

      fetch("https://hook-masood-sadri-default-rtdb.firebaseio.com/products.json" + query)
      .then(response => {
        return response.json()
      })
      .then(responseData => {
        const loadedData = []

        for (const item in responseData) {
          loadedData.push({
            id: item,
            title: responseData[item].title,
            amount: responseData[item].amount 
          })
        }

        onLoadedProducts(loadedData)
      })

    // } 
    }, 500);

    return () => {
      clearTimeout(timer)
    }
  }, [ searchItems, onLoadedProducts, inputRef ])

  return ( 
    <section className="search">
      <Card>
        <div className="search-input">
          <label>جست و جو</label>
          <input type="text" 
            value={searchItems} 
            // ref={inputRef} // mentor was mistaken
            onChange={(e) => setSearchItems(e.target.value)}
          />
        </div>
      </Card>
    </section>
  )
})

export default Search
