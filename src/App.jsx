import {Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Nav from'./NavBar.jsx'
import Cart from './cart.jsx'
import Home from './Home.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
