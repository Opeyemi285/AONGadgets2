import './NavBar.css'
import AonLogo from './assets/aon-logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
function Nav() {
    return(
        <>
            <nav>
                <ul className="float-left">
                    <li><Link to="/"><img src={AonLogo} width="200px" height="50px" alt="AONGadgets Logo" /></Link></li>
                    <li className="px-2 desktop"><input type="search" name="search" id="search" placeholder="Search..." /></li>
                    <li className="desktop"><Link to="/login.html"><i className="bi bi-person-circle"></i> Login</Link>/<Link to="/register.html">Register</Link></li>
                    <li className="desktop"><Link to="/favourite.html"><i className="bi bi-heart"></i></Link></li>
                    <li className="desktop"><Link to="/Cart"><i className="bi bi-cart"></i></Link></li>
                    <li className="mobile"><Link to="#"><i className="bi bi-list"></i></Link></li>   
                </ul> 
            </nav>
        </>
    )
}
export default Nav