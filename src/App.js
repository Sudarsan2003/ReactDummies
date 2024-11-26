import React from 'react'
import Home from './Home'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Products from './Products'
import Header from './Header'
import ReturnsOrders from './ReturnsOrders'
import Profile from './Profile'
import Contact from './Contact'
import Specification from './Specification'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/returns' element={<ReturnsOrders/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/products/:id' element={<Specification/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='*' element={<h2>Page Not Found.....</h2>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App