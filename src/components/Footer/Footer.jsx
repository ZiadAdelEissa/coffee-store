import React from 'react'
import'./footer.css'
import lux from '../images/Lux.mp4'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faLocationDot,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
        <div className='row justify-content-centre text-centre align-items-center h-75'>
            <div className='linkss col-md-4 col-lg-4'>
               <Link to='/'>Home</Link>
               <Link to='/'>About</Link>
               <Link to='/'>Proudect</Link>
               <Link to='/'>Contact</Link>
            </div>
            <div className=' pref col-md-4 col-lg-4'>
                <video className='vid rounded-4' src={lux} autoPlay loop muted/>
                <h1>Lux Coffee Barr</h1>
                <h3>Selling Happiness Not Coffee</h3>
            </div>
            <div className='info col-md-4 col-lg-4'>
                <p><i><FontAwesomeIcon icon={faPhone} /></i>phone:0112548995</p>
                <p><i><FontAwesomeIcon icon={faLocationDot} /></i>email:luxx@gmail.com</p>
                <p><i><FontAwesomeIcon icon={faEnvelope} /></i>address:233 ST-Degla-Maddi</p>


            </div>
        </div>
      
    </div>
  )
}
