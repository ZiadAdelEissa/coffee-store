import React from 'react'
import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function About() {
  return (
   <div className="about text-centre  ">
    <div className=" bod row align-items-center mt-5 ">
    <h1 >About Us</h1>
        <div className="title col-6 ">
            <h1>Lux Coffee Barr</h1>
            <h3>Selling Happiness</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni fugiat ipsam error rerum voluptatum numquam aperiam nulla dignissimos ratione laboriosam! Nisi perferendis aperiam debitis amet. Minus laudantium quas iure? Culpa.</p>
        </div>
        <div className="col-6">
            <img src="images/about.jpg" className="img-fluid" alt=""/>
    </div>
    </div>
   </div>
  )
}
