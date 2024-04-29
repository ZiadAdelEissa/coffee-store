import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faRectangleXmark} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
export default function Navbar() {
    
  return (
    <>
 <nav>
        <ul className='nav-bar'>
            <li className='logo'><Link to="/"><img classNameName='rounded-4 'src='images/lux.png' alt='...'/></Link></li>
            <input type='checkbox' id='check' />
            <span className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <label for="check" className="close-menu"><i className="fas fa-times"><FontAwesomeIcon icon={faRectangleXmark} /></i></label>
            </span>
            <label for="check" className="open-menu"><i className="fas fa-bars"><FontAwesomeIcon icon={faBars} /></i></label>
        </ul>
    </nav>
    {/* <div className="header">
      <div className="container">
          <h1>Fashion<span>Shop</span></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, neque unde expedita alias itaque praesentium officia suscipit in sapiente tempore et, doloribus magni deleniti at corporis accusantium, error dolores voluptatem.</p>
      </div>
      </div> */}
    </>
  )
}
