import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './proudects.css'

export default function Proudects(props) {
  // const {proudects} = props
const Urlapi = ('https://fake-coffee-api.vercel.app/api')
const [proudect, setProudect] = useState([])
const getproudect = () => {
  fetch(Urlapi)
   .then(res => res.json())
   .then(data => {
      setProudect(data)
    })
  //  .catch(err => console.log(err))
}
useEffect(() => {
  getproudect()
}, [])
    
  return (
    <>
    <div className='container '>
    <div className='row max="0" row-cols-lg-4 cols-sm-1 cols-xxl-4 '>
        {proudect.map(post =>(
        <div className='col ' key={post.id}>
    <div className="card">
        
        <img src={post.image_url} className='img' alt='...' />
        <div className='card-body'>
            <h1 className='card-title'>{post.name}</h1>
            <p className="sub-title">{post.price}</p>
            <p className="card-info">{post.description}</p>
            <Link
            className="card-btn"
            to={`./Details${post.id}`}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Details
          </Link>        </div>
        
      
    </div>
   
    </div>
    )).slice(0,12)}
    </div>
    </div>
    </>
  )
}
