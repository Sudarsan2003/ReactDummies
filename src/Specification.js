import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Specification() {
  let [productData, setProductData] = useState(null)
  let params=useParams()
  let {id}=params
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProductData(res.data)
      })
  },[])

  return (
    <>
      <div id='specification-container'>
        {productData!=null ?<>
        <div id='specification-container-left'>
             <img className='specification-highlight-image' alt='productImage' src={productData.image}/>
        </div>
        <div id='specification-container-right'>
          <h3>{productData.title}</h3>
          <p><b>Price:$</b>{productData.price}</p>
          <p><b>Rating:</b>{productData.rating.rate}</p>
        </div></>
:''}
      </div>
    </>
  )
}

export default Specification
