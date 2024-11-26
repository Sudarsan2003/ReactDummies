import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import ProductNotFound from './ProductNotFound'
import { useNavigate } from 'react-router-dom'
function Products() {
    const [homeProducts, setHomeProducts] = useState([])
    const [searchName, setSearchName] = useState("")
    const [filteredProducts, setFilteredProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setHomeProducts(res.data)
            })
    }, [])

    useEffect(() => {
        let homeProductsCopy = [...homeProducts]
        let results = homeProductsCopy.filter((item, i) => {
            if (item.title.toLowerCase().includes(searchName.toLowerCase()) == true) {
                return true
            }
        })
        setFilteredProducts(results)
    }, [searchName])

    const handleFilter=(filterType,value)=>{
        
    }

    let navigate = useNavigate()
    return (
        <>
        <div className='row'>
        <div className='col-1'>
             Filters
        </div>
        <div className='col-11'>
            <div id='search-container'>
                <input
                    className="search-field"
                    onChange={(e) => setSearchName(e.target.value)}
                    placeholder='Search Here..' />
            </div>
            <div id='product-container'>
                {searchName != "" && filteredProducts.length == 0 ? <ProductNotFound /> : ""}
                <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 row-cols-xl-4 g-4 ">
                    {searchName == "" && filteredProducts.length == 0 ? homeProducts.map((item, i) => {
                        return <div className="col ">
                            <div className="card h-100">
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"><b>Category:</b>{item.category}</p>
                                    <p className="card-text"><b>Price:</b>{item.price}$</p>
                                    <button className='card-button' onClick={() => { navigate(`/products/${item.id}`) }}>Get More Details</button>
                                </div>
                            </div>
                        </div>
                    }) : filteredProducts.map((item, i) => {
                        return <div className="col ">
                            <div className="card h-100">
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"><b>Category:</b>{item.category}</p>
                                    <p className="card-text"><b>Price:</b>{item.price}$</p>
                                    <button className='card-button' onClick={() => { navigate(`/products/${item.id}`) }}>Get More Details</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Products